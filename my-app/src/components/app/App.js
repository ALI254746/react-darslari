
import './App.css';
import Field from '../field/field';
import Button from '../button/button';
import Headr from '../header/header';
import { StrictMode } from 'react';




function App() {
  return (
    <div className='App'>
      <StrictMode><Headr/></StrictMode>
      
      <Field/>
      <Button/>
    </div>
  )
   
}

export default App;
