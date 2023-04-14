import React from 'react'
import { Grid, Typography, } from '@mui/material'
import ProfileImage from './ProfileImage'

function Profile() {
  return (
    <Grid item xs={12} sx={{marginTop: '50px', backgroundColor:'#45454a', color: 'white', p:'10px', height: '100%', alignContent:'center'}}>
        
        <Grid item xs={12}>
            <ProfileImage/>
        </Grid>
        <Grid item xs={12} sx={{marginTop:'10px'}}>
            <Typography variant='h5' sx={{borderBottom:'2px solid white', fontWeight: '500', color: 'white', marginTop: '20px'}}>Contact</Typography>
            <Grid>
                <Typography variant='h6'>Phone</Typography>
                <Typography variant='h6'>09876543</Typography>
            </Grid>
            <Grid>
                <Typography variant='h6'>Email</Typography>
                <Typography variant='h6'>placeholder@example.com</Typography>
            </Grid>
            <Grid>
                <Typography variant='h6'>Address</Typography>
                <Typography variant='h6'>123 Anywhere st, Earth</Typography>
            </Grid>
        </Grid>



        <Grid item xs={12} sx={{marginTop:'10px'}}>
            <Typography variant='h5' sx={{borderBottom:'2px solid white', fontWeight: '500', color: 'white', marginTop: '20px'}}>Education</Typography>
            <Grid>
                <Typography variant='h6'>2008 'Enter Year'</Typography>
                <Typography variant='h5'>Your Degree</Typography>
                <Typography variant='h6'>University/College</Typography>
            </Grid>
            <Grid>
                <Typography variant='h6'>2008 'Enter Year'</Typography>
                <Typography variant='h5'>Your Degree</Typography>
                <Typography variant='h6'>University/College</Typography>
            </Grid>
            
        </Grid>


        <Grid item xs={12} sx={{marginTop:'10px'}}>
            <Typography variant='h5' sx={{borderBottom:'2px solid white', fontWeight: '500', color: 'white', marginTop: '20px'}}>Expertise</Typography>
            <Typography variant='body1'>HTML</Typography>
            <Typography variant='body1'>CSS</Typography>
            <Typography variant='body1'>JAVASCRIPT</Typography>
            <Typography variant='body1'>REACT</Typography>
            <Typography variant='body1'>MATERIAL UI</Typography>
            
        </Grid>
        <Grid item xs={12} sx={{marginTop:'10px'}}>
            <Typography variant='h5' sx={{borderBottom:'2px solid white', fontWeight: '500', color: 'white', marginTop: '20px'}}>Languages</Typography>
            <Typography variant='body1'>English</Typography>
            <Typography variant='body1'>Danish</Typography>
        </Grid>
    </Grid>
  )
}

export default Profile