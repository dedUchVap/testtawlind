import {IPath} from "../types/common.ts";
import Admin from "../pages/Admin.tsx";
import LoginRegister from "../pages/LoginRegister.tsx";
import Main from "../pages/Main.tsx";


export const PATHS: IPath[] = [
    {url: 'admin', component: Admin, name: 'Администрирование'},
    {url: 'log_reg', component: LoginRegister, name: 'Вход/Регистрация'},
    {url: '/', component: Main, name: 'Главная'}
]
