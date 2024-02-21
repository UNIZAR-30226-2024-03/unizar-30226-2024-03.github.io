
import { useState, useRef } from "react";


export const Play = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="white" strokeLinecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="white" /></svg>
)


export const Pause = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="38" height="38" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="white" strokeLinecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5h4v14h-4z" /><path d="M14 5h4v14h-4z" /></svg>
)

export const NextSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="white" /><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="white" /></svg>
)

export const PreviousSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="white" /><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="white" /></svg>
)


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
    <div class="bg-[#4A4A4A] h-full w-full flex flex-row justify-between p-2">

        <div class="flex flex-row items-center text-white">
             {/* Add the song name and artist here */}
             Cancion Actual...
        </div>


        <div class="grid place-content-center gap-4 flex-1">
        <div class="flex justify-center flex-col items-center">
            <div class="flex flex-row">

              <button>
                  <PreviousSong classname={"hover:opacity-100 opacity-70 transition"} />
              </button>
              <button className="rounded-full p-2" onClick={onClickHandlerPlay}>
                {play ? <Pause classname={"hover:opacity-100 opacity-70 transition"}/> : <Play classname={"hover:opacity-100 opacity-70 transition"}/>}
              </button>
              <button>
                <NextSong classname={"hover:opacity-100 opacity-70 transition"}/>
              </button>
              <audio ref={audio} />
            </div>
          
        </div>

      </div>
       
        <div class="text-white flex flex-row items-center">
             {/* Add the volume control here */}
            Control del volumen
        </div>
    </div>
  )
}


