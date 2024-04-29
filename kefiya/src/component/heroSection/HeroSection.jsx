import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function HeroSection() {
    return (
        <div className='flex justify-center items-center w-full'>
            <AliceCarousel autoPlay autoPlayInterval={2000} infinite disableButtonsControls >
                <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="Image 1" />
                <img src="https://static.vecteezy.com/system/resources/previews/011/871/820/large_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Image 2" />
                <img src="https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="Image 3" />
                <img src="https://static.vecteezy.com/system/resources/previews/004/299/818/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="Image 4" />
                {/* Add more images here */}
            </AliceCarousel>
        </div>
    )
}

export default HeroSection