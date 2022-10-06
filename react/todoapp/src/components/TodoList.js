import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function TodoList(props){
    const [title, settitle] = useState("Title");
    const [desc, setdesc] = useState("Description");
    console.log(title);
    console.log(desc);
    return(
        <div className='py-5'>
            <div className='container'>
                <h2 className='mb-4'>Toto List Component. - {props.title}</h2>
                <form id="todo" onSubmit={(e)=>{props.test(e)}}>
                    <div>
                        <label className='me-2'>Title : </label>
                        <input type="text" name="title" id="title" placeholder="Enter Todo Title" onChange={(e)=>{settitle(e.target.value);}} />
                    </div>
                    <br />
                    <div>
                        <label className='me-2'>Description : </label>
                        <input type="text" name="desc" id="desc" placeholder="Enter Todo Description" onChange={(e)=>{setdesc(e.target.value);}} />
                    </div>
                    <br />
                    <Button type="submit" variant="primary">Submit</Button>{' '}
                </form>
            </div>
        </div>
    )
}
export default TodoList;