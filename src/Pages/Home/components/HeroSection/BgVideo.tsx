import React from 'react'
import video from '../../../../assets/videos/homePage-video.mp4'
const BgVideo = () => {
  return (
    <div>
        <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="z-0 absolute hidden md:block inset-0 w-full h-[120vh] object-cover"
      ></video>
      <div className="absolute w-full inset-0 z-10 bg-[linear-gradient(190deg,_rgba(0,14,17,0.6)_0%,_#000E11_80%)]"></div>
    </div>
  )
}

export default BgVideo