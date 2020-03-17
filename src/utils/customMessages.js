const messages = {
  userSignupSuccess: 'Your account has been created successfully! \n\n\n\n Please click on the button sent to your email to comfirm your account.',
  userSignupFailed: 'Sign up failed! Please try again later',
  loginSuccess: 'Successfully logged in',
  loginFail: 'Unknown credentials',
  loginUnauthorized: 'Email and password mismatch',
  loginEmailOrUsernameEmpty: 'Please enter your email or username',
  loginPasswordEmpty: 'Please enter your password',
  loginPasswordAndEmailOrUsernameEmpty: 'Please enter your email or username and your password',
  resetEmail: 'The email has been sent successfully',
  notExistUser: 'User does not exist',
  changed: 'The password has been changed',
  notChanged: 'The password not changed',
  errorMessage: 'occured an error',
  alreadyExistEmailOrUsername: 'The user with the provided email or username already exists',
  invalidFirstname: 'The first name should consist of alphabets and at least 3 minimum characters, without whitespaces or special characters',
  invalidLastname: 'The last name should consist of alphabets alphabets and at least 3 minimum characters, without whitespaces or special characters',
  invalidUsername: 'Username should consists of alphabets, numbers, 3 minimum characters and special characters like @._-, without whitespace',
  invalidEmail: 'Email should look like example@email.com',
  invalidGender: 'Gender should be male or female',
  invalidPassword: 'Password should consists of alphabets, capital letter, special characters, numbers and at least 8 characters minimum',
  invalidAddress: 'Address should consists of alphabets and at least 3 minimum characters, without whitespace or special characters',
  verifyMessage: 'You have now verified your account successfully',
  socialMediaAuthSucess: 'User authenticated successfully',
  loginPasswordAndEmailEmpty: 'Please enter your email and your password',
  serverError: 'Sorry, something went wrong on our end, please try again later',
  tokenAbsent: 'Access denied, you must login to use this resource',
  tokenVerifyFailed: 'Sorry, we were unable to verify your identity, you must login to use this resource',
  endpointNotFound: 'The requested resource was not found',
  duplicateTripRequest: 'Request failed, attempting to submit the same trip request twice',
  accountNotVerified: 'Sorry, we were unable to verify your identity, please verify your account',
  invalidTravelType: 'Please specify the type of your trip, should be one-way or return-trip',
  invalidTravelFrom: 'Please specify where you are travelling from',
  invalidTravelTo: 'Please provide where you are travelling to',
  invalidTravelReason: 'Please provide the reason for the trip',
  invalidTravelDate: 'The travel date should not be empty, must not be past date, not more than 6 months from now and look like 2001-01-01',
  invalidTravelAccomodation: 'Please specify wether you want acommodation on your trip',
  profileRetrievalSuccess: 'You profile is successfully retrieved',
  verifyYourAccount: 'You need to verify your account, before getting to profiles',
  notAllowedToAccessThisResources: 'You are not allowed to access this resources, login or signup first',
  profileNotFound: 'The user you are trying ton search does not exist on our system',
  profileUpdateSuccess: 'Profile updated successfully',
  internalServerError: 'Something unexpected occurred, please try again',
  profilePicUpdateErr: 'Your Profile picture could not be uploaded, please try again!',
  invalidPictureExt: 'The profile picture you are trying to upload does not have valid extension, please use jpg, png, or gif images',
  updaterEmailRequired: 'Enter your email please!',
  incorrectOldPassword: 'You have entered incorrect old password, if you have forgotten your password, logout and reset your password.',
  usernameExistOrEmpty: 'The username you entered already exists or is empty, if you want to continue update your profile, change the new username or unselect it to remain with the old one',
  passwordChangeSuccess: 'Your password has been changed, login with new password',
  changeEmailNotAllowed: 'You cannot change your email, unselect it if you want to continue updating your profile, otherwise you will not be able to continue',
  tokenInvalid: 'Authentication failed. Token is invalid',
  tokenMissing: 'Authentication failed. Token is missing',
  userLogoutSuccess: 'Log out successful',
  invalidReturnDate: 'The return date should not be empty, should be greater than travel date and look like 2001-01-01',
  placesRetrieved: 'Successfully retrieved destinations and their visit times',
  noPlacesRetrieved: 'Data not available for now, because there is no any trip yet, please try again later',
  userNotAllowedForAction: 'You are not allowed to perform this action',
  roleAssigned: 'Role assigned to user successfully',
  invalidRole: 'You entered an invalid role',
  existingRole: 'That is the existing role for this user',
  superUser: 'You cannot change the role for the super user',
  commentAdded: 'Your comment is added successfully',
  commentOnOthersReqNotAdmin: 'You cannot comment on a request which is not yours',
  requestAndCommentsRetrieved: 'We got you some requests and some comments',
  requestButNoCommentYet: 'We got you some requests but it seems that you do not have any comment yet',
  noRequestYet: 'We did not find any request, which means there is no comment yet',
  isNotMyComment: 'You cannot update nor delete comment which is not yours',
  emptyCommentId: 'Please select the comment you want to update',
  commentUpdatedSuccess: 'Your comment has been updated successfully',
  requestNotExists: 'That travel-request does not exist, create some or try existing one',
  commentDeleted: 'Your comment has been deleted successfully',
  commentNoFound: 'The comment you want to update or delete does not exist',
  noCommentYet: 'This request does not have any comment yet',
  commentsRetrieved: 'Comments retrieved successfully',
  emptyCommentBody: 'You cannot update nor create comment with an empty message body, please type some comment',
  requestIdMustBeANumber: 'requestId, should be a number, not mixed with characters, and not empty',
  pageMustBeANumber: 'Page number, should be a number, not mixed with characters, and not empty',
  noCommentOnThisPage: 'No comment found on this page',
  viewCmtNotMineReq: 'You cannot view comments on request which is not yours',
  requestsRetrieved: 'Requests have been retrieved successfully',
  noRequestsYet: 'You do not have any request, you can create some',
  noRequestsFoundOnThisPage: 'There is no requests found on this page',
  invalidTripRequestsSearchTerm: 'Please specify a valid search term, it must not be empty',
  invalidTripRequestsSearchField: 'Please specify a valid field to perform a search on, it must be one of id, status, travelTo, travelFrom, travelDate, returnDate, travelType or travelReason',
  invalidTripRequestsSearchLimit: 'Please specify a valid limit to the returned data, it must be a non-zero positive number(e.g 10)',
  invalidTripRequestsSearchOffset: 'Please specify a valid offset to the returned data, it must be a positive number(e.g 0)',
  invalidTripRequestsSearchFieldId: 'Please specify a valid number for the id search field',
  invalidTripRequestsSearchFieldTravelDate: 'Please specify a valid date for the travelDate search field(e.g 2020-03-25)',
  invalidTripRequestsSearchFieldReturnDate: 'Please specify a valid date for the returnDate search field(e.g 2020-03-25)',
  invalidTripRequestsSearchFieldStatus: 'Please specify a valid value for the status search field, possible values are pending, accepted and rejected',
  invalidTripRequestsSearchFieldTravelType: 'Please specify a valid value for the travelType search field, possible values are one-way, return-trip and multi-city',
  emptySearchResult: 'Sorry, we could not find anything matching your search criteria',
  invalidTripsStatsStartDate: 'Please specify a correct value for start date, it must be a correct date in the past(e.g 2020-02-22), and less than the end date',
  invalidTripsStatsEndDate: 'Please specify a correct value for end date, it must be a correct date in the past(e.g 2020-02-29), and greater than the start date',
  viewStatsUnauthorized: 'Permission denied trying to view trips stats of another user, you must be the owner to view the stats',
  viewStatsNoRequesterId: 'Please specify a valid value for the requester id, it must be a positive number',
  requesterNotRegistered: 'Sorry, we could not find a user account associated with that requesterId',
  emptyRole: 'role is not allowed to be empty',
  emptyEmail: 'email is not allowed to be empty',
  requestUpdated: 'The request is updated successfully',
  notOpenRequest: 'You are not allowed to update a rejected or an approved travel request',
  emptyUpdate: 'You have to provide at least one new information',
  notExistRequest: 'You can not update a request which does not exist',
  notYourRequest: 'You can only update your request',
  invalidBookAccommodationTripRequestId: 'Please specify a valid tripRequestId, it must be a positive number',
  invalidBookAccommodationAccommodationId: 'Please specify a valid accommodationId, it must be a positive number',
  invalidBookAccommodationArrivalDate: 'Please specify when you will be arriving at the premise, it must be a correct date in the future(e.g 2020-07-21), and less than the date when you will be leaving',
  invalidBookAccommodationDepartureDate: 'Please specify when you will be leaving the premise, it must be a correct date in the future(e.g 2020-07-21), and greater than the date when you will arrive',
  accommodationNotExist: 'No such accommodation facility found',
  tripRequestNotExist: 'No such trip request found',
  bookedAccommodation: 'You have successfuly booked an accomodation facility',
  duplicateAccommodationBookings: 'Sorry, but it seems you have already booked accommodation for that trip',
  requestApprovalSuccess: 'Trip request approved successfully! The requester will be notified shortly.',
  requestRejectionSuccess: 'Trip request rejected successfully! The requester will be notified shortly.',
  userIsNotSuperAdmin: 'Access denied! This resource is for super admins only',
  assignRoleSuccess: 'Role assigned successfully',
  userIsNotManager: 'Sorry, only managers can approve or reject requests',
  tripRequestNotFound: 'Sorry, this trip request does not exist',
  tripRequestFoundButNotAssignedToMe: 'Sorry, this trip request is not assigned to you. Please claim it first',
  tripRequestAlreadyApproved: 'Sorry, this trip request has already been approved',
  tripRequestAlreadyRejected: 'Sorry, this trip request has already been rejected',
  invalidTripRequestId: 'Oops, something is not right. Trip request ID not recognized',
  invalidUserId: 'Oops, something is not right. User ID not recognized',
  invalidTripRequestStatus: 'Trip request status must be either `accepted` or `rejected`',
  invalidApproveData: 'Oops, something is not right. The status should be `accepted`',
  invalidRejectData: 'Oops, something is not right. The status should be `rejected`',
  cannotAssignApproved: 'Sorry, you cannot reassign a trip request that has already been approved',
  cannotAssignRejected: 'Sorry, you cannot reassign a trip request that has already been rejected',
  cannotAssignToUnverified: 'This user is not yet verified. You can only assign requests to verified users',
  cannotAssignToNonManager: 'This user is not a manager. You can only assign requests to other managers',
  tripRequestReassignSuccess: 'Trip request reassignment successful',
  tripRequestReassignConflict: 'This trip request has already been assigned to this user',
  tripRequestReassignEmptyUserId: 'userId is required',
  requesterNotMyDirectReport: 'Sorry, You can only approve, reject or reassign trip requests assigned to you or from your direct reports',
  lineManagerNotFound: 'Sorry, this line manager does not exist',
  userNotlineManager: 'Sorry, the line manager you specified is not a manager',
  cannotBeOwnManager: 'Sorry, you cannot be your own manager',
  userIdNotString: 'userId must be a string',
  accommodationCreated: 'The accommodation is created successfully!',
  accommodationRoomCreated: 'The accommodation room is created successfully!',
  accommodationsRetrieved: 'The accommodations have been retrieved successfully!',
  noAccommodationsFoundOnThisPage: 'There are no any accommodations found on this page!',
  noAccommodationsFoundInCity: 'There are no any accommodations found in the city you entered!',
  noAccommodFoundInMatchInputs: 'No accommodation found matching your inputs',
  notAllowedToCreateAccommodation: 'Sorry! You are not allowed to create accommodation, only admins and suppliers are allowed for this action',
  accommodationNameErrorMsg: 'The accommodation name should not be empty, has only letters, no special characters, and has at least 2 characters',
  accommodationAddressErrorMsg: 'The accommodation address should not be empty, has only letters, no special characters, and has at least 2 characters',
  accommodationExistsErrMsg: 'That accommodation already exists, please change that name',
  notAllowedToCreateRoom: 'You are not allowed to add accommodation room, only admins and suppliers are allowed to add rooms',
  roomAlreadyExistsErrMsg: 'That room already exists, you cannot add it twice, please change the room name',
  roomNumberEmpty: 'Enter room number please',
  accommodationIdIntegerErrMsg: 'Accommodation Id, must be a number. Please make it a number, not a string or special character',
  accommodationNotExistsErrMsg: 'That accommodation does not exist',
  roomDeleted: 'Room deleted successfully',
  accommodationDeleted: 'Accommodation deleted successfully',
  accommodationIdEmptyErrMsg: 'Accommodation id not allowed to be empty',
  notAllowedToUpdateRoom: 'You are not allowed to update a room, only travel admins and supplier are allowed to that action',
  roomIdShouldBeANumberErrMsg: 'You should enter a number as room, do not make it a string',
  currencyErrorMsg: 'The currency must not be empty, no special characters',
  pageNotFound: 'This page does not have content',
  updateFailed: 'Update Failed, please try again!',
  cantDltAccommWithRooms: 'You are not allowed to delete this accommodation because it has some rooms, delete all of its rooms first, and then delete it!',
  itemNotExist: 'Update failed because the item you want to update does not exist',
  tripRequestFailed: 'trip request request failed',
  tripRequestCreated: 'trip request successfuly submitted and waiting for approval',
  dataLengthErr: 'should not have less than 2 or more than 3 destinations',
  travelFromEqualError: 'Request first or second destination should be the same as the second or third origin',
  travelDateError: 'Request first or second date should not be greater than second or third',
  arrayLengthError: 'Request travelFrom, travelTo and travelDate, should all hold the same amount of data',
  firstOriginError: 'First origin should not equal to any destination',
  travelFromNETravelTo: 'travelFrom location should not equal to travelTo location on the same request row'
};

export default messages;
