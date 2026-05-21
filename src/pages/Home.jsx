import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductList from '../components/ProductList';

const Home = () => {
    
    return (
        <div>
            <HeroSlider />
            <CategorySection />
            <FeaturedProducts/>
            <ProductList/>
        </div>
    );
};

export default Home;