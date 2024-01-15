import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                error : {error.code}
            </h1>
            <p>
                message: {error.message}
            </p>
        </div>
    )
}

export default ErrorPage
