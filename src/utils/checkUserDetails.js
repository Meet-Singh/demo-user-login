export const checkUserDetails = (userDetails) => {
  const error = {
    error: false,
    message: '',
    type: ''
  }
  const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const phone = /^\d{10}$/
  if (!email.test(userDetails.email)) {
    error.error = true
    error.message = 'Kindly enter valid email-id'
    error.type = 'email'
  }
  if (!phone.test(userDetails.phone)) {
    error.error = true
    error.message = 'Kindly enter valid phone number'
    error.type = 'phone'
  }

  return error
}