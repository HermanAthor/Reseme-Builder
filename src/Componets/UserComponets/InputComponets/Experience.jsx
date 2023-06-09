import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import TextFieldComp from '../TextFieldComp'
import { MainContext } from '../../../App'

function Experience() {
    const { setExperience2 } = useContext(MainContext)
    const handleAddExperience = ()=> setExperience2((prev) => {
    return !prev
    })
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
        <Grid item xs={12}>
            <Button onClick={ handleAddExperience} variant='contained'>add another experience</Button>
        </Grid>
    </Grid>
  )
}

export default Experience