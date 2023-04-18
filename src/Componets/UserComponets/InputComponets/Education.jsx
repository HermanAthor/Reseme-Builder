import React from 'react'
import TextFieldComp from '../TextFieldComp'
import { Grid, Typography } from '@mui/material'

function Education() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant='h5' color='info'>Education</Typography>
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
                name='educationYear'
                label='Year'
                sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
                name='degree'
                label='Your Degree'
                sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
                name='universty'
                label='University/College'
                sx={{margin: '20px'}}
            />
        </Grid>
    </Grid>
  )
}

export default Education