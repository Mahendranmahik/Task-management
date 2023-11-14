import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

const Updatescreen = (props) => {

    const [title,settitle]=useState('')
     const [desc,setdesc]=useState('')

    const updmodal=()=>{
        console.log(title)
        props.onhide()
    }
  return (

    <Modal {...props}
        size={'md'}
        aria-labelledby="contained-modal-title-vcenter"
        centered>

        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <Form>
            <Form.Group className='mb-3'>
                <Form.Label>Task Title</Form.Label>
                <Form.Control 
                type='text' 
                placeholder='Enter task title'
                value={title}
                onChange={(e)=>settitle(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Task Desc</Form.Label>
                <Form.Control
                type='text'
                placeholder='Enter task description'
                value={desc}
                onChange={(e)=>setdesc(e.target.value)}
                />
            </Form.Group>
        </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button type="submit" onClick={()=>updmodal()}>update</Button>
        </Modal.Footer>
        
    </Modal>
  )
}

export default Updatescreen