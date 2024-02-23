import { useState, useRef, useEffect } from "react";

import { MySlider } from "./MySlider";




const formatTime = time => {
  if (time == null) return `0:00`

  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60)

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const SongBar = ({audio}) => {

    const  [time, setTime] = useState(0)
    const [disable, setDisable] = useState(false)
    let duration;

    useEffect(() => {
      duration = audio?.current?.duration ?? 100},[])
  
    useEffect(() => {
      audio.current.addEventListener('timeupdate', handleTimeUpdate)
    
      return () => {
        audio.current.removeEventListener('timeupdate', handleTimeUpdate)
      }
    })
    
    const handleTimeUpdate = () => {
      if (!disable) {
        setTime(audio.current.currentTime)
      }
      }
  
    return (
      <div className="flex flex-row items-center gap-2 mb-3 text-white text-sm">
        <span className="opacity-50 w-12 text-right">{formatTime(time)}</span>
         
         <MySlider   
            size="sm"
            step={0.01} 
            maxValue={duration} 
            minValue={0} 
            color="blueCustom"
            disableThumbScale={true}
            hideThumb={true}
            aria-label="Player progress"
            value={[time]}
            className="w-[400px]"
            onChange={(value) => {
              setDisable(true)
              setTime(value)
             
            }}
            onChangeEnd={(value) => {
              audio.current.currentTime = value
              setDisable(false)
            }}  
          />
        <span className="opacity-50 w-12">
        {duration ? formatTime(duration) : '0:00'}
      </span>
      </div>
    )
  
  }