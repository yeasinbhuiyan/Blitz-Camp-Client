
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses/Home/PopularClasses';
import Banner from './Banner/Banner';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (

        <div>
            <Helmet>
            <title>Biltz Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <AboutUs></AboutUs>
            
        </div>
    );
};

export default Home;