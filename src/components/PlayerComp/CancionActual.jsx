export const CancionActual = ({image, title,artists}) => {
    return (
      <div
        className={`flex items-center gap-5 relative overflow-hidden
        `}>
          <picture className="ml-2 w-12 h-12 bg-zinc-800 rounded-sm shadow-lg overflow-hidden">
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
  