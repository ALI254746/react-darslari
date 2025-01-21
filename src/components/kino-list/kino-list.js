import './kino-listcss.css'
import KinoListItem from '../kino-list-item/kino-list-item'

const kinoList = () => {
  return (
    <div className="kinoList">
      <KinoListItem/>
      <KinoListItem/>
      <KinoListItem/>
      <KinoListItem/>
    </div>
  )
}

export default kinoList
