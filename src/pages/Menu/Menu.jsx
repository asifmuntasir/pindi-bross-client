import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../SharedComponents/Cover';
import menuImg from '../../assets/menu/menu-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitile from '../SharedComponents/SectionTitile';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Pindi Bross | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            {/* <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <PopularMenu></PopularMenu> */}

            {/* Main Cover */}
            <SectionTitile
                subHeading={"Don't Miss"} heading={"Today's Offer"}
            ></SectionTitile>
            {/* Offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* Dessert menu items */}
            <MenuCategory
                items={desserts}
                title={"Dessert"}
                coverImg={dessertImg}
            ></MenuCategory>
            {/* Pizza menu items */}
            <MenuCategory
                items={pizza}
                title={"Pizza"}
                coverImg={pizzaImg}
            ></MenuCategory>
            {/* Soup menu items */}
            <MenuCategory
                items={soup}
                title={"Soup"}
                coverImg={soupImg}
            ></MenuCategory>
            {/* Salad menu items */}
            <MenuCategory
                items={salad}
                title={"Salad"}
                coverImg={saladImg}
            ></MenuCategory>

        </div>
    );
}

export default Menu;
