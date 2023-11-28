import React from 'react'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

function CartTotal(props){
    return(
        <div className='row totalRow mt-lg-5'>
            <div className='col-12 col-md-4'>
                <p className='font-capitalize font-weight-bold text-total text-center'>
                    total : <strong>{props.total} €</strong>
                </p>
                <p className='text-center'><span>*</span>{' '}Les frais d'expédition sont non inclus pour le moment</p>
            </div>

            <div className='col-12 col-md-8 my-0'>
                <div className='row'>
                    <div className='col-6 d-flex justify-content-center'>
                        <Link to='/home'>
                            <Button className='totalButton mx-auto'>poursuivre mes achats</Button>
                        </Link>
                    </div>
                    <div className='col-6 d-flex justify-content-center'>
                        <Link to='/home'>
                            <Button className='totalButton mx-auto'>valider ma commande</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartTotal