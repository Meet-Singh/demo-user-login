import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import TextField from '../TextField'
import { checkUserDetails } from '../../utils/checkUserDetails'
import { FIELD_TYPE, HELPER_TEXT, LABEL } from '../../utils/constant'
import styles from './UserSignUp.module.css'

const UserSignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorType, setErrorType] = useState('')
  const history = useHistory();

  const registerUser = () => {
    const userDetails = {
      username: username,
      email: email,
      password: password,
      phone: phone
    }
    if (currentPassword === password) {
      setError(false)
      setErrorMessage('')
      const errorCheck = checkUserDetails(userDetails)
      if (errorCheck.error) {
        setError(true)
        setErrorMessage(errorCheck.message)
        setErrorType(errorCheck.type)
        return
      }
      localStorage.setItem('user', JSON.stringify(userDetails))
      history.push('/')
    }

    setError(true)
    setErrorMessage('Passwords does not match')
    setErrorType('Password')
  }

  return (
    <div className={styles.SignUpWrapper}>
      <div>
        <Typography variant='h5'>
          Sign Up
        </Typography>
      </div>

      <div className={styles.FormWrapper}>
        <TextField
          type={FIELD_TYPE.USERNAME}
          label={LABEL.USERNAME}
          setValue={setUsername}
          value={username}
        />

        <TextField
          type={FIELD_TYPE.EMAIL}
          label={LABEL.EMAIL}
          error={errorType === 'email'}
          helperText={error && errorType === 'email' ? errorMessage : HELPER_TEXT.EMAIL}
          value={email}
          setValue={setEmail}
        />

        <TextField
          type={FIELD_TYPE.PHONE}
          label={LABEL.PHONE}
          error={errorType === 'phone'}
          helperText={error && errorType === 'phone' ? errorMessage : HELPER_TEXT.PHONE}
          value={phone}
          setValue={setPhone}
        />

        <TextField
          type={FIELD_TYPE.PASSWORD}
          label={LABEL.PASSWORD}
          value={password}
          error={errorType === 'Password'}
          helperText={error && errorType === 'Password' ? errorMessage : ''}
          setValue={setPassword}
        />

        <TextField
          type={FIELD_TYPE.CURRENT_PASSWORD}
          label={LABEL.RE_ENTER_PASSWORD}
          value={currentPassword}
          error={errorType === 'Password'}
          helperText={error && errorType === 'Password' ? errorMessage : ''}
          setValue={setCurrentPassword}
        />

        <div>
          <Button
            variant="contained"
            className={styles.ButtonWrapper}
            onClick={registerUser}
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            className={styles.ButtonWrapper}
            onClick={() => history.push('/')}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp
