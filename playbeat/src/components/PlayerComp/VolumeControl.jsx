
import { Slider } from "./Slider"


export const VolumeMute = ({classname}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /><path d="M16 10l4 4m0 -4l-4 4" /></svg>
    )
    
    export const VolumeMid = ({classname}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
    )
    export const VolumeHigh = ({classname}) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={classname} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
      )
    
export const VolumeControl = ({audio}) => {

    return (
      <div className="text-white flex flex-row items-center w-[200px]">
               {/* Add the volume control here */}
              <div className="flex flex-row items-center gap-3">
                <button>
                  {/* Habra que silenciar al pulsar en el botón */}
  
                  {/* {volumenActual > 50 ? (
                      <VolumeHigh className={"hover:opacity-100 opacity-70 transition"} />
                      ) : volumenActual > 20 ? (
                      <VolumeMid className={"hover:opacity-100 opacity-70 transition"} />
                      ) : (
                      <VolumeMute className={"hover:opacity-100 opacity-70 transition"} />
                      )} */}
                      <VolumeHigh className={"hover:opacity-100 opacity-70 transition"} />
                  
                </button>
                <Slider 
                defaultValue={[100]}
                max={100}
                min={0}
                className="w-20"
                onValueChange={(value) => {
                  const [nuevoVol] = value
                   audio.current.volume = nuevoVol / 100
                   console.log(audio.current.volume)
                }}
  
                />
              </div>
          </div>
    )
    
  }