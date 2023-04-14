import { Grid } from '@mui/material';
import './App.css';
import User from './Componets/User';
import Output from './Componets/Output';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <User/>
        </Grid>
        <Grid item xs={8}>
          <Output/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
