import React from 'react'
import './Home.scss'
import Card from '../../Components/Card/Card'
import { Link } from 'react-router-dom'
import data from '../../data.json';
const Home = () => {

    console.log(data);
    
  return (
    <>
    <div>
        Search
    </div>
    <div className="products">
        {
            data.products.map((product) => {
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