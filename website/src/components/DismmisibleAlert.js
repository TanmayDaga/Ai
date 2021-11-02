import React from 'react'

export default function DismmisibleAlert(props) {
    return (
        <>
            {props.state === true ?

                (<div>
                    <div class={`alert alert-${props.color} alert-dismissible fade show`} role="alert">
                    <strong>{props.message}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                    
                </div>
                ) : ""}

        </>
    )
}
