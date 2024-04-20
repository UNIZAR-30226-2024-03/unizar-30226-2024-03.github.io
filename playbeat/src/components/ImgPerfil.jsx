import {Avatar} from "@nextui-org/react";

export const ImgPerfil = ({src, name}) => {
  return (
    <div>
    <Avatar src={src} classNames={{
        base: "bg-gradient-to-br from-[#6985C0] from-30% to-[#CDD6EA]",
        icon: "text-black/80",
      }} name={name} showFallback />
    </div>
    
  )
}
