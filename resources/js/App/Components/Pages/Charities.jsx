import React from "react";
// import { Jumbotron } from 'reactstrap';
import { Card, Container, Row, Col } from "reactstrap";

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBCardHeader, MDBBtn, MDBCardFooter, MDBCardGroup, MDBJumbotron} from 'mdbreact';
import { Link } from 'react-router-dom';
import { MDBNav,  MDBNavItem,   MDBView, MDBNavLink } from "mdbreact";


import CharitiesCard from "../Layout/Main/Cart/CharitiesCard.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";

export default class Charities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
render() {
const CharitiesCards = this.props.charities.map((charity, index) => {
                return (

                    <>

                  

                <Col key={`product-${charity.name}-${index}`}>
                    <CharitiesCard
                        name={charity.Name}
                        address={charity.Char_address}
                        information={charity.Char_information}
                        id={charity.id}
                        
                    />
                </Col>
                
                </>
            );
        });
            return (
                <>

                <MDBCardHeader>
                    <MDBNav header>
                    </MDBNav>
                  </MDBCardHeader>
                              <MDBRow>
                              <MDBCol style={{ maxWidth: "100rem" }}>
                              <MDBCard reverse>
                              <MDBCardBody cascade className="text-center">
                              <MDBCardBody cascade className="text-center">
              
                        <h2 className="indigo-text"><strong>Starting a charity shop</strong></h2>
                        <MDBCardText>
            Setting up and running a charity shop is a complex undertaking, and one which should not be entered into lightly: they are a good method of raising awareness and funds for a charity, but not a simple one. You will find that you are faced with the same issues as someone running a small business: security, health and safety, trading law, in addition to problems specific to the sector, such as sourcing stock and your volunteer workforce. Step-by-step guidance follows below: there is more detailed information in the guidance on the KnowHow NonProfit website.</MDBCardText>

              </MDBCardBody>
                              <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                              rem aperiam.</MDBCardText>

                    <MDBCardHeader>
                        <MDBNav header>
                            </MDBNav>
                        </MDBCardHeader>
                              </MDBCardBody>
              
                              {/* <MDBCardImage cascade className="center" style={{ width: '100rem', height: '20rem' }}
                               src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                                /> */}
                             <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Others/documentation/img%20(141)-mini.jpg"
                  alt="Third slide"
                />
                              </MDBCard>
                              </MDBCol>
                              </MDBRow>

                              <MDBCardHeader>
                    <MDBNav header>
                    </MDBNav>
                  </MDBCardHeader>

                              <MDBContainer>
                    <MDBCardGroup deck>
                        <MDBCard>
                        <MDBCardBody style={{  backgroundColor: "#29f4cd"}} >
                            <MDBCardTitle tag="h5">Peace of mind</MDBCardTitle>
                            <MDBCardText>
                            Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
                            </MDBCardText>
                        </MDBCardBody>
                      
                        <MDBCardFooter small muted>
                      
                        </MDBCardFooter>
                        </MDBCard>
                        <MDBCard>
                        <MDBCardBody  style={{  backgroundColor: "#29f4cd"}}>
                            <MDBCardTitle tag="h5">Support independent creatorst</MDBCardTitle>
                            <MDBCardText>
                            There’s no  warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter color="success-color"></MDBCardFooter>
                       
                        </MDBCard>
                        <MDBCard>
                        <MDBCardBody  style={{  backgroundColor: "#29f4cd"}}>
                            <MDBCardTitle tag="h5">A one-of-a-kind community</MDBCardTitle>
                            <MDBCardText>
                                                    
                                                    
                        On our online marketplace, where people come together to make, sell, buy, and collect unique items.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter color="success-color"></MDBCardFooter>
                        
                        </MDBCard>

                    </MDBCardGroup>

                    </MDBContainer>


                   
                    <MDBCard className="text-center">
              
              <h2 className="indigo-text"><strong>Our Charities - Become a Member!</strong></h2>
          
                              <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                              rem aperiam.</MDBCardText>
                        </MDBCard>
                        <MDBCardHeader>
                    <MDBNav header>
                    </MDBNav>
                  </MDBCardHeader>

        <p>{CharitiesCards}</p>





                <MDBContainer>
        <MDBCard className="text-center">
            <MDBCardHeader>
            <MDBNav header>
            </MDBNav>
            </MDBCardHeader>
            <MDBCardBody>
            <MDBCardTitle><strong> Frequently Asked Questions </strong></MDBCardTitle>
            <MDBCardText>
            Here are some common questions about selling on Us.
            </MDBCardText>
            <MDBCardText><h5 className="indigo-text"><strong>   What do I need to do to create a Charity shop?</strong></h5>
                </MDBCardText>
                <MDBCardText>
        It's easy to set up a shop on Etsy. Create an Etsy account (if you don’t already have one), set your shop location and currency, choose a shop name, create a listing, set a payment method (how you want to be paid), and finally set a billing method (how you want to pay your Etsy fees).
            </MDBCardText>
            <MDBCardText><h5 className="indigo-text"><strong>   How do I get paid as a Charity Member?</strong></h5>
                </MDBCardText>
                <MDBCardText>
                Etsy provides a marketplace for crafters, artists and collectors to sell their handmade creations, vintage goods (at least 20 years old), and both handmade and non-handmade crafting supplies.
            </MDBCardText>

                <MDBCardText><h5 className="indigo-text"><strong> How do we protect our  sellers?</strong></h5>
                    </MDBCardText>
                    <MDBCardText>
                    No, a credit or debit card is not required to create a shop. To be verified as a seller you have the choice to use either a credit card or to register via PayPal. You will not incur any charges until you open your shop and publish your listings.
                </MDBCardText>

                <MDBBtn color="primary"> <h5> Open Your ECharity </h5></MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBContainer>
        </>
    )
    }

}