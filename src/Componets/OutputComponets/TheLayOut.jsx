import React from 'react'
import ReactDOMServer from "react-dom/server";
import { Button, Grid } from '@mui/material'
import Profile from './Profile'
import Details from './Details'
import Output from '../Output';
import { saveAs } from 'file-saver';

function TheLayOut() {
//   const handleClick = () => {
//     const componentString = ReactDOMServer.renderToStaticMarkup(<Output />);
//     const componentBlob = new Blob([componentString], { type: "application/pdf" });
//     const componentUrl = window.URL.createObjectURL(componentBlob);
//     const link = document.createElement("a");
//     link.href = componentUrl;
//     link.download = "author.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(componentUrl);
//   }
const handleClick = () => {
  try{
    const componentString = ReactDOMServer.renderToStaticMarkup(<Output />);
    const componentBlob = new Blob([componentString], { type: "application/pdf" });
    saveAs(componentBlob, "author.pdf")
  }catch(error){
    console.log('Error downloading pdf', error)
  }
}
  return (
    <div>
        <Grid container spacing={2} sx={{pt:'50px'}} >
            <Grid container spacing={0}>
                <Grid item xs={4} ><Profile /></Grid>
                <Grid item xs={8} ><Details /></Grid>
                <Grid item xs={12} sx={{m:'100px'}}>
                  <Button variant='contained' fullWidth={true} onClick={handleClick}>
                    Download Reseme in PDF
                  </Button>
                </Grid>
            </Grid>
            
        </Grid>
    </div>
  )
}

export default TheLayOut