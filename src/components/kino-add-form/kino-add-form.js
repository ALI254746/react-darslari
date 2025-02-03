import { Component } from 'react'
import './kino-add-form.css'

class KinoAddForm extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'+998',
      viewars:'12'
    
  }

   
  }
  changeHandlerInput=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
})
  }
  render(){
    const {name,viewars}=this.state
    return (
      <div className='kino-add-form'>
          <h3>Yangi kinolar qo'shish</h3>
        <form className='add-from d-flex'>
          <input value={name} name="name" onChange={this.changeHandlerInput} type='text' className='form-control new-post-label' placeholder='Qanday Kino'/>
          <input value={viewars} name="viewars" onChange={this.changeHandlerInput}  type='number' className='form-control new-post-label' placeholder='Nechi marotaba korilgan'/>
          <button type="submit" className='btn btn-outline-dark'>
              Qo'shish
          </button>
        </form>
      </div>
    )
  }
 
}

export default KinoAddForm
