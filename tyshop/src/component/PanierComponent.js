import React from 'react'
import {Button} from 'reactstrap'
import {FaSearch,FaShoppingCart,FaUser} from "react-icons/fa";

export default class Panier extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            visible : false
        }
    }

    // LIFECYCLE UTILISE LORSQUE LE PROPS DU COMPOSANT CHANGE
    // EN EFFET LE PROPS "nbProduit" CHANGE SOUVENT DE VALEUR
    // LE PROPS EN PARAM "prevProps" EST LE PROPS D AVANT
    componentDidUpdate(prevProps){
        if(this.props.nbProduit !== prevProps.nbProduit){
            if(this.props.nbProduit >= 1)
                this.setState({visible : true})
            else
                this.setState({visible : false})
        }
        // CONTIENT UN TABLEAU DES ELEMENTS CONTENANT LA CLASSNAME 'panierCount'
        var elem = document.getElementsByClassName('panierCount')

        elem[0].style.display = this.state.visible ? 'inline-block' : 'none'
        elem[1].style.display = this.state.visible ? 'inline-block' : 'none'
    }

    render(){
        if(!this.props.mobile){
            return(
                <Button outline className='btn-perso-1'>  
                    Mon panier                         
                    <i class="fas fa-shopping-cart fa-lg">
                        <p className='panierCount'>{this.props.nbProduit}</p>
                    </i>
                    
                </Button>
            )           
        }
        else{
            return(
                <i class="fas fa-shopping-cart fa-lg" style={{fontSize : '25px'}}>
                    <p className='panierCount'>{this.props.nbProduit}</p>
                </i>
            )
        }
    }
}