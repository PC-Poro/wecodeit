import classes from './btn.module.css'
import { useHistory } from 'react-router-dom'

function CallToAction(props) {
    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(props.redirect)
    }
    return (
        <button className={`${classes.btn} ${classes[props.class]}`} onClick={(e) => handleSubmit(e)} >{props.value}</button>
    )
}

export default CallToAction