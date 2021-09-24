import classes from './btn.module.css'
import { useHistory } from 'react-router-dom'

function SubmitBtn(props) {
    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!props.onClick) return false
        console.log("Success")
        props.onClick(props.transition)
        if (props.redirect?.length > 0)
           { 
               if (props.transition?.length > 0)
                    setTimeout(() => history.push({pathname: props.redirect, state:{transition: "true"}}), 2500)
                else
                history.push({pathname: props.redirect})
             
        }

    }
    return (
        <button className={`${classes.btn} ${classes.black}`} onClick={(e) => {handleSubmit(e);}} >{props.value}</button>
    )
}

export default SubmitBtn