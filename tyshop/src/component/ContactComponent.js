import React, { Component } from 'react';
// UN 'FormGroup' REPRESENTE UNE LIGNE DU FORMULAIRE
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap'
import Title from './TitleComponent';

export default class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            object : '',
            telnum : '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname : false,
                lastname : false,
                email : false,
                object : false,
                telnum : false,
                message: false,
            }

        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.validateText = this.validateText.bind(this)
        this.validate = this.validate.bind(this)

    }

    handleInputChange(e){
        const target = e.target
        const name = target.name

        const value = target.type === 'checkbox' ? target.checked : target.value

        this.setState({[name] : value})
    }
    // INTERVIENT LORSQUE UN ELEMENT PERD LE FOCUS 
    handleBlur = (field) =>(e) =>{
        this.setState({
            touched : {...this.state.touched,[field] : true}
        })
    }

    validateText = (min,max,touched,field) => {
        var error = ''

        if(touched && field.length < min)
            error = 'au moins'+min+' caractères svp!'
        else if(touched && field.length > max)
            error = 'au plus '+max+' caractères svp!'
        else if(touched)
            error = 'ok'
        return error
    }

    validate = (firstname,lastname,email,object,telnum,message) => {
        var error = {
            firstname : '',
            lastname : '',
            email : '',
            object : '',
            telnum : '',
            message : ''
        }

        error.firstname = this.validateText(3,10,this.state.touched.firstname,firstname)
        error.lastname = this.validateText(3,10,this.state.touched.lastname,lastname)
        error.object = this.validateText(5,20,this.state.touched.object,object)
        error.message = this.validateText(3,10,this.state.touched.message,message)

        const regNum = /^[0-9]{9}$/
        const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{4,}\.[a-zA-Z]{2,}$/

        if(this.state.touched.telnum && !regNum.test(telnum))
            error.telnum = "le numéro c'est 9 caractères"
        else if(this.state.touched.telnum)
            error.telnum = 'ok'

        if(this.state.touched.email && !regEmail.test(email))
        error.email = "l'email est invalide"
        else if(this.state.touched.email)
            error.email = 'ok'


        return error




    }

    handleSubmit(e){
        e.preventDefault()
        
        alert(this.state.firstname)
    }



  render() {

    const errors = this.validate(this.state.firstname,this.state.lastname,this.state.email,this.state.object,this.state.telnum,this.state.message)

    return (
      <div className='container'> 
        <Title name='contactez' title='nous' />
        <div className='row'>
            <div className='col-12 col-md-9'>
                <Form onSubmit = {this.handleSubmit} id='contact-form'>
                    <FormGroup row>
                        <Label htmlFor="firstname" md={2}>Prenom</Label>
                        <Col md={10}>
                            <Input type="text" id="firstname" name="firstname"
                                placeholder="prenom"
                                value={this.state.firstname}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('firstname')}
                                valid = {errors.firstname === 'ok'}
                                invalid = {errors.firstname.length > 3}
                            />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="lastname" md={2}>Nom</Label>
                        <Col md={10}>
                            <Input type="text" id="lastname" name="lastname"
                                placeholder="nom"
                                value={this.state.lastname}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('lastname')}
                                valid = {errors.lastname === 'ok'}
                                invalid = {errors.lastname.length > 3}
                            />
                            <FormFeedback>{errors.lastname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="telnum" md={2}>Tel</Label>
                        <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum"
                                placeholder="Tel. number"
                                value={this.state.telnum}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('telnum')}
                                valid = {errors.telnum === 'ok'}
                                invalid = {errors.telnum.length > 3}
                                
                            />
                            <FormFeedback>{errors.telnum}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="object" md={2}>objet</Label>
                        <Col md={10}>
                            <Input type="text" id="object" name="object"
                                placeholder="objet"
                                value={this.state.object}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('object')}
                                valid = {errors.object === 'ok'}
                                invalid = {errors.object.length > 3}
                            />
                            <FormFeedback>{errors.object}</FormFeedback>                                
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}>Email</Label>
                        <Col md={10}>
                            <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('email')}
                                valid = {errors.email === 'ok'}
                                invalid = {errors.email.length > 3}
                                
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        checked={this.state.agree}
                                        onChange={this.handleInputChange}
                                     /> {' '}
                                    <strong>pouvons nous vous contactez?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Input type="select" name="contactType"
                                    value={this.state.contactType}
                                    onChange={this.handleInputChange}
                            >
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md={2}>Votre message</Label>
                        <Col md={10}>
                            <Input type="textarea" id="message" name="message"
                                rows="12"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                onBlur={this.handleBlur('message')}
                                valid = {errors.message === 'ok'}
                                invalid = {errors.message.length > 3}
                            />
                            <FormFeedback>{errors.message}</FormFeedback>                            
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 2}}>
                            <Button outline className='btn-perso-1' type="submit">
                                Envoyer
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
      </div>
    );
  }
}
