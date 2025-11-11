
const UserCard = ({user}) => {
  return (
   <>
    <div className="m-4 p-5 flex flex-col items-center bg-gray-200 py-8">
      <h2>name:{user.name}</h2>
      <p> age:{user.age}</p>
      <p>email:{user.email}</p>
      <p>country:{user.address.country}</p>
</div>
   </>
  )
}
export default UserCard;