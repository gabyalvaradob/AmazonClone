import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">

                <img className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZGFmYzViNGEt/ZGFmYzViNGEt-OTliNDJlZWQt-w1500._CB407882704_.jpg"
                    alt="homeimage"
                />
                <div className="home_row">
                    <Product
                        id="1234"
                        title="The lean startup"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                        rating={5}
                    />
                    <Product
                        id="1235"
                        title="Samsung Galaxy Buds+ Plus, True Wireless Earbuds w/improved battery and call quality (Wireless Charging Case included), Black – US Version"
                        price={11.98}
                        image="https://images-na.ssl-images-amazon.com/images/I/81ilNbqaGWL._AC_SL1500_.jpg"
                        rating={2}
                    />
                    {/* producto */}
                    {/* producto */}
                </div>

                <div className="home_row">
                    {/* producto */}
                    {/* producto */}
                    {/* producto */}
                    <Product
                        id="1236"
                        title="Amazfit"
                        price={129.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/514Y7g-JQDL._AC_SL1000_.jpg"
                        rating={4}
                    />
                    <Product
                        id="1237"
                        title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for Phone-Call and Alexa Voice Control - Industry Leading Active Noise"
                        price={99.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51IdLe-%2B6kL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id='1238'
                        title='Fitbit Companion Bracelet'
                        price={199.99}
                        image={'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'}
                        rating={5}
                    />

                </div>

                <div className="home_row">
                    {/* producto */}
                    <Product
                        id="1239"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
