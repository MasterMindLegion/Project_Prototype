import React from 'react';

import {
    Card,Container,CardImg,CardText,CardBody,CardLink, Button,CardTitle, CardSubtitle,Col, Row, CardDeck
} from "reactstrap";
import { Link } from 'react-router-dom';

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaCcVisa } from "react-icons/fa";

import { FaCcMastercard } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa';
import { FaGoogleWallet } from 'react-icons/fa';

import { MDBCard,MDBCardHeader,MDBNav, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

export default class Footer extends React.Component {
  render(){
    return (
        <>
       
        <footer className="main-footer"  style={{  backgroundColor: "#29f4cd"}} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">

                     <MDBCardHeader style={{  backgroundColor: "#29f4cd"}} >
                        <MDBNav header>

                        </MDBNav>
                    </MDBCardHeader>
                    
                        <h4 className="h6">Follow Us On</h4>
                        {/* <Link to="/app/user">Acount Settings</Link> */}
                       <Link to="/app/user">
                       <h2>
                            <FaTwitter />  <FaFacebook /> <FaInstagram />  <FaYoutube />
                       </h2>
                       </Link>

                       <h4 className="h6">More About Our Payment Services</h4>
                        <h2 color="success">
                            <FaCcVisa/> <FaCcMastercard /> <FaApplePay /><FaGoogleWallet />
                        </h2>
                        <hr />
                        <h4 className="h6">Join Our Monthly Newsletter</h4>
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" />
                                <div className="input-group-append">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                    >
                                        <i className="fa fa-send"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3">

                    <MDBCardHeader style={{  backgroundColor: "#29f4cd"}} >
                        <MDBNav header>

                        </MDBNav>
                    </MDBCardHeader>
                        <h4 className="h6">About Us</h4>
                        <ul className="list-unstyled footer-blog-list">
                            <li className="d-flex align-items-center">

                                <div className="text">
                                    <h5 className="mb-0">
                                        {" "}
                                        <a href="post.html">About our E-Shop</a>
                                    </h5>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">

                                <div className="text">
                                    <h5 className="mb-0">
                                        {" "}
                                        <a href="post.html">Help Center</a>
                                    </h5>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">

                                <div className="text">
                                    <h5 className="mb-0">
                                        {" "}
                                        <a href="post.html">Sitemap</a>
                                    </h5>
                                </div>
                            </li>
                        </ul>
                        <hr className="d-block d-lg-none"></hr>
                    </div>
                    <div className="col-lg-3">

                    <MDBCardHeader style={{  backgroundColor: "#29f4cd"}} >
                        <MDBNav header>

                        </MDBNav>
                    </MDBCardHeader>
                        <h4 className="h6">Buy on E-Shop</h4>
                        <ul className="list-unstyled footer-blog-list">
                            <li className="d-flex align-items-center">

                                <div className="text">
                                    <h5 className="mb-0">
                                        {" "}
                                        <a href="post.html">All Categories</a>
                                    </h5>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="text">
                                    <h5 className="mb-0">
                                        {" "}
                                        <a href="post.html">Ready to Ship</a>
                                    </h5>
                                </div>
                            </li>
                            <li className="d-flex align-items-center">
                                <div className="text">
                                    <h5 className="mb-0">
                                        {" "}
                                        <a href="post.html">
                                            Request for Quotation
                                        </a>
                                    </h5>
                                </div>
                            </li>
                        </ul>
                        <hr className="d-block d-lg-none" />
                    </div>
                    <div className="col-lg-3">

                    <MDBCardHeader style={{  backgroundColor: "#29f4cd"}} >
                        <MDBNav header>

                        </MDBNav>
                    </MDBCardHeader>
                        <h4 className="h6">Contact</h4>
                        <p className="text-uppercase">
                            <strong>E-SHOP PRAHA </strong>
                            <br />
                            Taborska 4 <br />
                            Praha 6 <br />
                            166 36 <br />
                            <strong>Czech Republic</strong>
                        </p>
                        {/* <a
                            href="/app/checkout"
                            className="btn btn-template-main"
                        >
                            Go to contact page
                        </a> */}
                        <hr className="d-block d-lg-none" />
                    </div>
                    <div className="col-lg-3">
                        <ul className="list-inline photo-stream">
                            <li className="list-inline-item">
                                <a href="#"></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#"></a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
  }
}
