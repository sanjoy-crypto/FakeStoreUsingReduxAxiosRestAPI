import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeSelectedProducts, selectedProducts } from '../redux/actions/productAction'


const ProductDetails = () => {
    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product
    const { productId } = useParams()
    const dispatch = useDispatch()

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log('Error : ', err);
        })
        dispatch(selectedProducts(response.data))
    }
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail()
        return () => {
            dispatch(removeSelectedProducts())
        }
    }, [productId])
    console.log("PRoduct Details : ", product);
    return (
        <div className="container my-4">
            {
                Object.keys(product).length === 0 ? (
                    <div>Loading....</div>
                ) : (
                    <div className="row singleProduct">
                        <div className="col-md-6">
                            <div className="singleImage">
                                <img src={image} alt={title} className="float-left" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className="text-mute">Home/{category}</p>
                            <h3 className="mb-3">{title}</h3>
                            <h5 className="mb-3">Price : ${price}</h5>
                            <p className="text-mute text-justify"><strong>Description :</strong> {description}</p>
                            <div className="d-flex">
                                <p className="qty">Qty: </p>
                                <input type="number" className="form-control w-25" />
                            </div>
                            <div className="d-flex mt-3">
                                <button className="btn btn-danger mr-2">Add to Cart</button>
                                <button className="btn btn-warning">Buy Now</button>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetails