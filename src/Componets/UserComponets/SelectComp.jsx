import { MenuItem, TextField } from '@mui/material'
import { useField, useFormikContext } from 'formik'
import React from 'react'


function SelectComp({name, options, ...otherProps}) {
    const {setFieldValue} = useFormikContext
    const handleChange = (e)=>{
        const {value} = e.target
        setFieldValue(name, value)
    }

    const [field, meta] = useField(name)

    const SELECT_CONFIG = {
        variant:'outlined',
        select: true,
        fullWidth: true,
        ...field,
        ...otherProps,
        onchange: handleChange
        
    }
    if(meta && meta.touched && meta.error){
        SELECT_CONFIG.errors= true
        SELECT_CONFIG.helperText= meta.error
    }
  return (
    <TextField {...SELECT_CONFIG}>
        {Object.keys(options).map((item, pos)=> {
            return(
                <MenuItem key={pos} value={item}>
                    {options[item]}
                </MenuItem>
            )
        })}
    </TextField>
  )
}

export default SelectComp