import {createPortal} from 'react-dom';
import { forwardRef, useImperativeHandle,useRef} from 'react';
import Button from './Button';
 const Modal=forwardRef(function Modal({children,bCaption},ref){
    const dialog=useRef();
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        };
    })
    return createPortal(
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md bg-teal-200 text-teal-800 '>  
            {children}
            <form method='dialog' className='mt-4 text-right'>
                <Button>{bCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
})

export default Modal;