import Slider from '../components/Slider/Slider';
import React, { useEffect, useState } from 'react'
import { CategoriesGrid } from '../components/CategoriesGrid';
import { fetchStroi } from '../fetchers/fetchStroi'

export const HomePage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetchStroi()
            .then(res => setData(res))
    }, [])



    return (
        <div style={{ margin: 'auto 155px' }}>
            <Slider />
            <h4>Категории</h4>
            <CategoriesGrid categories={data} />
            <div></div>

        </div>
    )
}
