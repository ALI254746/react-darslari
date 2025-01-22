import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import './app.css'
import KinoList from "../kino-list/kino-list";
import KinoAddForm from "../kino-add-form/kino-add-form";
const App =()=>{
    const data=[{name:'empaire of osman',viewares:100},
        {name:'ertigurul',viewares:100},
        {name:'empaire of king',viewares:100},
        {name:'tank of war',viewares:100}
    ]
    return (
    <div className="app font-monospace">
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