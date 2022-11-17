import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </Fragment>
    )
}

export default Layout;