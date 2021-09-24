import Submit from '../Buttons/Submit'
import classes from './loginForm.module.css'

function ContactUsForm(props) {
    return (
        <form className={classes.formInput}>
            <input type="text" autoComplete="given-name" placeholder="Awesome" />
            <input type="text" autoComplete="family-name" placeholder="Customer" />
            <input type="email" placeholder="awesome.customer@wecode-it.com" />
            <Submit value="Contact us" transition={props.transition} onClick={props.onClick} redirect="dashboard" />
        </form>
    )
}

export default ContactUsForm