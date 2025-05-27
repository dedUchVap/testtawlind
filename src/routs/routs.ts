import {IPath, IPathModal} from "../types/common.ts";
import Admin from "../pages/Admin.tsx";
import Main from "../pages/Main.tsx";
import {store} from "../store/store.ts";
import {on} from "../features/login/loginReg.ts";
import MovieWatch from "../pages/MovieWatch.tsx";


export const PATHS: IPath[] = [
    {url: 'admin', component: Admin, name: 'Администрирование', render_func: false},
    {url: '/', component: Main, name: 'Главная', render_func: false},
    {url: '/movie_test', component: MovieWatch, name: 'Тестовая страница фильма', render_func: false}
]
export const MODAL_PATH: IPathModal[] = [
    {name: 'Регистрация/Вход', render_func: () => store.dispatch(on())}
]
