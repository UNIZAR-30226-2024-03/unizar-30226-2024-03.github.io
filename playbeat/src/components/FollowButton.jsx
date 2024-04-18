import { followUser } from "@/utils/followUser"
import { unfollowUser } from "@/utils/unfollowUser"


export const FollowButton = ({follow,id, jws}) => {
    const  handleButton = () => {
      if(!follow){
         followUser(jws,id)
      }else{
          unfollowUser(jws,id)
      }

    }
  return (


    
    <button className="bg-bluePB rounded-md h-[50px] w-[140px]" onClick={handleButton}>
        {follow ? "Seguir" : "Dejar de seguir"}
    </button>
  )
}
