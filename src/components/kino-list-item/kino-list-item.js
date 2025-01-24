import './kino-list-item.css'

const KinoListItem = ({name,viewares,favourite}) => {
//1-usul
  //  let className='list-group-item d-flex justify-content-between'
// if(favourite){
//   className+= ' favourite'
// }


  return (
    //1-usul davomi
    // <li className={className}>
    <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
        <span className='list-group-item-label'>{name}</span>
        <input type="number" className='list-group-item-input' defaultValue={viewares}/>
        <div className='d-flex justify-content-center align-items-center'>
            <button type='button' className='btn-cookie btn-sm'>
                <i className='fas fa-cookie'></i>
            </button>
            <button type='button' className='btn-trash btn-sm'>
                <i className='fas fa-trash'></i>
            </button>
            <button type='button' className='btn-star btn-sm'>
            <i className="fa-solid fa-star-and-crescent"></i>
            </button>
           
        </div> 
    </li>
  )
}

export default KinoListItem

