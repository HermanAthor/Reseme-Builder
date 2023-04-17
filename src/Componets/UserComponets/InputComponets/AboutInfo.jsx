import React from 'react'
import TextFieldComp from '../TextFieldComp'
import { Grid, Typography } from '@mui/material'

function AboutInfo() {
  return (
    <div>
        <Grid item xs={12}>
            <Typography variant='h4' color='secondary'>About</Typography>
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
            name='jobTittle'
            label='Job Tittle'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
            name='about'
            label='About You'
            multiline = {true}
            row = {4}
            helperText='Write something about you recomended 4-6 lines'
            sx={{margin: '20px'}}
            />
        </Grid>
    </div>
  )
}

export default AboutInfo