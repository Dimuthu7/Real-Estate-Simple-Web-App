import React, { Component } from "react";
import './Register.css';
import axios from 'axios';
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import backImg from '../Login/login.png';

export default class Login extends Component {
    state = {
        redirect: '',
        isLoading: false,
        name: '',
        address: '',
        email: '',
        mobile: '',
        password: '',
        validate: false,
    };

    //Handle change event for all input field in login form
    onChangeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Handle submit button click event
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.fnValidateRegister();
        if (this.state.validate) {
            this.setState({ isLoading: true })
            //send POST request to the API for insert user details.
            axios({
                method: 'post',
                url: "http://localhost:8080/api/users/register",
                data: {
                    username: this.state.name.toString(),
                    address: this.state.address.toString(),
                    email: this.state.email.toString(),
                    mobile: this.state.mobile.toString(),
                    password: this.state.password.toString()
                }
            }).then(res => {
                this.setState({
                    isLoading: false,
                    name: '',
                    address: '',
                    email: '',
                    mobile: '',
                    password: ''
                })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Successfully SignUp!.`,
                    html: `Your ID: ( ${res.data._id} )`,
                    showConfirmButton: false,
                    timer: 2000
                })
                this.setState({
                    redirect: "/login"
                })
            }).catch(err => {
                this.setState({
                    isLoading: false,
                })
                if (err.response.status === 404) {
                    Swal.fire({
                        icon: "error",
                        title: "Something went wrong!",
                        text: err.response.data
                    }).then(res => {
                        this.setState({
                            email: '',
                        })
                    })
                }
            })
        }

    }

    //validate add user
    fnValidateRegister = () => {
        let mobileNo = document.getElementById('mobileNo').value;
        if (mobileNo.length === 10) {
            this.setState({
                validate: true,
                isLoading: false
            });
        }
        else {
            this.setState({
                validate: false,
                isLoading: false,
            });
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid phone number!',
            })
        }
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <>
                <div className={this.state.isLoading ? "blur-form" : ""}>
                    <div style={{
                        width: "100%",
                        height: "100vh",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${backImg})`,
                    }}>
                        <div className={this.state.isLoading ? "circle" : ""}>
                            <div className={this.state.isLoading ? "wave-loading" : ""}></div>
                        </div>
                        <div className="wrapper fadeInDown">

                            <div id="RegiBody" >

                                <h2> Sign Up </h2><br /><br />
                                <p className="login-text">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-user-plus"></i>
                                    </span>
                                </p>
                                <form onSubmit={this.onSubmitHandler}>
                                    <input name="name" onChange={this.onChangeHandle} type="text" className="login-username" required={true}
                                        placeholder="Name" value={this.state.name} />
                                    <input name="address" onChange={this.onChangeHandle} type="text" className="login-username" required={true}
                                        placeholder="Address" value={this.state.address} />
                                    <input name="email" onChange={this.onChangeHandle} type="email" className="login-username" required={true}
                                        placeholder="Email" value={this.state.email} />
                                    <input name="mobile" onChange={this.onChangeHandle} type="number" className="login-username" required={true}
                                        placeholder="Mobile Number" value={this.state.mobile} id="mobileNo" />
                                    <input name="password" onChange={this.onChangeHandle} type="password" className="login-password" required={true}
                                        placeholder="Password" value={this.state.password} />

                                    <input type="submit" name="Login" value="Register" className="login-submit" style={{ marginTop: "10%" }} />
                                    <br />
                                    <a href="/login" style={{ marginBottom: 10 }}> Sign In</a>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </>

        );
    }
}