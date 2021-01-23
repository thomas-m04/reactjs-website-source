import React, { Component } from 'react';
import '../assets/css/loginpage.css'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'

class LoginPage extends Component{
    state = {
        register: false,
        username: "",
        password: "",
        email: "",
        address: "",
        postcode: "",
        city: "",
    }
    handleOption = (e) => {
        if(e.target.value == "login"){
            console.log("login")
            this.setState({register:false})
        } else{
            console.log("register")
            this.setState({register:true})
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.register){
            if (this.state.userName != "" && this.state.password != "" && this.state.email != "" && this.state.address != "" && this.state.postcode != "" && this.state.city != ""){
                const userDetails = {
                    userName: this.state.userName,
                    userPassword: this.state.password,
                    userEmail: this.state.email,
                    userEmail: this.state.address,
                    userAddress: this.state.postcode,
                    userCity: this.state.city
                };
                axios.post('http://localhost:5000/register', {
                    body: JSON.stringify(userDetails),
                }).then(() => {
                    console.log()
                })
            } else {
                alert("A required field is missing.")
            }
        } else{ 
            if (this.state.userName != "" && this.state.password != "") {
                const userDetails = {
                    userName: this.state.username,
                    userPassword: this.state.password,
                };
                axios.post('http://localhost:5000/login', {
                    body: JSON.stringify(userDetails)
                }).then((response) => {
                    console.log(response)
                })
            } else {
                alert("A required field is missing.")
            }
        }
    }
    render(){
        return(
            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.Label>Login or Register</Form.Label>
                        <Form.Control as="select" onChange={this.handleOption}>
                            <option value="login">Login</option>
                            <option value="register">Register</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="username" onChange={this.handleChange}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control placeholder="Enter your username" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="password" onChange={this.handleChange}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Enter your password" />
                        </Form.Group>
                    </Form.Row>
                    {this.state.register && (
                        <div>
                            <Form.Group controlId="email" onChange={this.handleChange}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="address" onChange={this.handleChange}>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="postcode" onChange={this.handleChange}>
                                    <Form.Label>Postcode</Form.Label>
                                    <Form.Control placeholder="e.g. HU19 2AB" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="city" onChange={this.handleChange}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="Hull"/>
                                </Form.Group>
                            </Form.Row>
                        </div>
                        )
                    }
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </Form>
            </div>
        );
    };
}

export default LoginPage