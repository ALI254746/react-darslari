import { Component } from "react";
import {v4 as uuidv4} from 'uuid'
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import './app.css'
import KinoList from "../kino-list/kino-list";
import KinoAddForm from "../kino-add-form/kino-add-form";
import Props from "../props/props.js"
class App extends Component{
    constructor(props){
        super(props)
        this.state={
           data :[{id:1,name:'empaire of osman',viewares:100,favourite:false},
                {id:2,name:'ertigurul',viewares:100 ,favourite:true},
                {id:3,name:'empaire of king',viewares:10,favourite:true},
                {id:4,name:'tank of war',viewares:10,favourite:false}
            ]
        }
    }
     onDelete=(id)=>{
        this.setState(({data})=>{
//mutable
        //   const index =data.findIndex(c=>c.id!==id)
        //   data.splice(index,1)
//immutable
         const newArr=data.filter(c=> c.id!==id);
         console.log(newArr)


            return {
            data:newArr,
            }
        })

    }
    addForm=(item)=>{
        
        this.setState(({data})=>{
            const newArr=[...data,{...item, id:uuidv4()}]
            return{
                data:newArr,
            }
        })

        
    }



   render(){
    const {data}=this.state
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
            <KinoList  data={data} onDelete={this.onDelete}/>
            </div>
            <div className="kino-add-form">
                <KinoAddForm addForm={this.addForm}/>
            </div>
         </div>)
   }
}
export default App;