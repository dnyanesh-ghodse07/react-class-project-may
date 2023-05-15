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

  return (
    <>
    <div className='search'>
        <input type="text" className='search-items' placeholder='Search items' onChange={(e) => setInputText(e.target.value)}/>
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