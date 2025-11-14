import ComponentC from './ComponentC'
const ComponentB = (props) => {
  return (
    <>
<div className='m-4 p-5 border-2 border-black bg-slate-200'>
    <div>ComponentB</div>
      <ComponentC name={props.name} />
      </div>
      </>
  )
}

export default ComponentB