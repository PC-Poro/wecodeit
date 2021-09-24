import Submit from '../Buttons/Submit'
import classes from './loginForm.module.css'
import { AutoTabProvider } from 'react-auto-tab'
import { useState } from 'react'

function LogInForm(props) {
    const [codeSent, useCodeSent] = useState(false)
    const [error, setError] = useState()
    const [errorCode, setErrorCode] = useState()

    const handleCode = (code) => {
        if (code === "6")
            {
                setErrorCode("Wrong code. Please verify")
                return false 
            }
        setErrorCode()
    }

    const handleError = (email) => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) || email.length === 0) {
            setError()
            return (true)
        }
        setError("We don't know this email yet.")
    }

    const handleChange = (email) => {
        if (email.length > 0) return false
        setError()
    }

    return (
        <form className={classes.formInput}>
            {!codeSent ? <>
                <h3>Please enter your email <br />to log in.</h3>
                    <input className={classes.logInInput} type="email" placeholder="awesome.customer@wecode-it.com" onBlur={(e) => handleError(e.target.value)} onInput={(e) => handleChange(e.target.value)} />
                    <span className={classes.error}>{error}</span>
                    <Submit value="Sign in" transition={props.transition} onClick={!error ? useCodeSent : null} redirect="" />
            </> : <>
                <h3>It's good to have you back.</h3>
                <p>We sent a code to <a href="changed-number" title="Can't access this number ?">+33 X XX XX XX 58</a>.</p>
                <AutoTabProvider>
                    <input type="text" maxLength="1" autoFocus={true} />
                    <input type="text" maxLength="1" />
                    <input type="text" maxLength="1" />
                    <p>-</p>
                    <input type="text" maxLength="1" />
                    <input type="text" maxLength="1" />
                    <input type="text" maxLength="1" onInput={(e) => handleCode(e.target.value)} />
                </AutoTabProvider>
                    <span>{errorCode}</span>
                    <Submit value="Sign in" transition={props.transition} onClick={!errorCode ? props.onClick : null} redirect="dashboard" />
                </>}
            {/* <Submit value="Sign in" transition={props.transition} onClick={useCodeSent} redirect="" /> */}
        </form>
    )
}

export default LogInForm