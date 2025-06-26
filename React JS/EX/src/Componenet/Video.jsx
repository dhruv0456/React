import React from 'react'

export default function Video() {
    return (
        <div>

            <div class="container">
                <div class="header-text-top">VIRAT HAS A MESSAGE FOR YOU</div>
                <div class="video-card">
                    <div class="video-wrapper">
                        <video controls autoplay muted loop>
                            <source src="video.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div class="header-text-side">VIRAT HAS A MESSAGE FOR YOU</div>
                </div>
            </div>


        </div>
    )
}
