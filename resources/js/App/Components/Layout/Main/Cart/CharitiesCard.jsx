import React from "react";
import {Card, CardImg,CardText,CardBody,CardLink,CardTitle, CardSubtitle,Button} from "reactstrap";
import "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBCardHeader, MDBBtn, MDBCardFooter, MDBCardGroup, MDBJumbotron} from 'mdbreact';
import { Link } from 'react-router-dom';
import { MDBNav,  MDBNavItem,   MDBView, MDBNavLink } from "mdbreact";

export default class CharitiesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.information);
        return (

        <>


                <div>


                    <MDBContainer>
                    <Card
                                style={{
                                    padding: "2rem",
                                    margin: "1rem",
                                    maxHeight: "600px",
                                    minWidth: "400px",
                                    backgroundColor: "#29f4cd"
                                }}>
                <MDBRow>
                <MDBCardHeader>
                    <MDBNav header>
                        <MDBCol md="6" className="mb-3">
                        <img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid z-depth-1" alt="" />
                        </MDBCol>
                        <CardBody min-width="400px">

                            <CardTitle>
                                <h4>{this.props.name}  </h4>
                            </CardTitle>


                            <CardSubtitle>
                                <h5>   {this.props.information}</h5>
                            </CardSubtitle>
                            <CardText>
                                {this.props.address}
                        </CardText>
                        </CardBody>
                        </MDBNav>
                    </MDBCardHeader>
                    </MDBRow>
                    </Card>
                    </MDBContainer>



                </div>

        </>
        );
    }
}
