import { Button, Grid, Typography } from '@mui/material'
import { Form, useFormikContext, } from 'formik'

import TextFieldComp from './TextFieldComp'
//import * as Yup from "yup"
import SelectComp from './SelectComp'
import NameComp from '../NameComp'
import Education from './InputComponets/Education'
import AboutInfo from './InputComponets/AboutInfo'
import Experience from './InputComponets/Experience'
import References from './InputComponets/References'
import { useContext } from 'react'
import { MainContext } from '../../App'
import Experience2 from './InputComponets/Experiences/Experience2'
import Experience3 from './InputComponets/Experiences/Experience3'


function UserFormComp() {
  const {experience2, experience3} = useContext(MainContext)
  const countries = {
    'AF': 'Afghanistan',
    'DK': 'Denmark',
    'SWE': 'Sweden',
    'UG': 'Uganda',
    'TZ': 'Tanzania'
  }
  const years = {
    '1999': '1999',
    '2000': '2000',
    '2001': '2001',
    '2002': '2002',
    '2003': '2003',
    '2004': '2004',
    '2005': '2005',
    '2006': '2006',
    '2007': '2007',
    '2008': '2008',
    '2009': '2009',
    '2010': '2010',
    '2011': '2011',
    '2012': '2012',
    '2013': '2013',
    '2014': '2014',
    '2015': '2015',
    '2016': '2016',
    '2017': '2017',
    '2018': '2018',
    '2019': '2019',
    '2020': '2020',
    '2021': '2021',
    '2022': '2022',
    '2023': '2023',
  }
  const months ={
    'JAN': "January",
    'FEB':'February',
    'MAR':'March',
    'APR':'April',
    'MAY':'May',
    'JUN':'June',
    'JUL':'July',
    'AUG':'August',
    'SEPT':'September',
    'OCT':'October',
    'NOV':'November',
    'DEC':'December'
  }
  const days = {
    '1':'1',
    '2':'2',
    '3':'3',
    '4':'4',
    '5':'5',
    '6':'6',
    '7':'7',
    '8':'8',
    '9':'9',
    '10':'10',
    '11':'11',
    '12':'12',
    '13':'13',
    '14':'14',
    '15':'15',
    '16':'16',
    '17':'17',
    '18':'18',
    '19':'19',
    '20':'20',
    '21':'21',
    '22':'22',
    '23':'23',
    '24':'24',
    '25':'25',
    '26':'26',
    '27':'27',
    '28':'28',
    '29':'29',
    '30':'30',
    '31':'31'
  }
  const genders = {
    'Male':'Male',
    'Female':'Female',
    'Trans':'Transgender',
    'NoGender':'Prefer not to say',

  }
  const styles = {
    display:'flex',
    overFlow:'auto',
    padding:'40px',
    height:'fit-content',
  }

  const { handleSubmit } = useFormikContext()

  return (
    <div style={{display:'flex', minHeight:'min-content',}}>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={styles}>
          <Grid item xs={12}>
            <Typography variant='h5' color='info'>Personal Information</Typography>
          </Grid>
          <Grid item xs={6}><NameComp/></Grid>
          <Grid item xs={6}>
            <TextFieldComp
              name='lastName'
              label='Last Name'
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectComp
              name='birthYear'
              label='Year'
              options={years}
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectComp
              name='birthMonth'
              label='Month'
              options={months}
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectComp
              name='birthDay'
              label='Day'
              options={days}
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={3}>
            <SelectComp
              name='gender'
              label='Gender'
              options={genders}
              sx={{margin: '20px'}}
            />
          </Grid>

          <Grid item xs={6}>
            <TextFieldComp
              name='email'
              label='Email'
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldComp
              name='phone'
              label='Phone Number'
              type='number'
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={12}><AboutInfo/></Grid>

          <Grid item xs={12}>
            <Typography variant='h5' color='info'>Address</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextFieldComp
              name='address1'
              label='Address 1'
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={6}>
            <TextFieldComp
              name='address2'
              label='Address 2'
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={4}>
            <TextFieldComp
              name='city'
              label='City'
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={4}>
            <TextFieldComp
              name='state'
              label='State'
              sx={{margin: '20px'}}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectComp
              name='country'
              label='Country'
              sx={{margin: '20px'}}
              options={countries}
            />
          </Grid>
          <Grid item xs={12}>
            <Education/>
          </Grid>

          <Grid item xs={12}>
            <Experience />
          </Grid>
          {experience2 && 
          <Grid item xs={12}>
            <Experience2 />
          </Grid>}

          {experience3 && 
          <Grid item xs={12}>
            <Experience3 />
          </Grid>}
          <Grid item xs={12}>
            <References/>
          </Grid>

        </Grid>
        <Button variant='contained' fullWidth={true} p={2} color='info' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default UserFormComp