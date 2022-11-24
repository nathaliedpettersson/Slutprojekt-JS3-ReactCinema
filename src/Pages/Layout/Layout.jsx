import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

// Layout to be visible on all pages
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