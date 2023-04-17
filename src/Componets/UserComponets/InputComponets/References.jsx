import { Grid, Typography } from '@mui/material'
import React from 'react'
import TextFieldComp from '../TextFieldComp'

function References() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant='h4' color='secondary'>References</Typography>
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
            name='nameRef1'
            label='Name of Reference 1'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='jobPositionRef1'
            label='Job Position'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='companyNameRef1'
            label='Company Name'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='phoneRef1'
            label='Reference Phone Number'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='emailRef1'
            label='Reference Email'
            sx={{margin: '20px'}}
            />
        </Grid>
    </Grid>
  )
}

export default References