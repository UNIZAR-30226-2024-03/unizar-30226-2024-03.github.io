
import { useState, useRef } from "react";
import {Slider} from "./Slider"


export const Play = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="white" strokeLinecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="white" /></svg>
)


export const Pause = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="white" strokeLinecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5h4v14h-4z" /><path d="M14 5h4v14h-4z" /></svg>
)

export const NextSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="white" /><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="white" /></svg>
)

export const PreviousSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="white" /><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="white" /></svg>
)

export const VolumeMute = ({classname}) => (
<svg xmlns="http://www.w3.org/2000/svg" className={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /><path d="M16 10l4 4m0 -4l-4 4" /></svg>
)

export const VolumeMid = ({classname}) => (
  <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
)
export const VolumeHigh = ({classname}) => (
  <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
  )

export const CancionActual = ({image, title,artists}) => {
  return (
    <div
      className={`flex items-center gap-5 relative overflow-hidden
      `}>
        <picture className="w-16 h-16 bg-zinc-800 rounded-sm shadow-lg overflow-hidden">
          <img src={image} alt={title} />
        </picture>

        <div className="flex flex-col">
          <h3 className="font-semibold text-sm block">
            {title}
          </h3>
          <span className="text-xs opacity-80 text-white">
            {artists}
          </span>
        </div>

    </div>
  )
}



export const SongBar = () => {
 

}

export const VolumeControl = () => {
  
}

export function Player () {
    const [play, setPlay] = useState(false)
    const [currSong, setCurrSong] = useState(null)
    const audio = useRef()


    const onClickHandlerPlay = () => {
        if(play){
            audio.current.pause()
        }else{
            audio.current.src = '/public/music/better-day-186374.mp3'
            audio.current.play()
        }


        
        setPlay(!play)
    }
    
  return (
    <div className="bg-[#4A4A4A] h-full w-full flex flex-row justify-between p-2">

        <div className="flex flex-row items-center text-white w-[200px]">
             {/* Add the song name and artist here */}
             <CancionActual title='Better Day' artists='penguinmusic' image='/penguin.png'/>
             
        </div>


        <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center">
            <div className="flex flex-row">

              <button>
                  <PreviousSong classname={"hover:opacity-100 opacity-70 transition"} />
              </button>
              <button className="rounded-full p-2" onClick={onClickHandlerPlay}>
                {play ? <Pause classname={"hover:opacity-100 opacity-70 transition"}/> : <Play classname={"hover:opacity-100 opacity-70 transition"}/>}
              </button>
              <button>
                <NextSong classname={"hover:opacity-100 opacity-70 transition"}/>
              </button>
              <SongBar />
              <audio ref={audio} />
            </div>
          
        </div>

      </div>
       
        <div className="text-white flex flex-row items-center w-[200px]">
             {/* Add the volume control here */}
            <div className="flex flex-row items-center gap-2">
              <button>
                <VolumeMute classname={"hover:opacity-100 opacity-70 transition"}/>
              </button>
              <Slider 
              defaultValue={[100]}
              max={100}
              min={0}
              className="w-20"
              onValueChange={(value) => {
                const [nuevoVol] = value
                 audio.current.volume = nuevoVol / 100
              }}

              />
            </div>
        </div>
    </div>
  )
}


