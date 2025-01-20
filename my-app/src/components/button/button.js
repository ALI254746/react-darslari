const Button=()=>{
    const user=false
    const login='login'
    return <button>{ (user ? login:"logout")}</button>
}
export default Button