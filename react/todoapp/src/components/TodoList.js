import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props){
    return(
        <div className='py-4 bg-light'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-9 mx-auto">
                        <h2 className='mb-4'>Toto List Component. - {props.title}</h2>
                        {props.todos.length===0? "No Todos to Display!" :
                            props.todos.map((item)=>{
                                return <TodoItem todoItem={item} key={item.sno} onDelete={props.onDelete} onDone={props.onDone} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TodoList;