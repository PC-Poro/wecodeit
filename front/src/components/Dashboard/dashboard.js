import classes from "./dashboard.module.css"
import Button from "../Buttons/cta"
import Footer from "../Footer/footer"
import Header from '../Header/header'
import { useState } from "react"
import { Link, withRouter } from "react-router-dom"

function Dashboard(props) {
    const [project, setProject] = useState('')
    return (
        <div className={classes.container}>
            <Header />
            {props.location.state?.transition ? <>
                <div className={classes.transitionEnd}></div>
                </>
                : <></>
            }
            <div className={classes.mainContent}>
                {project.length < 1 ? <>
                    <h1>{">_"}Looks like you have no project set. Yet.</h1>
                    <Button value="start" class={"link"} onClick={setProject} redirect="new-project" />
                </> : <>
                    <h1>{">_"} My projects</h1>
                    <ul className={classes.projectsList}>
                        <li>
                            <Link to="/project">
                                <h2>Best website in the world</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/project">
                                <h2>Best website in the world</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/project">
                                <h2>Best website in the world</h2>
                            </Link>
                        </li>
                    </ul>
                </>}
            </div>
            <Footer align="left" />
        </div>
    )
}

export default withRouter(Dashboard)