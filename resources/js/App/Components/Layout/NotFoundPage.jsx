import React from 'react';
import { Link } from 'react-router-dom';
export default class NotFoundPage extends React.Component{
    render(){
        return (
        <div> 
          <h1>Page Not Found 404</h1>
          <p style={{textAlign:"center"}}>
            <Link to="/">Go to Home </Link>
          </p>
        </div>
        )
    }
}
