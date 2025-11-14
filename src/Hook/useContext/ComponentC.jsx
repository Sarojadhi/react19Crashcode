import ComponentD from './ComponentD'
const ComponentC = (props) => {
  return (
    <>
<div className='m-4 p-5 border-2 border-black bg-slate-200'>
    <div>ComponentC</div>
    <ComponentD name={props.name} />
    </div>
    </>
  )
}

export default ComponentC