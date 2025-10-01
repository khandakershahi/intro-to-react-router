import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)

    return (
        <div>
            <Header></Header>
            <div className=' max-w-[1200px] mx-auto flex justify-center gap-30 items-start' >
                <Sidebar></Sidebar>
                {
                    isNavigating && <span>loading...</span>
                }
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