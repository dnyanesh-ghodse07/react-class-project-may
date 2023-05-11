import React from 'react'
import './Home.scss'
import Card from '../../Components/Card/Card'
import { Link } from 'react-router-dom'
import { products } from '../../data'
const Home = () => {
    
  return (
    <>
    <div>
        Search
    </div>
    <div className="products">
        {
            products.map((product) => {
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