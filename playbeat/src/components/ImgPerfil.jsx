import {Avatar} from "@nextui-org/react";

export const ImgPerfil = ({src, name, classNames, className}) => {
  return (
    <div>
        <Avatar className={className} src={src} classNames={classNames} name={name} showFallback />
    </div>
    
  )
}
