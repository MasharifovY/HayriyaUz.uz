import "./Footer.scss"
import logo from "../../assets/images/logo.png"
import uzcard from "../../assets/images/uzcard.png"
import humo from "../../assets/images/humo.png"
import visa from "../../assets/images/visa.png"

function Footer() {
    return (
        <div className="general-box">
            <img className="logo-footer" src={logo} alt="logo-footer" />
            <div className="box-parent">
                <img src={uzcard} alt="uzcard" className="card-money-1" />
                <img src={humo} alt="humo" className="card-money-2" />
                <img src={visa} alt="visa" className="card-money-3" />
            </div>
            <hr />
            <p className="service">
HayriyaUz.uz - © 2022 All Rights Reserved</p>
        </div>
    )
}

export default Footer
