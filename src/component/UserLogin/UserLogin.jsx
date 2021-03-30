import React, { useState } from 'react'
import TextField from '../TextField'
import { Button, Typography, Link } from '@material-ui/core';
import { FIELD_TYPE, LABEL } from '../../utils/constant'
import { checkUser } from '../../utils/checkUser'
import styles from '../UserSignUp/UserSignUp.module.css'

const UserLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const userLogin = () => {
    if (checkUser(username, password)) {
      alert('Logged In')
      return
    }
    alert('Wrong username or Password')
  }

  return (
    <div>
      <div className={styles.SignUpWrapper}>
        <div>
          <Typography variant='h5'>
            Login
        </Typography>
        </div>
        <div className={styles.FormWrapper}>
          <TextField
            type={FIELD_TYPE.EMAIL}
            placeholder='Enter only Email id'
            label={LABEL.EMAIL}
            setValue={setUsername}
            value={username}
          />

          <TextField
            type={FIELD_TYPE.PASSWORD}
            label={LABEL.PASSWORD}
            value={password}
            setValue={setPassword}
          />
          <Button
            variant="contained"
            className={styles.ButtonWrapper}
            onClick={userLogin}
          >
            Login
          </Button>
        </div>
      </div>
      <Link href='/signup'>
        Create a new user
      </Link>
    </div>
  )
}

export default UserLogin
