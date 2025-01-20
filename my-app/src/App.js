import logo from './logo.svg';
import './App.css';

const Headr=()=>{
  const text='salom ali'
  const getText=(text)=>{
    return(
      <div>
        <h1>hello {text}</h1>
        <p>oldin git hubga kirib repazitoriy ochib olish kerakmi
        Ha, to'g'ri. Oldin GitHub'da yangi repozitoriy yaratishingiz kerak. Buning uchun quyidagi amallarni bajaring:</p>
      </div>
    )

  }


  return <div>{getText('ali')}</div>
}
const Field=()=>{
  return <input type='text' placeholder='writing..'/>

}
const Button=()=>{
  const user=true
  const login='login'
  return <button>{user ? 'logout':'login'}</button>
}




function App() {
  return (
    <div className='App'>
      <Headr/>
      <Field/>
      <Button/>
    </div>
  )
   
}

export default App;
