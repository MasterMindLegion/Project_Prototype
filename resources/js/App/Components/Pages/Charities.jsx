import React from "react";
// import { Jumbotron } from 'reactstrap';
import { Card, Container, Row, Col } from "reactstrap";

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
                <Col key={`product-${charity.name}-${index}`}>
                    <CharitiesCard
                        name={charity.Name}
                        address={charity.Char_address}
                        information={charity.Char_information}
                        id={charity.id}
                        
                    />
                </Col>
            );
        });
            return (
        <p>{CharitiesCards}</p>
    )
    }

}