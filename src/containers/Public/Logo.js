import { Link } from "react-router-dom"
import logo from '../../assets/Logo.png'

export const Logo = () => {
    

    return (
        <Link to={'/'}><img src={logo} alt="Logo" className="hidden md:block cursor-pointer" height={"100"} width={"100"}  /></Link>
    )
}