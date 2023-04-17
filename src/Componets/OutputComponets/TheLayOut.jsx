import React from 'react'
import { Grid } from '@mui/material'
import Profile from './Profile'
import Details from './Details'

function TheLayOut() {
  return (
    <div>
        <Grid container spacing={2} >
            <Grid container spacing={0}>
                <Grid item xs={4} ><Profile /></Grid>
                <Grid item xs={8} ><Details /></Grid>
            </Grid>
            
        </Grid>
    </div>
  )
}

export default TheLayOut