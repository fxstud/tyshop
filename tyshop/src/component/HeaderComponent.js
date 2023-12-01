import React from 'react'
import {Navbar,Nav,NavbarBrand,Collapse,NavItem,Button,Form,FormGroup,Input,Label,Modal,ModalBody,ModalHeader} from 'reactstrap'
import { NavbarToggler } from 'reactstrap'
import {FaSearch,FaShoppingCart,FaUser} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import BeforeHeader from './BeforeHeaderComponent';
import NavSmallScreen from './NavSmallScreen';
import Panier from './PanierComponent';

class Header extends React.Component{

    constructor(props){
        super(props)
        
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        }
    }

    toggleNav(){
        this.setState({isNavOpen : !this.state.isNavOpen})
    }

    toggleModal(){
        this.setState({isModalOpen : !this.state.isModalOpen})
    }
    handleLogin(e){
        e.preventDefault()
        this.toggleModal()
        alert("username : " + this.username.value + "\npassword : "+ this.password.value+"\nremember : "+this.remember.checked)

    }


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
                        
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        
                        <Collapse navbar isOpen = {this.state.isNavOpen} >
                            <Nav navbar id="myNavbar1" className='mr-lg-3'>
                                <NavItem id='productField'>
                                    <NavLink to='home'>Products</NavLink>
                                </NavItem>

                                <NavItem className='mr-2 mt-2 mt-lg-0'>
                                    <NavLink to='contact'>Contact Us</NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar className="myNavbar3 d-none d-lg-block">
                                <NavItem>
                                    <Form>
                                        <FormGroup id='myNavbar3'>
                                            <Input type='text' id='searchbox' name='searchbox' placeholder='search...'></Input>
                                            <Button id='searchButton'><FaSearch/></Button>
                                        </FormGroup>
                                    </Form>
                                </NavItem>
                            </Nav>

                        <Nav navbar className='largeMyNavbar2 ml-0 ml-lg-auto align-items-lg-center'>
                                <NavItem className='mr-2 d-none d-lg-block'>
                                    <NavLink to={'/cart'}>
                                            <Panier mobile={false} nbProduit = {this.props.nbProduit}></Panier>
                                    </NavLink>
                                </NavItem>
                                <NavItem id='loginButton' className='mr-2 d-none d-lg-block'>
                                    <Button outline className='btn-perso-1' onClick={this.toggleModal}>Login <FaUser/></Button>
                                </NavItem>                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <NavSmallScreen toggleModal = {this.toggleModal} nbProduit = {this.props.nbProduit}></NavSmallScreen>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            {/*on use innerRef au lieu de Ref car reacstrap utilise deja ref */}
                                <FormGroup>
                                    <Label htmlFor="username">Username</Label>
                                    <Input type="text" id="username" name="username"
                                        innerRef={(input) => this.username = input} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                        innerRef={(input) => this.password = input}  />
                                </FormGroup>
                                <FormGroup className="mx-2" check>
                                    <Label check>                                        
                                        <Input  type="checkbox" name="remember" id="formId"
                                        innerRef={(input) => this.remember = input}  />     
                                        Remember me
                                    </Label>
                                </FormGroup>
                                <Button outline type="submit" value="submit" className="btn-perso-1">Login</Button>
                            </Form>
                    </ModalBody>
                </Modal>
                
            </>
        
        )
    }
}

export default Header