
import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";
import "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from 'react-router-dom';

export default class CharitiesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.information);
        return (
            <div>
                <Card
                    style={{
                        padding: "1rem",
                        margin: "1rem",
                        maxHeight: "600px",
                        minWidth: "200px",
                    }}
                >
{/*                     <CardImg
                        top
                        width="100%"
                        src={this.props.item_img}
                        alt="Card image"
                    /> */}
                    <CardBody min-width="500px">
                        <CardTitle>
                            <h4>{this.props.name}</h4>
                        </CardTitle>
                        <CardSubtitle>
                            <h5> {this.props.information}</h5>
                        </CardSubtitle>
                        <CardText>{this.props.address}</CardText>
                        <CardText>
                        <Link to= {`/app/showItems/${this.props.id}`}>
                         <Button className="bg-success"> Items to buy                
                        </Button>
                        </Link>
                        </CardText>
                        
                    </CardBody>
                </Card>
            </div>
        );
    }
}
