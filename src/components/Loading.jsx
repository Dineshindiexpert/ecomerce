import React from 'react'
// File ka extension .gif hona chahiye yahan
import loadingGif from '../assets/videos/loading.gif'

const Loading = () => {
    return (
        <div className='d-flex   justify-content-center align-items-center vh-100 bg-white'>
            <img
                src={loadingGif}
                alt="Loading..."
                style={{ width: '200px', imageRendering: 'auto', opacity: '0.9' }} />

        </div>
    )
}

export default Loading
