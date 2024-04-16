

export const FollowButton = (follow) => {

    const handleButton = () => {
    }
  return (


    
    <button className="bg-bluePB rounded-md h-[50px] w-[140px]" onClick={handleButton}>
        {follow ? "Dejar de seguir" : "Seguir"}
    </button>
  )
}
