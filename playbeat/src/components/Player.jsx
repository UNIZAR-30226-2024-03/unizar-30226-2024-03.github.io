
import { useState } from "react";


export const Play = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="white" stroke-linecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="white" /></svg>
)


export const Pause = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="white" stroke-linecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5h4v14h-4z" /><path d="M14 5h4v14h-4z" /></svg>
)

export const NextSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="white" /><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="white" /></svg>
)

export const PreviousSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="white" /><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="white" /></svg>
)


export function Player () {
    const [play, setPlay] = useState(false)

    const onClickHandlerPlay = () => {
        setPlay(!play)
    }
    
  return (
    <div class="bg-[#4A4A4A] h-full w-full flex flex-row justify-between p-2">

        <div class="flex flex-row items-center text-white">
             {/* Add the song name and artist here */}
             Cancion Actual...
        </div>


        <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-col items-center">
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


