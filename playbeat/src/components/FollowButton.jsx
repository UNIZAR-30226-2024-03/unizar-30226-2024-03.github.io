import { followUser } from "@/utils/followUser"
import { unfollowUser } from "@/utils/unfollowUser"
import { useState } from "react"


export const FollowButton = ({follow,id, jws, followers}) => {

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

    <div className="flex flex-row ml-24">
      <div className="text-white text-3xl font-thin opacity-60 w-[180px] flex justify-center mb-2 ">
      {numFollow ? `${numFollow} ${numFollow === 1 ? 'Seguidor' : 'Seguidores'}` : '0 Seguidores'}

      </div>
      <button className="bg-bluePB rounded-md h-[50px] w-[140px]" onClick={handleButton}>
          {seguido ? "Dejar de seguir"  :  "Seguir"}
      </button>
      
    </div>
  )
}
