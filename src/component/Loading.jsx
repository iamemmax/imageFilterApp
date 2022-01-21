import React from 'react'
import "./css/loader.scss"

function Loading() {
    return (
        <div className='loading'>
                <div className='myloader'>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>
    )
}

export default Loading
