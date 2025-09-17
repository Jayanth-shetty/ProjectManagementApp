import Input from "./Input";
import Modal from './Modal'
import { useRef } from "react";
export default function NewProject({onAdd,handelcancel}) {
    let title=useRef();
    let description=useRef();
    let duedate=useRef();
    let modal=useRef();

    function handelSave(){
        let E_title=title.current.value;
        let E_desc=description.current.value;
        let E_duedate=duedate.current.value;

        if(E_title.trim()===''||E_desc.trim()===''||E_duedate.trim()===''){
          modal.current.open()
          return;
        }

        onAdd({
            title:E_title,
            description:E_desc,
            duedate:E_duedate
        })
       
    }
  return (
    <>
    <Modal ref={modal} bCaption="Okay"><h2>Invalid input</h2> <p>Oops.... looks like you forgot to enter value</p></Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={handelcancel} className="text-stone-700 hover:text-stone-950">cancel</button>
        </li>
        <li>
          <button onClick={handelSave} className="bg-stone-800 px-6 py-2 rounded-md text-stone-50 hover:bg-stone-950">save</button>
        </li>
      </menu>
      <div>
        <Input type='text' ref={title} title="Title" />
        <Input ref={description} title="Description" textarea/>
        <Input type='date' ref={duedate} title="Due date" />

      </div>
    </div>
    </>
  );
}
