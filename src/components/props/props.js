//1-usul
// const User=props=>{
//     return(
//         <div>
//             <h1>Mening ismim -{props.firstName},sharifim -{props.lastName}</h1>
//             <a href={props.link}>youtube kanali</a>
//         </div>
//     )
// }
// const App=()=>{
// return(
//     <div>
//         <User firstName='hojiakbar' lastName='Mamanosirov' link='youtube.com'/>
//         <User firstName="ali" lastName='Muhammad'link='youtube.com'/>
//     </div>
// )
// }
// export default App
// 2-usul

import { Component } from "react"
class User extends Component{
    constructor(props){
        super(props)
        this.state={
            counter:10,
            
        }
        //2-usul
        // this.clickHandler=this.clickHandler.bind(this)
    }
//    function clickHandler(){
//     this.setState((prevState)=>({
//         counter:prevState.counter +1
//     }));
//    } 
    
    
    
    
    clickHandler=()=>{
        this.setState((prevState)=>({
            counter:prevState.counter+1

        }),()=>{ console.log(this.state.counter)});
       
    }
    decrement=()=>{
        this.setState((prevState)=>({
            counter:prevState.counter-1
        }),()=>{})
    }

    reStart=()=>{
        this.setState((prevState)=>({
           counter:0
        }),()=>{})
    }
    render(){
        const {firstName,lastName,link}=this.props
        return(
            <div className="w-50 mx-auto">
                <div className="border p-3 mt-5">
                <h1>Mening ismim -{firstName.name} yoshim-{firstName.age},sharifim -{lastName()}</h1>
                <a href={link}>youtube kanali</a>
                </div>
                <div className="mt-3">
                    <button onClick={this.clickHandler} className="btn btn-success">
                        +
                    </button>
                    <button onClick={this.decrement} className="btn btn-danger">-</button>
                    <button onClick={this.reStart} className="btn btn-info">restart</button>
                    <p>{this.state.counter}</p>
                </div>
            </div>
        )

    }
}

const App=()=>{
return(
    <div>
        <User firstName={{name:'hojiakbar',age:20}} lastName={()=>'Mamanosirov'} link='https://youtube.com'/>
        <User firstName={{name:'ali',age:100}} lastName={()=>'Muhammad'}link='https://youtube.com'/>
    </div>
)
}
export default App