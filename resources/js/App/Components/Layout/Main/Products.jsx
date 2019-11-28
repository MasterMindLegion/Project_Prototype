import React, { useState, useEffect, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import Posts from './Pagination/Posts.jsx';
import Pagination from './Pagination/Pagination.jsx';
import {
    Jumbotron, Card,Container,CardImg,CardText,CardBody,CardLink, CardTitle, CardSubtitle,Col, Row, CardDeck
} from "reactstrap";
// import {cartContext} from "../../App.jsx"
// console.log('cartContext', cartContext)

import CategoriesBar from './CategoriesBar.jsx';
// import Filtering from './Filtering.jsx';

const Products = (props) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState (false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage ] = useState(4);
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
         <Jumbotron>

         <CategoriesBar/>

         <Container>
             <div>
             <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}
                        paginate={paginate} />
                <h1 className='text-primary sm-2'> Our  Products</h1>
                <Posts posts={currentPosts} loading={loading} addItemToCart={ props.addItemToCart } />

                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length}
                        paginate={paginate} />

          </div>
          </Container>
          </Jumbotron>
        </>
    );
};

export default Products;




