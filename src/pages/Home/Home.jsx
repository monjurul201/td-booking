import React from 'react';
import Featured from '../../component/featured/Featured';
import FeaturedProperties from '../../component/featuredProperties/FeaturedProperties';
import Footer from '../../component/footer/Footer';
import Header from '../../component/header/Header';
import MailList from '../../component/mailList/MailList';
import Navbar from '../../component/navbar/Navbar';
import PropertyList from '../../component/propertyList/PropertyList';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by property tyoe</h1>
                <PropertyList/>
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;