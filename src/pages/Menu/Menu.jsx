import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../SharedComponents/Cover';
import menuImg from '../../assets/menu/menu-bg.jpg';
import PopularMenu from '../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Pindi Bross | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
}

export default Menu;
