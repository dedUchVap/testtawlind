import 'react';
import classes from "./Modal.module.css";
import React, {ReactNode, useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {off} from "../../features/login/loginReg.ts";
import {useDispatch} from "react-redux";

interface ModalProps {
    children?: ReactNode;
}

interface ModalTitleProps {
    children?: ReactNode;
}

interface ModalComponent extends React.FC<ModalProps> {
    Title: React.FC<ModalTitleProps>
    Body: React.FC<ModalBodyProps>
}
interface ModalBodyProps {
    children: ReactNode
}
const modalRoot = document.getElementById('modal')!;


const Title: React.FC<ModalTitleProps> = ({children}) => {
    return (
        <div className={classes.title}>
            {children}
        </div>
    )
}

const Body: React.FC<ModalTitleProps> = ({children}) => {
    return (
        <div className={classes.body}>
            {children}
        </div>
    )
}

const Modal: ModalComponent = ({children}) => {

    const [firstClick, setFirstClick] = useState(0)
    const dispatch = useDispatch()

    function handlerClick(){
        dispatch(off())
    }

    useEffect(() => {
        
        function handlerClickDocument(ev: MouseEvent){
            if (!firstClick){
                setFirstClick(1)
                return;
            }
            ev.stopPropagation();
            const target = ev.target as HTMLElement;
            if ('.' + target.closest(classes.modal)){
                return;
            }
            dispatch(off())
        }
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        document.addEventListener('click', ev => {handlerClickDocument(ev)})

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, scrollY);
        };
    }, [dispatch, firstClick])

    return ReactDOM.createPortal(
        <div className={classes.wrap_modal}>
            <div className={classes.modal}>
                {children}
            </div>
            <div className={classes.modal_exit_button_wrap}>
                <button onClick={handlerClick} className={classes.exit_button}><FontAwesomeIcon icon={faXmark}/></button>
            </div>
        </div>,
        modalRoot
    );
};
Modal.Title = Title
Modal.Body = Body
export default Modal;