import React from 'react'
import {Navbar,Nav,NavbarBrand,Collapse,NavItem,Button,Form,FormGroup,Input,Label} from 'reactstrap'
import { NavbarToggler } from 'reactstrap'
import {FaSearch,FaShoppingCart,FaUser} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import BeforeHeader from './BeforeHeaderComponent';

class Header extends React.Component{
    render(){
        return(
            <>
                <BeforeHeader></BeforeHeader>
                {/* Le menu de navigation doit s'ouvrir dès que l'écran dépasse ~ 960 px.
                    La popriété sticky top permet de fixer en hauteur un composant (içi Navbar).

                 */}
                 

                <Navbar light expand="lg" id='myNavbar' className='align-items-center sticky-top  navbar'>
                    <div className='container'>
                                               
                        <NavbarBrand id='navBarBrand'>
                            <NavLink to='home'>
                                <img  src='/img/logo.png' height='50' width='200'  alt='tyshop 237'></img>
                            </NavLink>  
                        </NavbarBrand>
                        
                        <NavbarToggler></NavbarToggler>
                        
                        <Collapse navbar>
                            <Nav navbar id="myNavbar1">
                                <NavItem id='productField'>
                                    <NavLink to='home'>Products</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink to='contact'>Contact Us</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar className="myNavbar3">
                                <NavItem>
                                    <Form>
                                        <FormGroup id='myNavbar3'>
                                            <Input type='text' id='searchbox' name='searchbox' placeholder='search...'></Input>
                                            <Button id='searchButton'><FaSearch/></Button>
                                        </FormGroup>
                                    </Form>
                                </NavItem>
                            </Nav>

                        <Nav navbar className='largeMyNavbar2 lg'>
                                <NavItem>
                                    <Button outline className='btn-perso-1'>
                                        <NavLink to='cart'>Mon panier <FaShoppingCart/></NavLink>
                                    </Button>
                                </NavItem>
                                <NavItem id='loginButton'>
                                    <Button outline className='btn-perso-1'>Login <FaUser/></Button>
                                </NavItem>                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </>
        
        )
    }
}

export default Header