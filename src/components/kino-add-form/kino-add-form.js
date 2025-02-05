import { Component } from 'react'
import './kino-add-form.css'

class KinoAddForm extends Component {
  constructor(props){
    super(props)
    this.state ={
      name:'+998',
      viewares:''
    
  };

   
  }
  changeHandlerInput=(e)=>{
    this.setState({
      [e.target.name]:e.target.value,
})
  }
  handleSubmit = (e) => {
    e.preventDefault(); // Formani default submit qilinishini oldini olish



    this.props.addForm(this.state); // addForm faqat state qabul qiladi
    this.setState({
      name: '',
      viewares: ''
    });
};

  
  render(){
    const {name,viewares}=this.state
  
    return (
      <div className='kino-add-form'>
          <h3>Yangi kinolar qo'shish</h3>
        <form className='add-from d-flex' onSubmit={this.handleSubmit}>
          <input value={name} name="name" onChange={this.changeHandlerInput} type='text' className='form-control new-post-label' placeholder='Qanday Kino'/>
          <input value={viewares} name="viewares" onChange={this.changeHandlerInput}  type='number' className='form-control new-post-label' placeholder='Nechi marotaba korilgan'/>
          <button type="submit" className='btn btn-outline-dark'>
              Qo'shish
          </button>
        </form>
      </div>
    )
  }
 
}

export default KinoAddForm
