import 'react'
import Modal from "../components/Constants/Modal.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import LoginForm from "../components/RegisterLogin/Forms/LoginForm.tsx";

const LoginRegister = () => {
    const login = useSelector((state: RootState) => state.loginModal.login);

    if (!login){
        return null;
    }

    return (
        <>
            <Modal>
                <Modal.Title>Регистрация и Вход</Modal.Title>
                <Modal.Body>
                    <LoginForm>
                    </LoginForm>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default LoginRegister;