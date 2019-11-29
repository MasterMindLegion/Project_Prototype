import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer, MDBCardHeader, MDBBtn, MDBCardFooter, MDBCardGroup, MDBJumbotron} from 'mdbreact';
import { Link } from 'react-router-dom';
import { MDBNav,  MDBNavItem,   MDBView, MDBNavLink } from "mdbreact";

export default class SellOn extends React.Component {

    render() {

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

                <MDBCardTitle><h2 className="indigo-text"><strong>Millions of shoppers can’t wait to see what you have in store</strong></h2></MDBCardTitle>
                <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam.</MDBCardText>
                </MDBCardBody>

                <MDBCardImage cascade className="center" style={{ width: '100rem', height: '20rem' }}
                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(11).jpg"
                  />
                <MDBCardBody cascade className="text-center">

                <h2 className="indigo-text"><strong>Choose your own path to success</strong></h2>
                <MDBCardText>Etsy has tools designed for every stage of your business’s growth—no matter how big your ambitions. Access more advanced tools with an optional monthly subscription package.</MDBCardText>

                </MDBCardBody>
                </MDBCard>
                </MDBCol>
                </MDBRow>


                  <MDBContainer>
                    <MDBCardGroup deck>
                        <MDBCard>
                        <MDBCardBody style={{  backgroundColor: "#29f4cd"}} >
                            <MDBCardTitle tag="h5">PLUS Account</MDBCardTitle>
                            <MDBCardText>
                            Everything you need to start, manage, and grow a creative business


                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter color="success-color">Seller protection</MDBCardFooter>
                        <MDBCardFooter small muted>
                        No additional monthly charge
                        </MDBCardFooter>
                        </MDBCard>
                        <MDBCard>
                        <MDBCardBody  style={{  backgroundColor: "#29f4cd"}}>
                            <MDBCardTitle tag="h5">PREMIUM Account</MDBCardTitle>
                            <MDBCardText>
                            This panel has supporting text below as a natural lead-in to
                            additional content.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter color="success-color">Secure transactions</MDBCardFooter>
                        <MDBCardFooter small muted>
                        CZK 231.70 a month
                        </MDBCardFooter>
                        </MDBCard>
                        <MDBCard>
                        <MDBCardBody  style={{  backgroundColor: "#29f4cd"}}>
                            <MDBCardTitle tag="h5">PRO Account</MDBCardTitle>
                            <MDBCardText>
                            This is a wider panel with supporting text below as a natural
                            lead-in to additio
                            content than the first to show that equal height action.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter color="success-color">Automatic deposits</MDBCardFooter>
                        <MDBCardFooter small muted>
                        Plus so much more...
                        </MDBCardFooter>
                        </MDBCard>

                    </MDBCardGroup>

                    </MDBContainer>

    <MDBContainer>
  <MDBCard className="text-center">
      <MDBCardHeader>
      <MDBNav header>
      </MDBNav>
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle><h3 className="indigo-text"><strong>Simple, transparent, secure</strong></h3></MDBCardTitle>
      <MDBCardText>
      Join a creative marketplace where more than 33 million buyers around the world shop for unique items.   <Link disableto="#"> Learn more... </Link>
      </MDBCardText>

    </MDBCardBody>
  </MDBCard>
</MDBContainer>


     <MDBContainer>
  <MDBCard className="text-center">
    <MDBCardHeader>
      <MDBNav header>
      </MDBNav>
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>What Can You Sell On Eshop</MDBCardTitle>
      <MDBCardText>
      Etsy is a marketplace where millions of people around the world connect to make, sell, and buy unique goods. You can sell handmade goods, vintage items and craft supplies on Etsy. <Link disabled to="#">
            Learn more...
          </Link>
      </MDBCardText>
      <MDBCardText><h4 className="indigo-text"><strong>   Start Selling Today</strong></h4>

        </MDBCardText>
      <MDBBtn color="primary"> <h5> Open Your EShop </h5></MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>

<MDBContainer >
  <MDBCardGroup deck>
    <MDBCard>
      <MDBCardBody style={{  backgroundColor: "#29f4cd"}}>
        <MDBCardTitle tag="h5">Authentic Craft Supplies</MDBCardTitle>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg" waves />
        <MDBCardText>
          This is a wider panel with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </MDBCardText>
        <MDBCardText small muted>
        <Link disabled to="#">
            Learn more...
          </Link>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>

    <MDBCard >
    <MDBCardBody style={{  backgroundColor: "#29f4cd"}}>
                    <MDBCardTitle tag="h5">Vintage </MDBCardTitle>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"  />
                    <MDBCardText>
                    This is a wider panel with supporting text below as a natural
                    lead-in to additional content. This panel has even longer
                    content than the first to show that equal height action.
                    </MDBCardText>
                    <MDBCardText small muted>
                    <Link disabled to="#">
            Learn more...
          </Link>
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>


                <MDBCard>
                <MDBCardBody style={{  backgroundColor: "#29f4cd"}}>
                    <MDBCardTitle tag="h5">Handmade </MDBCardTitle>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg" waves />
                    <MDBCardText>
                    This is a wider panel with supporting text below as a natural
                    lead-in to additional content. This panel has even longer
                    content than the first to show that equal height action.
                    </MDBCardText>
                    <MDBCardText small muted>
                    <Link disabled to="#">
            Learn more...
          </Link>
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
            </MDBContainer>

                <MDBContainer>
            <MDBJumbotron>
                <h2 className="h1-responsive">Seller Stories</h2>
                <p className="lead">
                We think Etsy is pretty great but don’t take our word for it. Hear stories from our sellers about how Etsy has made a difference for them.
                </p>
                <hr className="my-2" />
                <p>
                It uses utility classNamees for typography and spacing to space
                content out within the larger MDBContainer.
                </p>
                <MDBBtn color="primary" size="lg">
                Tell Us About Your Story
                </MDBBtn>
                <MDBNavItem>
        <Link disabled to="/"> Search More Stories</Link>
        </MDBNavItem>

                <MDBRow className="mb-4">
    <MDBCol sm="6">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>VinTage & Handmade  </MDBCardTitle>
          <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(7)-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          <MDBCardText>
          Etsy has been an integral part of my growth from hobbyist to full-time screenprinter and business owner. My designs would not have fallen into so many hands without Etsy’s wide reach.
          </MDBCardText>
          <MDBBtn color="primary">Contact Seller</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="6">
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Violet Field Treatment</MDBCardTitle>
          <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(1)2-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          <MDBCardText>
          Thanks to Etsy, my small hobby has exploded into a multi-faceted line of original creations with clients around the world.
          </MDBCardText>
          <MDBBtn color="primary">Contact Seller </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
            </MDBJumbotron>
            </MDBContainer>




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
      <MDBCardText><h5 className="indigo-text"><strong>   What do I need to do to create a shop?</strong></h5>
        </MDBCardText>
        <MDBCardText>
It's easy to set up a shop on Etsy. Create an Etsy account (if you don’t already have one), set your shop location and currency, choose a shop name, create a listing, set a payment method (how you want to be paid), and finally set a billing method (how you want to pay your Etsy fees).
      </MDBCardText>
      <MDBCardText><h5 className="indigo-text"><strong>   How do I get paid?</strong></h5>
        </MDBCardText>
        <MDBCardText>
        Etsy provides a marketplace for crafters, artists and collectors to sell their handmade creations, vintage goods (at least 20 years old), and both handmade and non-handmade crafting supplies.
      </MDBCardText>

        <MDBCardText><h5 className="indigo-text"><strong> How does Etsy protect sellers?</strong></h5>
            </MDBCardText>
            <MDBCardText>
            No, a credit or debit card is not required to create a shop. To be verified as a seller you have the choice to use either a credit card or to register via PayPal. You will not incur any charges until you open your shop and publish your listings.
        </MDBCardText>

        <MDBBtn color="primary"> <h5> Open Your EShop </h5></MDBBtn>
        </MDBCardBody>
    </MDBCard>
    </MDBContainer>




                </>
        )
    }
}
