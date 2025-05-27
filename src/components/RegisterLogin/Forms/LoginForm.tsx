import 'react';
import 'react-dom'
import classes from "./Forms.module.css";
import {Input} from "@headlessui/react";
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (
        <div className={classes.wrapper_form}>
            <div className={classes.form_login}>
                <div className={classes.form_title}>
                    Регистрация или вход
                </div>
                <form className={classes.form}>
                    <input placeholder={'Электронная почта'} type={'email'} className={classes.input_email}
                    />
                    <button className={classes.button_form}>Продолжить</button>
                    <div className={classes.wrap_checkbox}>
                        <div>
                            <Input type={"checkbox"}></Input>
                        </div>
                        <div className={classes.user_agreement}>
                            Вы принимаете не существующее пользовательское соглашение, вы не можете с ним ознакомиться
                            по этой <Link to={'#'}>ссылке</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;