import { useEffect, useState } from 'react'


function App() {
  const [backgroundColor,setBackgroundColor] = useState('bg-dark')

  useEffect(()=>{
    document.body.className = backgroundColor
  },[backgroundColor])
  
  const changeColor = (color) =>{
    setBackgroundColor(color)
  };

  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <div style={{width:'600px', height:'500px'}} className='rounded  p-3'>
        <h1 className='text-light text-center'>Background Color Changer</h1>
        <div style={{marginTop:'300px'}} className='text-center'>
          <button  type="button" className='btn btn-primary' onClick={() => changeColor('bg-primary')}>Blue</button>
          <button type="button" className='btn btn-success ms-2' onClick={() => changeColor('bg-success')}>Green</button>
          <button type="button" className='btn btn-warning ms-2' onClick={() => changeColor('bg-warning')}>Yellow</button>
          <button type="button" className='btn btn-danger ms-2' onClick={() => changeColor('bg-danger')}>Red</button>
          <button type="button" className='btn btn-secondary ms-2' onClick={() => changeColor('bg-secondary')}>Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App