import './kino-listcss.css'
import KinoListItem from '../kino-list-item/kino-list-item'

const kinoList = () => {
  return (
    <div className="kinoList">
      <KinoListItem name="empire of osman " viewares={811}/>
      <KinoListItem name='Ertigurul ' viewares={400}/>
      <KinoListItem name='tank of war' viewares={500}/>
      <KinoListItem name='world culture is suraound' viewares={600}/>
    </div>
  )
}

export default kinoList
