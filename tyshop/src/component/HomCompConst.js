import React from 'react'
import {connect} from 'react-redux'
import Home from './HomeComponent'

const mapStateToProps = state =>{
    return{
        lesProduits : state.Products
    }
}

class HomCompConst extends React.Component{
    render(){
        return(
            <Home lesProduits = {this.props.lesProduits.lesProduits}></Home>
        )
    }   
}

export default connect(mapStateToProps)(HomCompConst)