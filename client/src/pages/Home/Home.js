import React from 'react'
import'./Home.css'
import Product from "../../component/Product/Product"
import ComicList from '../../component/ComicList/Index'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                    <img className="home__Image" src="https://m.media-amazon.com/images/P/172919785X.01._SCLZZZZZZZ_SX500_.jpg" alt="" />
                
                <div className="home__row">
                    <Product id = "3344" title='Cat Kid Comic Club: A Graphic Novel (Cat Kid Comic Club #1): From the Creator of Dog Man' price={7.00} image='https://images-na.ssl-images-amazon.com/images/I/51wuQxpeDoL._SX336_BO1,204,203,200_.jpg' rating={4} />
                    <Product  id = "2323223" title='Cat Kid Comic Club #4: A Graphic Novel: From the Creator of Dog Man' price={22.00} image="https://m.media-amazon.com/images/I/615Lif3nhNL._AC_UY436_FMwebp_QL65_.jpg" rating={5} username={AJ} />
                </div>
                <div className="home__row">
                <Product id = "23234223" title='Marvel Greatest Comics: 100 Comics that Built a Universe, ' price={11.99} image='https://m.media-amazon.com/images/I/A1tmfYAtb+L._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
                <Product id = "2323276523" title='Blank Comic Book: Large Cartoon Notebooks for Kids 9-12 with Variety of Templates Draw Your Own Comics ' price={100.00} image='https://m.media-amazon.com/images/I/71ciofnl5ZL._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
                <Product id = "232328723" title='Blank Comic Book: Large Cartoon Notebooks for Kids 9-12 with Variety of Templates Draw Your Own Comics ,' price={69.99} image='https://m.media-amazon.com/images/I/71U3oaeBW6L._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
                    
                </div>
                <div className="home__row">
                <Product id = "232653223" title='Blank Manga Template,' price={119.00} image='https://m.media-amazon.com/images/I/51RHU3JmqcL._AC_UY436_FMwebp_QL65_.jpg' rating={5} />
                </div>
                <ComicList></ComicList>
            </div>
        </div>
        
    )
}

export default Home;