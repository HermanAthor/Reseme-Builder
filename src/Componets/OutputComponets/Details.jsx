import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'


function Details() {
  return (
    <Grid item xs={12} sx={{marginTop: '50px', backgroundColor:'#dedee0', color: '#505052', p:'20px', height:'100%'}}>
        <Grid item xs={12} sx={{width:'100%'}}>
            <Stack >
                <Grid xs={12}><Typography variant='h3'>Mariana Anderson</Typography></Grid>
                <Grid xs={12}><Typography variant='h5'>Frontend Developer</Typography></Grid>
                <Grid xs={12} sx={{ margin:'10px', p: '10px'}}>
                    <Typography variant='h6'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, quia inventore nisi beatae deleniti repellendus tempora ad ut modi sunt alias explicabo numquam rem voluptatem excepturi sequi recusandae! Illo, expedita.
                    </Typography>
                </Grid>
            </Stack>
        </Grid>
        <Grid item xs={12}><Typography variant='h4'>Experience</Typography></Grid>
        <Grid container spacing={3} sx={{border: '10px solid white', margin:'5px'}}>
            <Grid item xs={12}>
                <Stack>
                    <Typography variant='h6-bold'>2019-2022</Typography>
                    <Typography variant='h6'>Company Name</Typography>
                    <Typography variant='h5'>Job Position</Typography>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores doloribus suscipit fuga asperiores? Excepturi minus sint error magnam voluptates, iusto sed cupiditate, similique, modi id eos dolor sapiente sit!
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack>
                    <Typography variant='h6-bold'>2019-2022</Typography>
                    <Typography variant='h6'>Company Name</Typography>
                    <Typography variant='h5'>Job Position</Typography>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores doloribus suscipit fuga asperiores? Excepturi minus sint error magnam voluptates, iusto sed cupiditate, similique, modi id eos dolor sapiente sit!
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Stack>
                    <Typography variant='h6-bold'>2019-2022</Typography>
                    <Typography variant='h6'>Company Name</Typography>
                    <Typography variant='h5'>Job Position</Typography>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores doloribus suscipit fuga asperiores? Excepturi minus sint error magnam voluptates, iusto sed cupiditate, similique, modi id eos dolor sapiente sit!
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        <Grid item xs={12}><Typography variant='h4'>Reference</Typography></Grid>
        <Grid container spacing={2} sx={{m:'10px', p:'5px'}}>
            <Grid item xs={6}>
                <Typography variant='h5'>Name</Typography>
                <Typography variant='h6'>Job position, Company Name</Typography>
                <Typography variant='h6'>Phone: 101912</Typography>
                <Typography variant='h6'>Email: placeholder@example.com</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h5'>Name</Typography>
                <Typography variant='h6'>Job position, Company Name</Typography>
                <Typography variant='h6'>Phone: 101912</Typography>
                <Typography variant='h6'>Email: placeholder@example.com</Typography>
            </Grid>

        </Grid>
    </Grid>
  )
}

export default Details