import { Helmet } from 'react-helmet-async';
import orderCoverImg from '../../assets/shop/banner2.jpg';
import Cover from '../SharedComponents/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';


const FoodOrder = () => {

    const categories = ['Salad', 'Pizza', 'Drinks', 'Soup', 'Dessert'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === "drinks");



    return (
        <div>
            <Helmet>
                <title>Pindi Bross | Order Food</title>
            </Helmet>

            <Cover img={orderCoverImg} title={"Order Your Taste"}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                </TabList>
                {/* We have to make TabPanel by following TabList */}
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default FoodOrder;
