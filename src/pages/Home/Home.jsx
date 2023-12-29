import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from './Catergory/Category';
import Featured from './Featured/Featured';
import PopularMenu from './PopularMenu/PopularMenu';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Pindi Bross | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
}

export default Home;
