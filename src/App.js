import { Grid } from '@mui/material';
import './App.css';
import User from './Componets/User';
import Output from './Componets/Output';
import { useState } from 'react';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import ReactDOMServer from "react-dom/server";
import { Route, Routes } from 'react-router-dom';
import Templates from './Componets/Templates';
//import { saveAs } from 'file-saver';


function App() {
   
  const[submiting, setSubmiting]= useState(false)
  
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

  const handleClick = () => {
    const componentString = ReactDOMServer.renderToStaticMarkup(<Output />);
    const componentBlob = new Blob([componentString], { type: "application/pdf" });
    const componentUrl = window.URL.createObjectURL(componentBlob);
    const link = document.createElement("a");
    link.href = componentUrl;
    link.download = "author.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(componentUrl);
  }
  
  
  

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
          { /*{submiting? <Output /> : <div className='generate'>Generating Your Reseme...</div>} */}
          <Routes>
            <Route path='/' element={<Output/>}/>
            <Route path='/templates' element={<Templates/>}/>
            
          </Routes>
        </Grid>
        <Grid item xs={12}>
          <button onClick={handleClick}>
            Download Reseme in PDF
          </button>
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
