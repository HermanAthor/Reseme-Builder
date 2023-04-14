import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

function TextFieldComp({name, ...otherProps}) {

    const [field, meta] = useField(name)

    const COMP_CONFIG = {
        ...field,
        variant:'filled',
        fullWidth: true,
        ...otherProps,

    }
    if(meta && meta.touched && meta.error){
        COMP_CONFIG.error = true
        COMP_CONFIG.helperText = meta.error
    }
  return (
    <TextField {...COMP_CONFIG}/>
  )
}

export default TextFieldComp