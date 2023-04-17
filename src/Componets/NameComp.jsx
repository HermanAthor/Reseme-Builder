import { Grid } from '@mui/material'
import React from 'react'
import TextFieldComp from './UserComponets/TextFieldComp'


function NameComp() {
  return (
    
    <Grid item xs={12}>
        <TextFieldComp
            name='firstName'
            label='First Name'
            sx={{margin: '20px'}}
        />
    </Grid>
    
  )
}

export default NameComp