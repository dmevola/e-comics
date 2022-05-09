import React from 'react'
import'./Home.css'
import Product from "../../component/Product/Product"
import ComicList from '../../component/ComicList/Index';
import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';

function Home() {

    const { loading, data } = useQuery(QUERY_ITEMS);
    const items = data?.items|| [];
    console.log(items);

    return (

        <main>
        <div className="home">
            <div className="home__container">
                {loading ? (
                    <div> Loading some comics...</div>
                ) : (
                    <ComicList items={items} title="What's your issue?"/>
                )}
        

            </div>
        </div>
        </main>
    );
};

export default Home;