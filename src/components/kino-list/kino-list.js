import './kino-listcss.css'
import KinoListItem from '../kino-list-item/kino-list-item'

const kinoList = ({data}) => {
  return (
    <ul className="kinoList">
      {data.map(item=>(
        //1-usul
        <KinoListItem name={item.name} viewares={item.viewares} favourite={item.favourite}/>
        //2-usul
        // <KinoListItem {...item}/>
      ))}

      {/* biz yuqoridagi code orqali juda quay va qisqa code yozamiz  */}



      {/* bu pasdagi code stastic bu juda uzun */}
      {/* <KinoListItem name="empire of osman " viewares={811}/>
      <KinoListItem name='Ertigurul ' viewares={400}/>
      <KinoListItem name='tank of war' viewares={500}/>
      <KinoListItem name='world culture is suraound' viewares={600}/> */}
    </ul>
  )
}

export default kinoList
