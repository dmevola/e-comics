import React from 'react'
import'./Home.css'
import Product from "../../component/Product/Product"
import ComicList from '../../component/ComicList/Index'

function Home() {
    return (
        <div className="home w-full md:h-screen pt-12 md:pt-4 flex items-center justify-center">
            <div className="home__container w-full pt-5 items-center h-full grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {/* <img className="home__Image fixed-top flex" src="https://m.media-amazon.com/images/P/172919785X.01._SCLZZZZZZZ_SX500_.jpg" alt="" /> */}
                
                <div className="home__row max-w-[1300px] justify-center">
                    <Product id = "3344" title='Cat Kid Comic Club: A Graphic Novel (Cat Kid Comic Club #1): From the Creator of Dog Man' price={7.00} image='https://images-na.ssl-images-amazon.com/images/I/51wuQxpeDoL._SX336_BO1,204,203,200_.jpg' rating={4} />
                </div>
                <div className="home__row max-w-[1300px]">
                    <Product id = "23234223" title='Marvel Greatest Comics: 100 Comics that Built a Universe, ' price={11.99} image='https://m.media-amazon.com/images/I/A1tmfYAtb+L._AC_UY436_FMwebp_QL65_.jpg' rating={5} />    
                </div>
                <div className="home__row">
                    <Product id = "232653223" title='Blank Manga Template,' price={119.00} image='https://m.media-amazon.com/images/I/51RHU3JmqcL._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
                </div>
                <ComicList></ComicList>
            </div>
        </div>
        
    )
}

export default Home