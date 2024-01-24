import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import styles from './PaginaPadrao.module.css';

export default function PaginaPadrao(){
    return (
        <main>
            <Banner />
            <Outlet />
        </main>
    )
}