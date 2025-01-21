import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import './app.css'
import KinoList from "../kino-list/kino-list";
import KinoAddForm from "../kino-add-form/kino-add-form";
const App =()=>{
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
        <KinoList/>
        </div>
        <div className="kino-add-form">
            <KinoAddForm/>
        </div>
     </div>)
}
export default App;