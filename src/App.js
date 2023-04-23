import { Grid } from '@mui/material';
import './App.css';
import User from './Componets/User';
import Output from './Componets/Output';
import { useState } from 'react';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import { Route, Routes } from 'react-router-dom';
import Templates from './Componets/Templates';
import { createContext } from 'react';
import { useMemo } from 'react';
//import { saveAs } from 'file-saver';

export const MainContext = createContext()


function App() {
   
  const[submiting, setSubmiting]= useState(true)
  const[experience2, setExperience2]= useState(false)
  const[experience3, setExperience3]= useState(false)

  const ContextValues = useMemo(()=>{
    return{
      submiting,setSubmiting,
      experience2,setExperience2,
      experience3,setExperience3
    }
  },[submiting, experience2, setSubmiting, setExperience2,experience3, setExperience3])
  
  
  return (
    <div className="App">

      <Grid container spacing={2}>
        <MainContext.Provider value={ContextValues}>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          <Grid item xs={4}>
            { <User /*setSubmiting={setSubmiting}*/ /> }
          </Grid>
          <Grid item xs={8}>
            { /*{submiting? <Output /> : <div className='generate'>Generating Your Reseme...</div>} */}
            <Routes>
              <Route path='/' element={<Output />}/>
              <Route path='/templates' element={<Templates/>}/>
              
            </Routes>
          </Grid>
        </MainContext.Provider>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
