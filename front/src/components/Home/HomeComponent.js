import LogInForm from "../Forms/Login"
import ContactUsForm from "../Forms/ContactUs"
import classes from "./HomeComponent.module.css"
import Logo from "../../assets/img/logo.png"
import Goo from 'gooey-react'
import { Route, Switch } from "react-router"
import { Link } from "react-router-dom"
import Footer from "../Footer/footer"
import { useState } from "react"

function HomeComponent() {
    const [transition, setTransition] = useState('')
    
    return (
        <div className={classes.container}>
            <img src={Logo} title="We code it" className={classes.logo} />
            <div className={classes.contentDiv} >
                <Goo intensity="strong " className={`${classes.blob} ${transition}`} >
                    <svg width="100%" height="100%">
                        <circle cx="25%" cy="44%" r="100" />
                        <circle cx="27%" cy="45%" r="150" >
                           
                        </circle>
                        <circle cx="24%" cy="45%" r="122" />
                        <circle cx="25%" cy="36%" r="100" />
                        <circle cx="25%" cy="34%" r="70" />
                    </svg>
                </Goo>
                <div className={classes.titleContainer}>
                    <h2 className={classes.tagline}>{">_"} An idea?</h2>
                    <h1 className={classes.mainTitle}>We code it.</h1>
                </div>
                <div className={classes.formContainer}>
                    <Switch>
                        <Route exact path="/sign-in">
                            <div className={classes.inputDiv}>
                                <LogInForm transition={classes.transitioning} onClick={setTransition} />
                            </div>
                            <Link to="/">Oops, I do not have an account yet.</Link>
                        </Route>
                        <Route path="/">
                            <h3>Share with us your project.</h3>
                            <h3>We'll make it happen.</h3>
                            <div className={classes.inputDiv}>
                                <ContactUsForm transition={classes.transitioning} onClick={setTransition} />
                            </div>
                            <Link to="sign-in">I already have an account.</Link>
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeComponent