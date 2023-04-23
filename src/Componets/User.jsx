
import UserFormComp from './UserComponets/UserFormComp'
import { Formik, } from 'formik'
import { useContext } from 'react'
import * as Yup from "yup"
import { MainContext } from '../App'

function User() {

  const {setSubmiting} = useContext(MainContext)

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
    gender:Yup.string().required('Required'),
    jobTittle:Yup.string().required('Required'),
    about:Yup.string().required('Required'),
    year1:Yup.string().required('Required'),
    companyName:Yup.string().required('Required'),
    nameRef1:Yup.string().required('Required'),
    jobPositionRef1:Yup.string().required('Required'),
    emailRef1:Yup.string().required('Required'),
    phoneRef1:Yup.number().required('Required'),
    companyNameRef1:Yup.string().required('Required'),
    educationYear:Yup.string().required('Required'),
    degree:Yup.string().required('Required'),
    aboutPosition:Yup.string().required('Required'),
    jobPosition:Yup.string().required('Required'),

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
    jobTittle:'',
    about:'',
    year1:'',
    companyName:'',
    nameRef1:'',
    jobPositionRef1:'',
    emailRef1:'',
    phoneRef1:'',
    companyNameRef1:'',
    educationYear:'',
    degree:'',
    aboutPosition:'',
    jobPosition:'',
    year2:'',
    companyName2:'',
    jobPosition2:'',
    aboutPosition2:'',
    year3:'',
    companyName3:'',
    jobPosition3:'',
    aboutPosition3:'',

  }
  const submit = (values)=> {
    localStorage.setItem('formValues', JSON.stringify(values))
    setSubmiting(true)
  }
  const styles ={
     marginTop:'70px',
     borderRight: '2px solid #666565',
     
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    //overflowY: 'scroll',
    // height: '100vh',
    // backgroundColor: 'rgb(54, 53, 53)',
    //color: '#f0f8ff',
  }
  
  return (
    <div style={styles}>
      <Formik
          initialValues={{...INIT_VALUES}}
          validationSchema={ValidationSchema}
          onSubmit={submit}
        >
          <UserFormComp />
      </Formik>
    </div>
  )
}


export default User