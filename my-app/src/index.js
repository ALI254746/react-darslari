import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';




const text="ali"

const el=(
    <div>
      <h1 className='ot'>hello world{text}</h1>
      <input type="text" />
      <button >click</button>
    </div>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode>
  <App/>
</StrictMode>
);


