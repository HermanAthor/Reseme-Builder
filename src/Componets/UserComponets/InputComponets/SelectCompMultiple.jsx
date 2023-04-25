import {  Box, MenuItem, TextField } from '@mui/material'
import { useField } from 'formik'
import React, { useState } from 'react'

function SelectCompMultiple(name, options, ...otherProps) {
    const {field, meta} = useField(name)
    const ListOfCoutries = ['Uganda', 'Kenya', 'Denmark','Sweden']
    const[countries, setCountries]= useState([])
    const handleChange = (event)=>{
        const value = event.target.value
        setCountries(typeof value === 'string'? value.split(','): value)
    }
    const SelectConfig = {
        select:true,
        SelectProps:{multiple: true},
        ...otherProps,
        ...field,
        onChange: handleChange
    }
    if(meta && meta.touched && meta.error){
        SelectConfig.error = true
        SelectConfig.helperText= meta.error
    }
    const SelectValue = ListOfCoutries.map((country, index) =>{
        return(
            <MenuItem key={index} value={country}>
                {country}
            </MenuItem>
        )
    })
  return (
    <Box>
        <TextField
          label='Expertise'
          name='expertise'
          select
          onChange={handleChange}
          value={countries}
          fullWidth
          SelectProps={{
            multiple: true
          }} 
        // {...SelectConfig}
        >
            {SelectValue}
            {/* <MenuItem value='React'>React</MenuItem>
            <MenuItem value='HTML'>HTML</MenuItem>
            <MenuItem value='JS'>Javascript</MenuItem>
            <MenuItem value='CSS'>CSS</MenuItem> */}
        </TextField>
    </Box>
  )
}

export default SelectCompMultiple