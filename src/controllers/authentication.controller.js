/* eslint-disable require-jsdoc */
import jwtDecode from 'jwt-decode';
import _ from 'lodash';
import utils from '../utils/authentication.utils';
import responseHandlers from '../utils/responseHandlers';
import statusCodes from '../utils/statusCodes';
import customMessages from '../utils/customMessages';
import UserService from '../services/authentication.service';
import sendMail from '../utils/email.util';
import { resetMessage, changedMessage, verifyMessage } from '../utils/emailMessages';
import sendEmail from '../services/sendEmail.service';

const {
  passwordHasher,
  generateToken,
  getFormData,
  decodeToken
} = utils;
const { successResponse, errorResponse, updatedResponse } = responseHandlers;
const { 
  handleSignUp, 
  findUserByEmail, 
  findUserByEmailOrUsername, 
  findUserEmailIfExist, 
  updateUserPassword,
  updateIsVerified
} = UserService;

/**
   *@param {object} req request object
   *@param {object} res response object
   *@returns {object} response json object
   *  @description User authentication class
   */
export default class AuthenticationController {
  /**
   * @param {object} req request object
   * @param {object} res response object
   * @returns {object} response json object
   * @description User sign up controller
   */
  static async signUp(req, res) {
      const payload = await getFormData(req.body);
      const { email, username } = payload;
      const checkEmail = await findUserEmailIfExist(email.toLowerCase());
      const checkUsername = await findUserByEmailOrUsername(username);
      if (checkEmail || checkUsername) {
        return errorResponse(res, statusCodes.conflict, customMessages.alreadyExistEmailOrUsername);
      }
      const password = await passwordHasher(payload.password);
      const dataWithoutPassword = _.omit(payload, 'password');
      const userData = { ...dataWithoutPassword, password };
      const saveUser = await handleSignUp(userData, 'requester', false);
      const savedUserObject = _.omit(saveUser, 'password');
      const token = await generateToken(savedUserObject);
    await sendEmail(
      req.body.email,
      `${process.env.APP_URL}/api/auth/verify?token=${token}`,
      req.body.firstName,
      verifyMessage.intro,
      verifyMessage.instructions,
      verifyMessage.text,
      verifyMessage.outro,
      'Verification Email'
    );
      return successResponse(res, statusCodes.created, customMessages.userSignupSuccess, token);
    }

  /**
   * @param {object} req
   * @param {object} res
   * @returns {object} sends response to the user
   * @description function userLogin() sends the response of successful login
   */
  static userLogin = async (req, res) => {
    const { foundUser } = req;
    const token = await generateToken(foundUser);
    successResponse(res, statusCodes.ok, customMessages.loginSuccess, token);
  };

  /**
   * @param {object} req request object
   * @param {object} res response object
   * @returns {object} response json object
   * @description send reset email controller
   */
  static async sendResetEmail(req, res) {
    const { email } = req.body;
    const {
      intro, instruction, text, outro
    } = resetMessage;
    try {
      const users = await findUserByEmail(email.toLowerCase());
      if (users) {
        const user = users.dataValues;
        const token = await generateToken(user);
        const url = `${token}`;
        await sendMail(user.email, user.firstName, intro, instruction, text, url, outro);
        return successResponse(res, statusCodes.ok, customMessages.resetEmail, token);
      }
      return errorResponse(res, statusCodes.forbidden, customMessages.notExistUser);
    } catch (err) {
      return errorResponse(res, statusCodes.badRequest, customMessages.errorMessage);
    }
  }

  /**
   * @param {object} req request object
   * @param {object} res response object
   * @returns {object} response json object
   * @description update password controller
   */
  static async updatePassword(req, res) {
    const { token } = req.params;
    const { password } = req.body;
    const {
      intro, instruction, text, outro
    } = changedMessage;
    try {
      const userDetails = await decodeToken(token);
      const users = await findUserByEmail(userDetails.email);
      const user = users.dataValues;
      const hashed = await passwordHasher(password);
      await updateUserPassword(hashed, user.id);
      await sendMail(user.email, user.firstName, intro, instruction, text, '#', outro);
      return updatedResponse(res, statusCodes.ok, customMessages.changed);
    } catch (err) {
      return errorResponse(res, statusCodes.badRequest, customMessages.errorMessage);
    }
  }

  static verify = async (req, res) => {
    const { token } = req.query;
    const decoded = jwtDecode(token);
    const { email } = decoded;
    await updateIsVerified(email);
    return successResponse(res, statusCodes.ok, customMessages.verifyMessage);
  }
}
