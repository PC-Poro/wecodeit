import classes from "./header.module.css"
import Logo from "../../assets/img/logo.png"
import { GrPowerShutdown } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div className={classes.header}>
            <Link to="/">
                <img src={Logo} title="We code it" className={classes.logo} />
            </Link>
            <span>Welcome back, <a href="profile" title="My profile">John</a>.<button title="Log out"><GrPowerShutdown className={classes.signOff} /></button></span>
        </div>
    )
}

export default Header