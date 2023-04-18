import { Grid, Typography } from '@mui/material'
import React from 'react'
import TextFieldComp from '../TextFieldComp'

function Experience() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant='h5' color='info'>Experience</Typography>
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='year1'
            label='Year XXXX-XXXX'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='companyName'
            label='Company Name'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
            name='jobPosition'
            label='Job Position'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
            name='aboutPosition'
            label='About the position'
            helperText='Write about Your Experience from the job mentioned above'
            multiline={true}
            row={4}
            sx={{margin: '20px'}}
            />
        </Grid>
    </Grid>
  )
}

export default Experience