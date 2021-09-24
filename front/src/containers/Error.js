import { useHistory } from "react-router-dom"

function Error () {
    let history = useHistory()

    return (
        <div>
            <h1>404</h1>
            <p>This page is gone. Maybe forever. You're lost. Definitely lost.</p>
            <button onClick={history.goBack}>Bring me back!</button>
        </div>
    )
}

export default Error