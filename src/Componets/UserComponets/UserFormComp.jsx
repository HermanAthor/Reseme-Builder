import { Grid, Typography } from '@mui/material'
import { Formik, Form} from 'formik'
import React from 'react'
import TextFieldComp from './TextFieldComp'
import * as Yup from "yup"
import SelectComp from './SelectComp'

function UserFormComp() {
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px'


  }
  const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email'),
    phone: Yup.number().integer('number').required('required'),
    address1: Yup.string().required('required'),
    address2: Yup.string(),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    birthYear: Yup.string().required('Required'),
    birthMonth:Yup.string().required('Required'),
    birthDay:Yup.string().required('Required'),
    gender:Yup.string().required('Required')

  })
  const INIT_VALUES ={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    address1:'',
    address2:'',
    city:'',
    state:'',
    country:'',
    birthYear:'',
    birthMonth:'',
    birthDay:'',
    gender:'',

  }

  return (
    <div style={styles}>
        <Formik
          initialValues = {{            
            ...INIT_VALUES
          }}
          validationSchema={ValidationSchema}
        >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='h4' color='secondary'>Personal Information</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextFieldComp
                    name='firstName'
                    label='First Name'
                    sx={{margin: '20px'}}
                  />
                </Grid>
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

                <Grid item xs={12}>
                  <Typography variant='h4' color='secondary'>Address</Typography>
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
                  <Typography variant='h4' color='secondary'>Booking Dates</Typography>
                </Grid>

              </Grid>
            </Form>
        </Formik>
    </div>
  )
}

export default UserFormComp