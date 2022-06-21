import React, { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from "react-router-dom"
import MenuList from "../components/MenuList"
import { fetchStroi, fetchProducts } from "../fetchers/fetchStroi"
import { Breadcrumbs } from "../components/Breadcrumbs"
import { CatalogGrid } from '../components/CatalogGrid'



function findNode(id, category) {
    if (category?.id + '' === id + '') {
        return category
    }
    if (category?.childCategories) {
        for (let childCategory of category.childCategories) {
            const node = findNode(id, childCategory);
            if (node) {
                return node;
            }
        }
    }
}



function getCategoryPath(id, category) {
    const node = findNode(id, category);
    if (!id || !node) {
        return [category]
    }
    return [...getCategoryPath(node.parentId, category), node]
}


export const CatalogPage = () => {

    const [category, setCategory] = useState()
    const [data, setData] = useState()
    const [product, setProduct] = useState()
    const [searchParams] = useSearchParams()
    const categoryId = searchParams.get('categoryId')

    useEffect(() => {
        fetchStroi().then((categories) => {
            setCategory({
                name: 'Главная',
                id: undefined,
                childCategories: categories,
            })
        })
    }, [])


    const currentCategory = useMemo(() => {
        if (!categoryId || !category) return category
        return findNode(+categoryId, category)
    }, [category, categoryId])

    const links = useMemo(() => {
        if (!category) return [];

        return getCategoryPath(categoryId, category).map(category => ({
            label: category.name,
            to: category.id ? '/catalog?categoryId=' + category.id : '/catalog',
        }));
    }, [categoryId, category])



    const val = useMemo(() => {
        if (currentCategory?.hasOwnProperty('childCategories')) {
            setData(currentCategory)
            return true
        } return false
    }, [currentCategory])


    useEffect(() => {
        if (categoryId) {
            fetchProducts(categoryId).then(res => setProduct(res))
        }
    }, [categoryId])

    console.log(currentCategory)

    return (
        <div>
            <div style={{ margin: ' 30px 168px ' }}>

                <Breadcrumbs links={links} />
            </div >
            <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '168px' }}>
                    <MenuList categories={data?.childCategories} />
                </div>

                <div style={{ marginLeft: '50px' }}>
                    <CatalogGrid categories={val ? data?.childCategories : product?.content} />
                </div>
            </div>
        </div>
    )
}