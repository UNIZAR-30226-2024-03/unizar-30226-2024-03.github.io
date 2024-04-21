
import { useRef,useState, useEffect } from "react";
import {SongBar} from "./PlayerComp/SongBar.jsx"
import {VolumeControl} from "./PlayerComp/VolumeControl"
import {CancionActual} from "./PlayerComp/CancionActual"
import {usePlayerState} from "@/globalState/playerState"
import {getAudio} from "@/utils/getAudio.ts"




export const Play = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="white" strokeLinecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="white" /></svg>
)


export const Pause = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="white" strokeLinecap="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5h4v14h-4z" /><path d="M14 5h4v14h-4z" /></svg>
)

export const NextSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="<<<white>>>" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="white" /><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" strokeWidth="0" fill="white" /></svg>
)

export const PreviousSong = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="white" /><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" strokeWidth="0" fill="white" /></svg>
)



export const Shuffle = ({classname, color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 4l3 3l-3 3" /><path d="M18 20l3 -3l-3 -3" /><path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" /><path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" /></svg>
)

export const Loop = ({classname, color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" /><path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" /></svg>
)

export const ListIcon = ({classname,color}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l11 0" /><path d="M9 12l11 0" /><path d="M9 18l11 0" /><path d="M5 6l0 .01" /><path d="M5 12l0 .01" /><path d="M5 18l0 .01" /></svg>
)






export function Player ({jws, children}) {

    const [audioId, setAudioId] = useState('7')
    const [primeraVez, setPrimerVez] = useState(false);
    const [aux, setAux] = useState(false)
    async function fetchData(id) {
      const request = await getAudio(jws, id);
      audio.current.src = URL.createObjectURL(request);
    }

    
    const {play, setPlay,volume,loop,setLoop, shuffle, setShuffle } = usePlayerState()


    const audio = useRef()
  
    useEffect(() => {
      if(play===true) {
        audio.current.play()
      }else{
        audio.current.pause()
      }
      }, [play])

      useEffect
      (() => {
        const fetchDataAsync = async () => {
          await fetchData(audioId);
          setPlay(true);
        };
        if(primeraVez){
          fetchDataAsync();
          setPrimerVez(false);
        }
      }, [audioId, aux])
      function playSong() {
        setPlay(false)
        if(localStorage.getItem("cancion") === audioId){
          setAux(!aux)
        }
          setAudioId(localStorage.getItem("cancion"))

        
        
      }

      document.addEventListener("playSong", playSong);
      document.addEventListener("stopSong", () => {
        setPlay(false)});
      
      useEffect(() => {
        audio.current.volume = volume
      }, [volume])

      useEffect(() => {
        localStorage.setItem("loop", loop)
      })


    const onClickHandlerPlay = () => {
        setPlay(!play)
    }

    
  return (
    <div className="bg-grey bg-opacity-70 h-full w-full flex flex-row justify-between p-2">

        <div className="flex flex-row items-center text-white w-[300px]">
             {/* Add the song name and artist here */}
             <CancionActual title='Better Day' artists='penguinmusic' image='..//penguin.png'/>
             
        </div>


        <div className="grid place-content-center flex-1">
        <div className="flex justify-center flex-col items-center">
            <div className="flex flex-row gap-2 mb-0.5 mt-1.5">

              <button>
                  <PreviousSong classname={"hover:opacity-100 opacity-70 transition"} />
              </button>
              <button className="rounded-full " onClick={onClickHandlerPlay}>
                {play ? <Pause classname={"hover:opacity-100 opacity-70 transition"}/> : <Play classname={"hover:opacity-100 opacity-70 transition"}/>}
              </button>
              <button>
                <NextSong  classname={"hover:opacity-100 opacity-70 transition nextSong"}/>
              </button>
              
            </div>
            <SongBar audio={audio}/>
            <audio ref={audio} id="audioPlayer"/>
        </div>

      </div>
      <div className="flex flex-row items-center gap-3 w-[300px] justify-end ">
      <button onClick={()=> setLoop(!loop)}>
           {loop ? <Loop classname={" hover:opacity-100 opacity-70 transition loop"} color={"#6985C0"}/> : <Loop classname={" hover:opacity-100 opacity-70 transition"} color={"white"}/>}
        </button>
        <button onClick={()=> setShuffle(!shuffle)}>
           {shuffle ? <Shuffle classname={" hover:opacity-100 opacity-70 transition"} color={"#6985C0"}/> : <Shuffle classname={" hover:opacity-100 opacity-70 transition"} color={"white"}/>}
        </button>

        <button >
            {children}
            {/* {queue ? <ListIcon classname={"hover:opacity-100 opacity-70 transition bg-[#CDD6EA] bg-opacity-20 rounded-[3px]"} color={"#6985C0"}/> : <ListIcon classname={"hover:opacity-100 opacity-70 transition "} color={"white"}/>} */}
        </button>
      
       <VolumeControl audio={audio}/>
       </div>
       
    </div>

  )
}
