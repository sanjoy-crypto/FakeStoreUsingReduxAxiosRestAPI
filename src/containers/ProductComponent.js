import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductComponents = () => {
    const products = useSelector((state) => state.allProducts.products);


    return (
        <>
            <div className="container my-4">
                <h3 className="text-center pb-3 mb-5 border-bottom">Redux Axios REST API Store</h3>
                <div className="row ">
                    {
                        products.map((product, i) => (

                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="card text-center">
                                    <Link to={`/product/${product.id}`}>
                                        <img className="card-img" src={product.image} alt={product.title} />
                                    </Link>
                                    <div className="card-body">
                                        <Link to={`/product/${product.id}`}>
                                            <h5 className="card-title oneLine mb-2 pb-0">{product.title}</h5>
                                        </Link>
                                        <p className="price mb-0 pb-0">$ {product.price}</p>
                                        <p className="card-text">{product.category}</p>
                                        <Link to="" className="btn btn-primary">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default ProductComponents