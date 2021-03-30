import React from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from '@material-ui/core';
import styles from './TextField.module.css'

const TextField = ({
  type,
  label,
  helperText,
  value,
  setValue,
  placeholder,
  error,
  required
}) => {
  return (
    <div className={styles.TextFieldWrapper}>
      <FormControl>
        <InputLabel className={styles.InputField}> {label} </InputLabel>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          error={error}
          required={required}
          onChange={event => setValue(event.target.value)}
          className={styles.InputField}
        />
        {helperText &&
          <FormHelperText> {helperText} </FormHelperText>
        }
      </FormControl>
    </div>
  )
}

export default TextField
