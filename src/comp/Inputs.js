import React, { useState } from 'react'
import { Button, Form, FormLabel } from 'react-bootstrap'

const Inputs = () => {
  const [title,settitle]=useState('')
  const [desc,setdesc]=useState('')

  const addtask=(e)=>{
    e.preventDefault()
    console.log(title,desc)

  }
  return (
    <Form>
        <Form.Group className='mb-3'>
            <FormLabel>Task Title</FormLabel>
            <Form.Control 
            type='text' 
            placeholder='Enter task title'
            value={title}
            onChange={(e)=>settitle(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <FormLabel>Task Desc</FormLabel>
            <Form.Control
             type='text'
             placeholder='Enter task description'
             value={desc}
             onChange={(e)=>setdesc(e.target.value)}
             />
        </Form.Group>
        <div className="text-end my-3">
            <Button variant='info' type="submit" onClick={addtask}>Add Task</Button>
        </div>
    </Form>
  )
}

export default Inputs