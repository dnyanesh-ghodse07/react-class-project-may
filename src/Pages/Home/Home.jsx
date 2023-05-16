import React, { useEffect, useState } from 'react'
import './Home.scss'
import Card from '../../Components/Card/Card'
import { Link } from 'react-router-dom'
import data from '../../data.json';
const Home = () => {

    console.log(data);
    const [productsData,setProducts] = useState(data.products);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
       const filteredData = data.products.filter((product) => product.title.toLowerCase().includes(inputText.toLowerCase()))
        setProducts(filteredData)
    },[inputText])

    const categories = new Set(data.products.map((product) => product.category));
    const uniqueCategories = [...categories]
    console.log(uniqueCategories);


    const [selectedCategories,setSelectedCategories] = useState('');
    console.log(selectedCategories);

    useEffect(() => {
        if(selectedCategories){
            const filterCategory = data.products.filter((product) => product.category === selectedCategories);
            setProducts(filterCategory);
        }

    },[selectedCategories])

  return (
    <>
    <div className='search'>
        <input type="text" className='search-items' placeholder='Search items' onChange={(e) => setInputText(e.target.value)}/>
        <select className='category-select' name="" id="" onChange={(e) => setSelectedCategories(e.target.value)}>
            {
                uniqueCategories.map((category) => {
                    return <option value={category}>{category}</option>
                })
            }
        </select>
    </div>
    <div className="products">
        {
            productsData.map((product) => {
                return (
                    <Link to={`/productDetail/${product.id}`}>
                        <Card key={product.id} product={product}/>
                    </Link>
                )
            })
        }
    </div>

    </>
  )
}

export default Home