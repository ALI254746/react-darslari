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
const User=({firstName,lastName,link})=>{
    return(
        <div>
            <h1>Mening ismim -{firstName.name} yoshim-{firstName.age},sharifim -{lastName()}</h1>
            <a href={link}>youtube kanali</a>
        </div>
    )
}
const App=()=>{
return(
    <div>
        <User firstName={{name:'hojiakbar',age:20}} lastName={()=>'Mamanosirov'} link='youtube.com'/>
        <User firstName={{name:'ali',age:100}} lastName={()=>'Muhammad'}link='youtube.com'/>
    </div>
)
}
export default App