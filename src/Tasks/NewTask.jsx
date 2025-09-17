import { useState } from "react";


export default function NewTask({onAT,onDT}) {

  const [enteredTask, setEnteredTask] = useState('');
  function handelchange(evt) {
    setEnteredTask(evt.target.value);
  }

  function handelClick(){
    if(enteredTask.trim()===''){
        return;
    }
    onAT(enteredTask)
    setEnteredTask('')
  }
  return (
    <div className="flex items-center gap-4">
      <input  type="text" className="w-64 px-6 py-3 rounded-sm text-stone-950 bg-stone-200"
        onChange={handelchange} value={enteredTask} />
      <button className="text-slate-800 hover:text-stone-950"
       onClick={handelClick}>Add Task</button>
    </div>
  );
}
