import { Grid } from '@mui/material';
import './App.css';
import User from './Componets/User';
import Output from './Componets/Output';
import { useState } from 'react';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import { Route, Routes } from 'react-router-dom';
import Templates from './Componets/Templates';
//import { saveAs } from 'file-saver';


function App() {
   
  const[submiting, setSubmiting]= useState(false)
  const[experience2, setExperience2]= useState(false)
  
  // const styles = StyleSheet.create({
  //   container: {
  //     padding: 16,
  //   },
  // });
  
  // const PDFComponent = () => (
  //   <Document>
  //     <Page size="A4" /*style={styles.container}*/>
  //       <Output />
  //     </Page>
  //   </Document>
  // );
  
  
  // const handleDownload = async () => {
  //   try {
  //     const blob = await pdf(<PDFComponent />).toBlob();
  //     saveAs(blob, 'component.pdf');
  //   } catch (error) {
  //     console.log('Error downloading PDF:', error);
  //   }
  // };
  
  return (
    <div className="App">

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={4}>
          <User setSubmiting={setSubmiting} setExperience2={setExperience2} experience2={experience2}/>
        </Grid>
        <Grid item xs={8}>
          { /*{submiting? <Output /> : <div className='generate'>Generating Your Reseme...</div>} */}
          <Routes>
            <Route path='/' element={<Output experience2={experience2}/>}/>
            <Route path='/templates' element={<Templates/>}/>
            
          </Routes>
        </Grid>
        {/* <Grid item xs={12}>
          <Button variant='contained' fullWidth={true} sx={{m:'10px 50px'}} onClick={handleClick}>
            Download Reseme in PDF
          </Button>
        </Grid> */}
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
