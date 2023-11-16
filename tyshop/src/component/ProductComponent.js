import React from "react";
import {Link} from 'react-router-dom'
import {FaSearch,FaShoppingCart} from "react-icons/fa";

export const Price = ({promo,price}) => {
    if(promo === 0){
        return <span className="new-price">{price} €</span>
    }

    else if(promo > 0){
        return(
            <>
                <span className="new-price mr-3">{((100-promo)/100)*price} €</span>
                <span className="old-price">{price} €</span>
            </>
        )
    }

}

export default class Product extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {id,title,img,price,inCart,promo} = this.props.caracteristique

        return(
            <div className="col-md-4 col-lg-3 col-12" key={id}>
                <div className="product-grid mb-4">
                    
                    <div className="product-image">
                        <Link to={`/home/${id}`}>
                            <img alt= "shoes" className="pic-1 img-responsive" src={img}/> 

                            {promo>0 ? 
                                <>
                                    <span className="product-new-label">promo</span>
                                    <span className="product-discount-label">- {promo}%</span>
                                </>
                                :
                                null               
                            }
                        </Link>
                    </div>

                    <div className="product-content">
                        <h4 className="title text-center">{title}</h4>
                        <div className="price text-center">
                            <Price promo={promo} price={price}></Price>
                        </div>

                        <ul className="action-product list-unstyled">
                            <li className="text-center">
                                <Link to={`/home/${id}`}>
                                    <div className="searching"><FaSearch/></div>                                    
                                </Link>
                            </li>
                            <li className="ml-4 text-center">
                                <div className="carting"><FaShoppingCart/></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}