import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            {/* <p> I am Home component</p> */}
            <div className="home--container">
                {/* <img className="home--image" src="https://m.media-amazon.com/images/I/71nsesB0UNL._SX3000_.jpg" alt="" /> */}

                <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />
               

                <div className="home--row">
                    <Product
                        id="01"
                        title="See U in C by Ali Karim Sayed"
                        price={4450}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="02"
                        title="Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g"
                        price={2799}
                        image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
                    />

                    <Product
                        id="03"
                        title="TECHSHIELD® Tablet Tempered Glass Screen Protector"
                        price={440}
                        image="https://m.media-amazon.com/images/I/41a7myfhtwL.jpg"
                    />

                </div>

                <div className="home--row">
                <Product
                        id="04"
                        title="COOLCOLD Noise Cancelling USB Microphone"
                        price={629}
                        image="https://m.media-amazon.com/images/I/61mZGKxGX2S._SL1500_.jpg"
                    />

                    <Product
                        id="05"
                        title="Acrux Superior Polyester Waterproof Laptop, Travel, College, School Backpack"
                        price={449}
                        image="https://m.media-amazon.com/images/I/81QaVOdli1L._SL1500_.jpg"
                    />

                </div>

                <div className="home--row">
                <Product
                        id="06"
                        title="HP All-in-One 24-df0215in 23.8-Inch (60.4 cm) FHD with Alexa Built-in (AMD Ryzen 3-3250U/8GB/256GB SSD + 1TB HDD/Win 10/MS Office 2019/Jet Black)"
                        price={43999}
                        image="https://m.media-amazon.com/images/I/71MW1E0je-L._SL1200_.jpg"
                    />

                </div>

            </div>
        </div>
    )
}

export default Home
