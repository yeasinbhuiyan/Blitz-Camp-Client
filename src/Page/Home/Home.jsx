
import { Helmet } from 'react-helmet-async';
import PopularClasses from './PopularClasses/Home/PopularClasses';
import Banner from './Banner/Banner';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import AboutUs from './AboutUs/AboutUs';
import AskedQuestion from './AskedQuestion/AskedQuestion';
import ClassGallery from './ClassGallery/ClassGallery';

const Home = () => {
    return (

        <div>
            <Helmet>
            <title>Blitz Camp | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ClassGallery></ClassGallery>
            <AskedQuestion></AskedQuestion>
            <AboutUs></AboutUs>
            
            
        </div>
    );
};

export default Home;