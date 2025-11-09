
const UserCard = ({user}) => {
  return (
   <>
   
      <h2>name:{user.name}</h2>
      <p> age:{user.age}</p>
      <p>email:{user.email}</p>
      <p>country:{user.address.country}</p>

   </>
  )
}

export default UserCard;