import { Component } from 'react'
import './kino-list-item.css'

// const KinoListItem = ({name,viewares,favourite}) => {
// //1-usul
//   //  let className='list-group-item d-flex justify-content-between'
// // if(favourite){
// //   className+= ' favourite'
// // }


//   return (
//     //1-usul davomi
//     // <li className={className}>
//     <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
//         <span className='list-group-item-label'>{name}</span>
//         <input type="number" className='list-group-item-input' defaultValue={viewares}/>
//         <div className='d-flex justify-content-center align-items-center'>
//             <button type='button' className='btn-cookie btn-sm'>
//                 <i className='fas fa-cookie'></i>
//             </button>
//             <button type='button' className='btn-trash btn-sm'>
//                 <i className='fas fa-trash'></i>
//             </button>
//             <button type='button' className='btn-star btn-sm'>
//             <i className="fa-solid fa-star-and-crescent"></i>
//             </button>
           
//         </div> 
//     </li>
//   )
// }
//class ga o'zgartirish yuqoridagi codeni
class KinoListItem extends Component{
  constructor(props){
    super(props)
    this.state={favourite:false,like:false}
  }

  onFavourite=()=>{
    this.setState((prevState)=>({
        favourite:!prevState.favourite,
     
    }),()=>{})
  }
  onLike=()=>{
    this.setState((onLike)=>({
      like:!onLike.like
    }))

  }
  render(){
    const {name,viewares}=this.props
    const {favourite ,like}=this.state
    return(
      <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
               <span onClick={this.onLike} className='list-group-item-label'>{name}</span>
               <input type="number" className='list-group-item-input' defaultValue={viewares}/>
               <div className='d-flex justify-content-center align-items-center'>
                   <button type='button' className='btn-cookie btn-sm' onClick={this.onFavourite}>
                       <i className='fas fa-cookie'></i>
                   </button>
                   <button type='button' className='btn-trash btn-sm'>
                       <i className='fas fa-trash'></i>
                   </button>
                  
                   <i className="fas fa-star"></i>
                   
                 
               </div> 
          </li>
    )
  }
}
export default KinoListItem

