import React, { useContext } from 'react'
import Layout from '../../component/layout/Layout'
import myContext from '../../context/data/myContex'
import HeroSection from '../../component/heroSection/HeroSection'
import Filter from '../../component/filter/Filter'
import ProductCard from '../../component/productCard/ProductCard'
import Track from '../../component/tracks/Track'
import Testimonial from '../../component/testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

function Home() {
    const dispatch = useDispatch();
    const cartItem = useSelector((state) => state.cart);
    console.log(cartItem);

    const addCart = () => {
        dispatch(addToCart("shirt"));
    }

    const deleteCart = () => {
        dispatch(deleteFromCart("shirt"));
    }

    return (
        <Layout>

            <HeroSection />
            <Filter />
            <ProductCard />
            <Track />
            <Testimonial />

        </Layout>
    )
}

export default Home