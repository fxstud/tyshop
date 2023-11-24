import { Button } from "reactstrap";
import React from "react";

export default function CartItem(props){
    var {id,title,img,price,count,promo} = props.produit
    promo === 0 ? price = price : price = price*(100-promo)/100

    return(
        <div className="container-fluid text-center">
            <div className="row mx-1 cartItem" key={id}>
                <div className="col-10 col-lg-2 mx-auto">
                    <img className = 'img-fluid' width='100' src={img}></img>
                </div>
                <div className="col-10 col-lg-2 mx-auto my-auto">
                    <p className="text-uppercase">{title}</p>
                </div>                
                <div className="col-10 col-lg-2 mx-auto my-auto">
                    <div className="font-weight-bold">{price}</div>
                </div>


                <div className="col-10 col-lg-2 mx-auto my-lg-auto">
                    <Button className="btn btn-primary outline buttonCart">
                        <span className="fa fa-plus" onClick={() => props.addQuantity(id)}></span>
                    </Button>
                    <Button className="btn btn-primary outline buttonCart buttonCart-middle">
                        <span>{count}</span>
                    </Button>
                    <Button className="btn btn-primary outline buttonCart ">
                        <span className="fa fa-minus" onClick={() => props.removeQuantity(id)}></span>
                    </Button>
                </div>

                <div className="col-10 col-lg-2 mx-auto my-3">
                    <Button className="btn btn-primary outline buttonCart buttonCartDelete ">
                        <span className="fa fa-times m-auto" onClick={() => props.removeToCart(id)}></span>
                    </Button>
                </div>

                <div className="col-10 col-lg-2 mx-auto my-auto">
                    <p className="font-weight-bold">{count*price}</p>
                </div>     
            </div>
        </div>
    )
}