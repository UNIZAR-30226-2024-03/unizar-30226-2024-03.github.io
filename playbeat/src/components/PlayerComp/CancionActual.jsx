
export const CancionActual = ({image, title,artists}) => {
    return (
      <div
        className={`flex items-center gap-5 relative overflow-hidden
        `}>
          <picture className="ml-2 w-12 h-12 bg-zinc-800 rounded-sm shadow-lg overflow-hidden flex">
            {image != null 
            ? <img src={image}  />
            : <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playlist self-center" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17v-13h4" /><path d="M13 5h-10" /><path d="M3 9l10 0" /><path d="M9 13h-6" />
              </svg> }
          </picture>
  
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm block">
              {title}
            </h3>
            <span className="text-xs opacity-80 text-white">
            {artists.map((artista, index) => {
                if(index == artists.length-1){
                    return artista.nombreUsuario
                }else{
                    return artista.nombreUsuario + ', '
                }
            })}
            </span>
          </div>
  
      </div>
    )
  }
  