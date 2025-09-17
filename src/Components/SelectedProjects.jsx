import Task from '../Tasks/Task.jsx'
import Button from "./Button.jsx"
export default function selectedProjects({btnCaption,project,onHandelClose,onDelete,onAddTask,onDeleteTask,tasks}){
  
    const formattedDate= new Date(project.duedate).toLocaleDateString('en-US',{
        year:"numeric",
        month:'short',
        day:'numeric'
    })
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">
                        {project.title}
                    </h1>
                   <> <Button onClick={onDelete}>Delete</Button>
                    <Button onClick={onHandelClose}>{btnCaption}</Button></>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Task onAddT={onAddTask} onDeleteT={onDeleteTask} tasks={tasks}/>
            {/* <p className='text-stone-800'>This project does not have any tasks yet.</p> */}
            <ul></ul>
        </div>
    )
}