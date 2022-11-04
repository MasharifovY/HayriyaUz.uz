import "./Navbar.scss";
import logo from "../../assets/images/logo.png"
import {Link} from "react-router-dom"

const Navbar = ()=>{
    return (
        <div className="navigation">
            <a className="logo" href="/home">
            <img className="logo" src={logo} alt="logo" />
            </a>
            <nav className="nav">
                        <Link className="nav-name" to="/home">Asosiy</Link>
                        <Link className="nav-name nav-name-2" to='/payment'>
                            <div className="a">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Hayriya qilish

                            </div>
                        </Link>     
            </nav>
        </div>
    )
}
export default Navbar