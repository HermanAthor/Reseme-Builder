import { Button, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { MainContext } from '../../../../App'
import TextFieldComp from '../../TextFieldComp'

function Experience2() {
const { setExperience3 } = useContext(MainContext)
  const handleAddExperience3 = ()=> setExperience3((prev) => {
   return !prev
  })
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant='h5' color='info'>Experience <span>Option 2</span></Typography>
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='year2'
            label='Year XXXX-XXXX'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={6}>
            <TextFieldComp
            name='companyName2'
            label='Company Name'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
            name='jobPosition2'
            label='Job Position'
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={12}>
            <TextFieldComp
            name='aboutPosition2'
            label='About the position'
            helperText='Write about Your Experience from the job mentioned above'
            multiline={true}
            row={4}
            sx={{margin: '20px'}}
            />
        </Grid>
        <Grid item xs={12}>
            <Button onClick={ handleAddExperience3} variant='contained'> Add More Experience</Button>
        </Grid>
    </Grid>
  )
}

export default Experience2