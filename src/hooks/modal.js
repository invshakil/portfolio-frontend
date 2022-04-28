import React from "react";
import ReactDOM from "react-dom"
import {AiOutlineCloseCircle} from "react-icons/ai"

const Modal = ({ visible, toggle, component,className }) => visible ? ReactDOM.createPortal(
    <div className="modal">
        <div className="modal-content" role="dialog" aria-modal="true">
            <div className={className}>
                <AiOutlineCloseCircle onClick={toggle} color='grey' size='2rem' style={{cursor:'pointer'}}/>
                <br/>
                {component}
                <hr/>
            </div>
        </div>
    </div>, document.body
) : null;

export default Modal;
