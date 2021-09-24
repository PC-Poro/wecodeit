import classes from "./footer.module.css"

function Footer (props) {
    const startYear = 2021
    const date = new Date().getFullYear()

    return (
        <footer className={`${classes.footer} ${classes[props.align]}`}>
           © {startYear === date ? date : startYear+"-"+date} WE CODE IT {'>_'} All rights reserved.
        </footer>
    )
}

export default Footer