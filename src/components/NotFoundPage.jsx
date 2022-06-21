import React from 'react'
import svg from '../svg/no-content.svg'

export const NotFoundPage = ({ message = 404 }) => {
    return (
        <div style={{ marginLeft: "300px" }}>
            <div>
                <img src={svg} />
                <h1 style={{ marginLeft: '40px' }}>{message}</h1>
            </div>

        </div >
    )
}
