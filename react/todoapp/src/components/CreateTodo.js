import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be null!");
        }
        else
        {
            props.createTodoItem(title, desc);
            setTitle("");
            setDesc("");
        }
    };
  return (
    <div className='py-4 border-bottom'>
        <div className='container'>
            <div className="row">
                <div className="col-lg-9 mx-auto">
                    <h2 className='mb-4'>{props.title}</h2>
                    <form id="todo" onSubmit={submit}>
                        <div>
                            <label className='form-label'>Title : </label>
                            <input className='form-control' type="text" name="title" id="title" value={title} placeholder="Enter Todo Title" onChange={(e)=>{setTitle(e.target.value)}}/>
                        </div>
                        <br />
                        <div>
                            <label className='form-label'>Description : </label>
                            <input className='form-control' type="text" name="desc" id="desc" value={desc} placeholder="Enter Todo Description" onChange={(e)=>{setDesc(e.target.value)}} />
                        </div>
                        <br />
                        <Button type="submit" variant="success">Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
