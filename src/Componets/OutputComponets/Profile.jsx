import React, { useEffect, useState } from 'react'
import { Grid, Typography, } from '@mui/material'
import ProfileImage from './ProfileImage'

function Profile() {
    const[data, setData] = useState([])
    
    useEffect(()=>{
        try{
            const formValues = JSON.parse(localStorage.getItem('formValues'))
            if(formValues){
                setData(formValues)
            }else{
                setData('value')
            }
        }catch(error){
            console.log('error fetching data:', error)
            setData({default: 'value'})
        }
    },[])
    const { phone, email, address1, educationYear, universty, degree} = data
  return (
    <Grid item xs={12} sx={{marginTop: '50px', backgroundColor:'#45454a', color: 'white', p:'10px', height: '100%', alignContent:'center'}}>
        
        <Grid item xs={12}>
            <ProfileImage/>
        </Grid>
        <Grid item xs={12} sx={{marginTop:'10px'}}>
            <Typography variant='h5' sx={{borderBottom:'2px solid white', fontWeight: '500', color: 'white', marginTop: '20px'}}>Contact</Typography>
            <Grid>
                <Typography variant='h6'>Phone</Typography>
                <Typography variant='h6'>{phone}</Typography>
            </Grid>
            <Grid>
                <Typography variant='h6'>Email</Typography>
                <Typography variant='h6'>{email}</Typography>
            </Grid>
            <Grid>
                <Typography variant='h6'>Address</Typography>
                <Typography variant='h6'>{address1}</Typography>
            </Grid>
        </Grid>



        <Grid item xs={12} sx={{marginTop:'10px'}}>
            <Typography variant='h5' sx={{borderBottom:'2px solid white', fontWeight: '500', color: 'white', marginTop: '20px'}}>Education</Typography>
            <Grid>
                <Typography variant='h6'>{educationYear}</Typography>
                <Typography variant='h5'>{degree}</Typography>
                <Typography variant='h6'>{universty}</Typography>
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