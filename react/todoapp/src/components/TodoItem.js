import React from 'react';
import Button from 'react-bootstrap/Button';

export default function TodoItem(props) {
  return (
    <div>
        <div className='card mb-3'>
            <div className='card-body'>
                <h6>{props.todoItem.sno} - {props.todoItem.title}</h6>
                <p>{props.todoItem.desc}</p>
                <Button type='submit' variant="danger" className='btn-sm' onClick={()=>{props.onDelete(props.todoItem)}}>Delete</Button>
            </div>
        </div>
    </div>
  )
}
