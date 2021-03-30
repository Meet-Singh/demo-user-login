export const checkUser = (username, password) => {
  const userDetails = JSON.parse(localStorage.getItem('user'))
  let loginUser = false
  if (userDetails) {
    if (userDetails.email === username && userDetails.password === password) {
      loginUser = true
    }
  }
  return loginUser
}
