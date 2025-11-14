
const ComponentD = (props) => {
  return (
<div className='m-4 p-5 border-2 border-black bg-slate-200'>
    <div>ComponentD</div>
<p className="text-xl font-semibold text-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300">
  {`BYE HANDSOME ${props.name || "Guest"}`}
</p>
    </div>  
  )
}
 
export default ComponentD