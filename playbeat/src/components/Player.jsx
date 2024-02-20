
import { useState } from "react";


export const Play = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="white" /></svg>
)


export const Pause = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" class={classname} width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" fill="white" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5h4v14h-4z" /><path d="M14 5h4v14h-4z" /></svg>
)

export function Player () {
    const [play, setPlay] = useState(false)

    const onClickHandlerPlay = () => {
        setPlay(!play)
    }
    
  return (
    <div class="bg-[#4A4A4A] h-full w-full">
        
       <button onClick={onClickHandlerPlay}>
            {play ? <Pause classname="w-10 h-10"/> : <Play classname="w-10 h-10"/>}
        </button>
    </div>
  )
}
