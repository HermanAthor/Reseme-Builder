import { Grid } from '@mui/material';
import './App.css';
import User from './Componets/User';
import Output from './Componets/Output';
import { useState } from 'react';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
// import { useFormik } from 'formik';
// import * as Yup from "yup"

function App() {
  // const submit = (values)=>{
  //   alert(JSON.stringify(values))
  //   setSubmiting(true)
  // } 
  const[submiting, setSubmiting]= useState(false)
  // const INIT_VALUES ={
  //   firstName:'',
  //   lastName:'',
  //   email:'',
  //   phone:'',
  //   address1:'',
  //   address2:'',
  //   city:'',
  //   state:'',
  //   country:'',
  //   birthYear:'',
  //   birthMonth:'',
  //   birthDay:'',
  //   gender:'',

  // }
  // const ValidationSchema = Yup.object().shape({
  //   firstName: Yup.string().required('Required'),
  //   lastName: Yup.string().required('Required'),
  //   email: Yup.string().email('Invalid Email'),
  //   phone: Yup.number().integer('number').required('required'),
  //   address1: Yup.string().required('required'),
  //   address2: Yup.string(),
  //   city: Yup.string().required('Required'),
  //   state: Yup.string().required('Required'),
  //   country: Yup.string().required('Required'),
  //   birthYear: Yup.string().required('Required'),
  //   birthMonth:Yup.string().required('Required'),
  //   birthDay:Yup.string().required('Required'),
  //   gender:Yup.string().required('Required')

  // })

  // const formik = useFormik({
  //   initialValues: INIT_VALUES,
  //   validationSchema: ValidationSchema,
  //   onSubmit: submit
    

  // })

  return (
    <div className="App">

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={4}>
          <User setSubmiting={setSubmiting}/>
        </Grid>
        <Grid item xs={8}>
          {submiting? <Output /> : <div className='generate'>Generating Your Reseme...</div>}
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
