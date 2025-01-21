import './kino-add-form.css'

const KinoAddForm = () => {
  return (
    <div class='kino-add-form'>
        <h3>Yangi kinolar qo'shish</h3>
      <form className='add-from d-flex'>
        <input type='text' className='form-control new-post-label' placeholder='Qanday Kino'/>
        <input type='number' className='form-control new-post-label' placeholder='Nechi marotaba korilgan'/>
        <button type="submit" className='btn btn-outline-dark'>
            Qo'shish
        </button>
      </form>
    </div>
  )
}

export default KinoAddForm
