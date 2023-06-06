
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses/Home/PopularClasses';

const Home = () => {
    return (

        <div>
            <Helmet>
            <title>Biltz Camp | Home</title>
            </Helmet>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;