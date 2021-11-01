import React from 'react'

export default function DismmisibleAlert(props) {
    return (
        <>
            {props.state === true ?
                (<div className= {`alert alert-${props.color} alert-dismissible fade show`} role="alert">
                    {props.message}
                </div> ): ""}

        </>
    )
}
