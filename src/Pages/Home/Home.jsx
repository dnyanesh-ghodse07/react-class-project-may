import React from 'react'
import './Home.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
const Home = () => {
    const products = [
        {
            id: 1,
            name: "APPLE",
            model: "Iphone14",
            category: 'mobiles',
            price: '999',
            color: 'red',
            ratings: '4.5'
        },
        {
            id: 2,
            name: "Samsung",
            model: "S22 ultra",
            category: 'mobiles',
            price: '999',
            color: 'red',
            ratings: '4.5'
        },
        {
            id: 3,
            name: "Motorola",
            model: "Flex 23",
            category: 'mobiles',
            price: '567',
            color: 'black',
            ratings: '4.5'
        }
    ]
  return (
    <>
    <Navbar/>
    <div>
        Search
    </div>
    <div className="products">
        {
            products.map((product) => {
                return (
                    <Card key={product.id} product={product}/>
                )
            })
        }
    </div>

    </>
  )
}

export default Home