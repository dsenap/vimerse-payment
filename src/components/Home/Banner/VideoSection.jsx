import React from 'react'

export default function VideoSection({isGps}) {
  return (
    <video preload="none" autoPlay playsInline muted loop>
            {/* #t=0.001 is a anchor to run on iOS */}
            <source src={`/video/back_new_7.webm#t=0.001`} type="video/webm" />
            {!isGps && (
              <source src={`/video/back_new_6.mp4#t=0.001`} type="video/mp4" />
            )}
          </video>
  )
}
