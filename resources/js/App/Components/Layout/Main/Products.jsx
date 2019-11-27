import React, { useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import Posts from './Pagination/Posts.jsx';
import Pagination from './Pagination/Pagination.jsx';
import {
    Card,Container,CardImg,CardText,CardBody,CardLink, CardTitle, CardSubtitle,Col, Row, CardDeck
} from "reactstrap";
// import {cartContext} from "../../App.jsx"
// console.log('cartContext', cartContext)

import CategoriesBar from './CategoriesBar.jsx';
// import Filtering from './Filtering.jsx';

const Products = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState (false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage ] = useState(5);
    // const cartContextValue = useContext(cartContext)
    // console.log('cartcontextvalue from parent', cartContextValue)

    useEffect (()=> {
        const fetchPosts = async () => {
            setLoading(true);
            // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const res = await axios.get('http://www.final_charity.test:8080/api/items');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);
    //get current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    console.log('axios');
    return (
        <>
         {/* <Container> */}

         <CategoriesBar/>

         <Container>
             <div>

                <h1 className='text-primary sm-2'> Products & Categories</h1>
                <Posts posts={currentPosts} loading={loading} addItemToCart={ props.addItemToCart } />

                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}
                        paginate={paginate} />
                {/* </div> */}

          </div>
          </Container>
        </>
    );
};

export default Products;




                {/* <Row>
                <CardDeck>
                <Col md="auto">
                <Card
                    style={{
                        padding: "1rem", margin: "2rem",maxHeight: "800px", minWidth: "400px"}}>
                    <h1 className='text-primary sm-3'> Products</h1>
                    <Posts posts={currentPosts} loading={loading}/>
                </Card>
                 </Col>
                </CardDeck>
                </Row> */}














// export default function Products (props){
//   let { id } = useParams();
//   console.log(props.items);
//   console.log('hello categries');
//     return(
//         <>

//         <div>
//             <h1>Hell {props.items}</h1>
//             {/* <img src={props.item_img}/> */}
//             {/* {/* <p>{props.items.item_name}</p>
//             // <p>{props.items.description}</p> */}
//         </div>


//       </>
//     )
// }






// // import React from 'react';
// // import {Card, CardImg, CardText, CardBody,CardLink, CardTitle,CardSubtitle, Button} from "reactstrap";


// export default class Categories extends React.Component {
//     render() {


//         return (
//             <div>
//                 <Card
//                     style={{
//                         padding: "1rem",
//                         margin: "1rem",
//                         maxHeight: "600px",
//                         minWidth: "200px",
//                     }}
//                 >
//                     <CardImg
//                         top
//                         width="100%"
//                         src={this.props.item_img}
//                         alt="Card image"
//                     />
//                     <CardBody min-width="500px">
//                         <CardTitle>
//                             <h4>{this.props.name}</h4>
//                         </CardTitle>
//                         <CardSubtitle>
//                             <h5> {this.props.price}/CZK</h5>
//                         </CardSubtitle>
//                         <CardText>{this.props.description}</CardText>
//                         <Button onClick={this.addToCart}>Buy</Button>
//                         <div>
//                             <CardLink to="">More Info</CardLink>
//                         </div>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }

// }
