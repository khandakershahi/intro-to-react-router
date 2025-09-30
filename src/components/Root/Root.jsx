import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='h-[400px] max-w-[1200px] mx-auto flex justify-center gap-30 items-center' >
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;


/**
 * 1. use: usersPromise > Suspense > promise > use(usersPromise)
 * 2. [ less used so far] useState + useEffect ( () => {}, [])
 * 3. set loader in the route defination: load data before router component is rendered 
 */