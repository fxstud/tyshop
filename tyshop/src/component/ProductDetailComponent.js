import React from 'react'
import {Link,useParams} from 'react-router-dom'
import {Button,Card,CardBody,CardImg,CardHeader,CardText,CardTitle,Row,Col} from 'reactstrap'

export default function ProductDetail(props){

    if(props.produit != null){
        const {title,img,price,inCart,info} = props.produit
        return(
            <div className='container'>
                <Row>
                    <Col sm='12' md='6'>
                        <Card className='my-4'>
                            <CardImg src={img} top width='75%' alt={title}></CardImg>
                            <CardBody>
                                <CardTitle>Description</CardTitle>
                                <CardText>{info}</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm='12' md={{size : 4,offset : 2}}>
                        <Card className='my-4'>
                            <CardHeader>
                                <h2 className='ArticleLibele'>{title}</h2>
                            </CardHeader>

                            <CardBody>
                                <CardText>
                                    <h4 className='ArticleLibele'>
                                        <strong>prix : {price} €</strong>
                                    </h4>    
                                </CardText>

                                <div className='d-flex justify-content-center'>
                                    <Button outline className='btn-perso-1' onClick={() => {inCart ? console.log("incart") : props.addToCart(props.produit)}}>Acheter</Button>
                                    <Link to={'/home'}>
                                        <Button outline className='ml-5 btn-perso-1' >Retourner</Button>
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

    else{
        return(
            <div className='container'>
                <h3>nul from detail</h3>
            </div>
        )
    }

}


