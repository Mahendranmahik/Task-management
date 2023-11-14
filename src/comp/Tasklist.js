import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Updatescreen from './Updatescreen'

const Tasklist = () => {

const [modal,setmodal]=useState(false)


const updatetask=()=>{
    setmodal(true)
}
const deletetask=()=>{
    console.log('deleted')
}


  return (
    <>
    <Table striped bordered hover>
        <thead className='text-center'>
            <tr>
                <th>S.NO</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className='text-center'>
            <tr>
                <td>1</td>
                <td>play cricket</td>
                <td>to be play for fit</td>
                <td>
                    <Button className='mx-3' onClick={updatetask}><i className='bi bi-pencil-square'></i></Button>
                    <Button><i className='bi bi-trash3'onClick={deletetask}></i></Button>
                </td>
            </tr>
        </tbody>
       
    </Table>
     <Updatescreen
        show={modal}
        onhide={()=>setmodal(false)}/>
     </>

  )
}

export default Tasklist