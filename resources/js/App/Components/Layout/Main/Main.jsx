import React from "react";
// import { Jumbotron } from 'reactstrap';
import {
    Card,
    Container,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink
} from "reactstrap";
import ProductCard from "./Cart/ProductCard.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import CharitiesCard from "./Cart/CharitiesCard.jsx";
import Charities from "../../Pages/Charities.jsx";
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            isLoaded: false,
            items: null,
            all_item: [],
            paginationData: null,
            all_item: [
            ],
            numberOfDisplayedItems: 4,
            loadMoreNumberOfDisplayedItems: 2,
            
    }
    }
     handleClick = () => {
         this.setState({numberOfDisplayedItems: this.state.numberOfDisplayedItems + this.state.loadMoreNumberOfDisplayedItems })
 }

    render() {  
        let count = 0;
        const productCards = this.props.items.map((x, index) => {
            count ++;
            if (count <= this.state.numberOfDisplayedItems) {
                return (
                    <Col key={`product-${x.item_name}-${index}`}>
                       <ProductCard
                            id = {x.id}
                            name={x.item_name}
                            item_img={x.item_img}
                            price={x.price_per_item}
                            description={x.description}
                            addItemToCart={this.props.addItemToCart}
                        />
                    </Col>
                );
            }
        });
         const CharitiesCards = this.props.charities.map((charity, index) => {
             if (index < 2){
             return (
                 <Col key={`product-${charity.name}-${index}`}>
                     <CharitiesCard
                        name={charity.Name}
                        address={charity.Char_address}
                        information={charity.Char_information}
                         id={charity.id}
                     />
                 </Col>
         );}
         });
        return (
            <>
                <div>
                    <Container
                        fluid
                        className="body-max-width  w-100"
                        style={{ padding: "4rem", textAlign: "center", backgroundColor: "#29f4cd", }}
                    >
                        <Row>
                            <Col className="text-align-center py-2">
                                <h1>Look What Local Charities Have to Offer</h1>
                            </Col>
                        </Row>
                        <Row style={{ padding: "1em" }}>
                            <Col md="4">
                                <h3>
                                    <strong>Unique everything</strong>
                                </h3>
                                <p>
                                    We have millions of one-of-a-kind items, so
                                    you can find whatever you need.
                                </p>
                            </Col>
                            <Col md="4">
                                <h3>
                                    <strong>Independent sellers</strong>
                                </h3>
                                <p>
                                    We make it possible for you to connect
                                    directly with your favorite shops and
                                    charities.
                                </p>
                            </Col>
                            <Col md="4">
                                <h3>
                                    <strong>Secure shopping</strong>
                                </h3>
                                <p>
                                    We take you privacy seriously - whenever you
                                    need assistance, we're here for you.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        {
                            // ADD STYLE TO HAVE BTN AT THE BOTTOM
                            <div style={{ backgroundColor: '#212529'}} className="my-5">
                                {this.state.display && <h1>View More</h1>}
                                <Row>{productCards}</Row>
                                <div style={{ padding: "1.4rem", textAlign: "center" }}>
                                <Button outline color='success' onClick={this.handleClick} style={{ margin: "1rem"}}>
                                    Load More
                                </Button>
                                <Button outline color='primary'>
                                <Link to="/app/products">  View More </Link>
                               
                               
                                </Button>
                                </div>  
                            </div>
                        }
                    </Container>

                    <Container
                        fluid
                        className="w-100"
                        style={{ padding: "2em", textAlign: "center", backgroundColor: "#29f4cd" }}
                    >
                        <Row>
                            <Col>
                                <h2>
                                        <strong>About E-Market</strong>
                                </h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h3>A one-of-a-kind community</h3>
                                <p>
                                    E-Market is an online marketplace, where
                                    people come together to make, sell, buy and
                                    collect unique items.
                                </p>
                            </Col>
                            <Col>
                                <h3>Support independent creators</h3>
                                <p>
                                    There're no warehouses – just hundreds of
                                    people selling the things they love. We make
                                    the whole process easy, helping you connect
                                    directly with makers to find something
                                    extraordinary.
                                </p>
                            </Col>
                            <Col>
                                <h3>Peace of mind</h3>
                                <p>
                                    Your privacy is the highest priority of our
                                    dedicated team. And if you ever need
                                    assistance, we are always ready to step in
                                    for support.
                                </p>
                            </Col>
                        </Row>
                    </Container>


                    <Container
                        className=" w-100"
                        fluid
                        style={{
                            padding: "2em",
                            backgroundColor: "#7E5A4",
                            textAlign: "center"
                        }}
                    >
                        <Row style={{ padding: "2rem", textAlign: "center" }}>
                            <Col>
                                <h3>List of Charities</h3>
                                <p>
                                    This site was created to make it easier for
                                    charities in the Czech Republic to access
                                    their goods online. At the same time,
                                    charities can also be financially supported.
                                    By buying products from this site, you will
                                    not only make yourself or your loved ones
                                    happy, but also promote a good cause.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Container>
                                <Row>{CharitiesCards}</Row>
                            <br/>
                            <Link to="/app/charities">
                            <Button className="bg-success"> All charities
                            </Button>
                            </Link>
                            <br/>
                            </Container>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}


//FETCH MULTIPLE Request
// const paginateItems = async () => {
//     let response = await fetch(this.state.url, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
//    const data = await response.json();
//    console.log("DATA", data)
//     this.setState({
//       allData: data,
//      // url: response.data.paginationNextPage
//     })
//     console.log("state alldata", this.state.allData)

// };
// const loadMore = () => {
//    this.setState({
//     url: this.state.pagination.paginationNextPage
//    })
//    paginateItems();
// }
// //loadMore();
// paginateItems().then(() => {
//     if(this.state.allData.data != null) {
//         this.setState({
//             paginateDataNotEmpty:true,
//              paginationData:  this.state.allData.map((value, key) => {
//                  console.log(this.state.allData)
//                 return (
//                 <div>
//                     <Col key={value.id}>
//                             <ProductCard
//                             key={value.id}
//                                 name={value.item_name}
//                             // item_img={x.item_img}
//                                 price={value.price_per_item}
//                                 description={value.description}
//                             // addItemToCart={this.props.addItemToCart}
//                             />
//                     </Col>
//                 </div>
//                 )
//             })
//         })
//        }

// });
