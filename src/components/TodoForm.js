import React, {useState} from "react";

function TodoForm(props){

    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo=()=>{
        if(description !== '' && assigned !== ''){
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');
        }
    };

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input
                        type="text"
                        className="form-control"
                        name="assigned"
                        required
                        onChange={e => setAssigned(e.target.value)}
                        value={assigned}
                    />
                    
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="description"
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                    >
                    </input>
                </div>
                <button className="btn btn-primary" onClick={submitTodo}>Submit Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;