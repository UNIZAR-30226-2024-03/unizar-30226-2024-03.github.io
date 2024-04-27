import { followUser } from "@/utils/followUser"
import { unfollowUser } from "@/utils/unfollowUser"
import { useState } from "react"
import {ImgPerfil} from "@/components/ImgPerfil.jsx";
import "@/styles/SubHeaderUser.css";


export const SubHeaderUser = ({follow,id, jws, followers, nombre, email, src}) => {



  const [seguido, setseguido] = useState(follow)
  const [numFollow, setNumFollow] = useState(followers.length)
    const  handleButton = () => {
      if(!seguido){
         followUser(jws,id)
         setseguido(!seguido)
         setNumFollow(numFollow+1)
      }else{
          unfollowUser(jws,id)
          setseguido(!seguido)
          setNumFollow(numFollow-1)
      }

    }
  return (

    <div className=" mt-[23%]">
    
    <div className=" ml-5 flex flex-col  absolute name">
            <span className="text-3xl font-bold text-white">
                {nombre}
            </span>
            <span className="text-white opacity-60">
                {email}
            </span>

            
        </div>
        <div className=" flex flex-col flex-wrap content-center justify-center absolute photo gap-3 ">
            <span className="text-3xl font-bold text-white ">
                <ImgPerfil className="w-[180px] h-[180px]" classNames={{
                    base: "bg-gradient-to-br from-[#6985C0] from-30% to-[#CDD6EA]",
                    icon: "text-black/80 w-[180px] h-[180px] rounded-full text-7xl solid flex items-center justify-center",
                    img: "w-[180px] h-[180px] rounded-full",
                    name: "text-7xl -mt-2 "

                  }} name={nombre} src={src} client:load/>
                
            </span>
            <div className="text-white text-3xl font-thin opacity-60 w-[180px] flex justify-center ">
            {numFollow ? `${numFollow} ${numFollow === 1 ? 'Seguidor' : 'Seguidores'}` : '0 Seguidores'}  

            </div>
        </div>
        <div className=" ml-5 flex flex-row gap-2  absolute edit mx-2">
        <button className="bg-bluePB rounded-md h-[50px] w-[140px]" onClick={handleButton}>
             {seguido ? "Dejar de seguir"  :  "Seguir"}
        </button>
        </div>
        </div>
  )
}
