import React from "react";

export default function CartColumns(){
    return(
        <div className="container-fluid text-center d-none d-lg-block py-2">
            <div className="row">
                <div className="col-2 mx-auto">
                    <div className="text-uppercase">produit</div>
                </div>
                <div className="col-2 mx-auto">
                    <div className="text-uppercase">nom du produit</div>
                </div>
                <div className="col-2 mx-auto">
                    <div className="text-uppercase">p. unitaire</div>
                </div>
                <div className="col-2 mx-auto">
                    <div className="text-uppercase">quantite</div>
                </div>
                <div className="col-2 mx-auto">
                    <div className="text-uppercase">supprimer</div>
                </div>
                <div className="col-2 mx-auto">
                    <div className="text-uppercase">p. total</div>
                </div>     
            </div>
        </div>
    )
}