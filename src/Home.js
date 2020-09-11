import React, { useEffect } from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    useEffect(() => (
        slider(0)
    ), [])

    return (
        <div className="home">
            <div className="home_container">
            <div className="home_sliderContainer">
                    <div className="home_slide">
                        <img
                            className="home_image "
                            src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZGFmYzViNGEt/ZGFmYzViNGEt-OTliNDJlZWQt-w1500._CB407882704_.jpg"
                            alt="image1" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/NDg3YjhkYzYt/NDg3YjhkYzYt-ODZlYzg1MmQt-w1500._CB405481174_.jpg"
                            alt="image2" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2020/TV/THBY_S2_00000_GWBleedingHero_1500x600_POST_Final_noLocale_PVD5401._CB407881564_.jpg"
                            alt="image3" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/33/img20/BacktoSchool/BKTOSCHOOL_REFRESCA_DSKHERO_1500x600._CB409103188_.jpg"
                            alt="image4" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/33/digital/music/Merch/Gateway/Hero/Engagement/2020/W37/090420_MX_DesktopHeroMaquinaDelTiempoMX_EGM_GW_GH_1500x600._CB404907953_.jpg"
                            alt="image5" />
                    </div>
                </div>

                {/* <img className="home_image"
                    src="https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/ZGFmYzViNGEt/ZGFmYzViNGEt-OTliNDJlZWQt-w1500._CB407882704_.jpg"
                    alt="homeimage"

                    //carrousel : https://images-na.ssl-images-amazon.com/images/G/33/kindle/journeys/NDg3YjhkYzYt/NDg3YjhkYzYt-ODZlYzg1MmQt-w1500._CB405481174_.jpg
                    // https://images-na.ssl-images-amazon.com/images/G/33/digital/video/merch/2020/TV/THBY_S2_00000_GWBleedingHero_1500x600_POST_Final_noLocale_PVD5401._CB407881564_.jpg
                    // https://images-na.ssl-images-amazon.com/images/G/33/img20/BacktoSchool/BKTOSCHOOL_REFRESCA_DSKHERO_1500x600._CB409103188_.jpg
                    // https://images-na.ssl-images-amazon.com/images/G/33/digital/music/Merch/Gateway/Hero/Engagement/2020/W37/090420_MX_DesktopHeroMaquinaDelTiempoMX_EGM_GW_GH_1500x600._CB404907953_.jpg
                /> */}
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
                {/* </div> */}
            </div>
        </div>
    )
}

function slider(counter) {
    const slides = document.querySelectorAll(".home_image");

    slides.forEach((slide, index) => {
        if (index !== counter) {
            slide.style.visibility = `hidden`
            slide.classList.add(`image-${index}`)
        }
    })
    moveCarousal(counter, slides, slides.length)
}

function moveCarousal(counter, slides, len) {

    if (slides) {
        if (counter >= len - 1)
            counter = 0
        else
            counter += 1

        slides.forEach((slide, index) => {
            if (index === counter) {
                slide.style.visibility = `visible`
            }
            else {
                slide.style.visibility = `hidden`
            }
        })

    }
    setTimeout(() => {
        moveCarousal(counter, slides, len);
    }, 3500)
}


export default Home
