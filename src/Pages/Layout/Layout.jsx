import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../Components/Header/Header';

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Outlet></Outlet>
        </Fragment>
    )
}

export default Layout;