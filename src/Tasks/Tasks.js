import Task from "../Task/Task";

function Tasks({tasks,onDelete,onToggle}) {

    return (
        <div>
            {tasks.map(task=>(
                <Task onToggle={onToggle} key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default Tasks;