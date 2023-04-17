import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'



function Details() {
    const[data, setData] = useState([])
    
    useEffect(()=>{
        try{
            const data = JSON.parse(localStorage.getItem('formValues'))
            setData(data)
        }catch(error){
            console.log('error fetching data:', error)
            setData({default: 'value'})
        }
    },[])
    console.log('data', data)
    
  return (
    <Grid item xs={12} sx={{marginTop: '50px', backgroundColor:'#dedee0', color: '#505052', p:'20px', height:'100%'}}>
        <Grid item xs={12} sx={{width:'100%'}}>
            <Stack >
                <Grid xs={12}><Typography variant='h3'>{data.firstName} {data.lastName}</Typography></Grid>
                <Grid xs={12}><Typography variant='h5'>{data.jobTittle}</Typography></Grid>
                <Grid xs={12} sx={{ margin:'10px', p: '10px'}}>
                    <Typography variant='h6'>
                        {data.about}
                    </Typography>
                </Grid>
            </Stack>
        </Grid>
        <Grid item xs={12}><Typography variant='h4'>Experience</Typography></Grid>
        <Grid container spacing={3} sx={{border: '10px solid white', margin:'5px'}}>
            <Grid item xs={12}>
                <Stack>
                    <Typography variant='h6-bold'>{data.year1}</Typography>
                    <Typography variant='h6'>{data.companyName}</Typography>
                    <Typography variant='h5'>{data.jobPosition}</Typography>
                    <Typography variant='body1'>
                        {data.aboutPosition}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack>
                    <Typography variant='h6-bold'>{data.year1}</Typography>
                    <Typography variant='h6'>{data.companyName}</Typography>
                    <Typography variant='h5'>{data.jobPosition}</Typography>
                    <Typography variant='body1'>
                        {data.aboutPosition}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack>
                    <Typography variant='h6-bold'>{data.year1}</Typography>
                    <Typography variant='h6'>{data.companyName}</Typography>
                    <Typography variant='h5'>{data.jobPosition}</Typography>
                    <Typography variant='body1'>
                        {data.aboutPosition}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        <Grid item xs={12}><Typography variant='h4'>Reference</Typography></Grid>
        <Grid container spacing={2} sx={{m:'10px', p:'5px'}}>
            <Grid item xs={6}>
                <Typography variant='h5'>{data.nameRef1}</Typography>
                <Typography variant='h6'>{data.jobPositionRef1}, {data.companyNameRef1}</Typography>
                <Typography variant='h6'>Phone: {data.phoneRef1}</Typography>
                <Typography variant='h6'>Email: {data.emailRef1}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h5'>{data.nameRef1}</Typography>
                <Typography variant='h6'>{data.jobPositionRef1}, {data.companyNameRef1}</Typography>
                <Typography variant='h6'>Phone: {data.phoneRef1}</Typography>
                <Typography variant='h6'>Email: {data.emailRef1}</Typography>
            </Grid>

        </Grid>
    </Grid>
  )
}

export default Details