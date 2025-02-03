import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import './app.css'
import KinoList from "../kino-list/kino-list";
import KinoAddForm from "../kino-add-form/kino-add-form";
import Props from "../props/props.js"
const App =()=>{
    const data=[{id:1,name:'empaire of osman',viewares:100,favourite:false},
        {id:2,name:'ertigurul',viewares:100 ,favourite:true},
        {id:3,name:'empaire of king',viewares:10,favourite:true},
        {id:4,name:'tank of war',viewares:10,favourite:false}
    ]
    return (

    
    <div className="app font-monospace">
        <div>
            <Props/>
        </div>
        <div className="content">
            <AppInfo/>
        </div>
        <div className="search-panel">
            <SearchPanel/>
           
        </div>
        <div className="app-filter" >
        <AppFilter/>
        </div>
       
        <div className="kino-list">
        <KinoList  data={data}/>
        </div>
        <div className="kino-add-form">
            <KinoAddForm/>
        </div>
     </div>)
}
export default App;