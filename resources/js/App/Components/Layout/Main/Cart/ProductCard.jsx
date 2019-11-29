import React from "react";
import {
    Card,CardImg,CardText,CardBody,CardLink,CardTitle,CardSubtitle, Button
} from "reactstrap";
import "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
// import Checkout from '../../../../../../../Project_Prototype/resources/js/App/Components/Layout/Main/Checkout/Checkout';

;
export default class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    addToCart = e => {
        this.props.addItemToCart({
            name: this.props.name,
            price: this.props.price,
            description: this.props.description,
            image: this.props.item_img,
            quantity: 1
        })
    };
    render() {
        return (
            <div>
                <Card
                    style={{
                        padding: "1rem",
                        margin: "1rem",
                        maxHeight: "600px",
                        minWidth: "200px",
                    }}>
                    <CardImg
                        top
                        width="100%"
                        src={this.props.item_img}
                        alt="Card image"
                    />
                    <CardBody min-width="200px">
                        <CardTitle>
                            <h4>{this.props.name}</h4>
                        </CardTitle>
                        <CardSubtitle>
                            <h5> {this.props.price}/CZK</h5>
                        </CardSubtitle>
                        <CardText>{this.props.description}
                        </CardText>
                        <Button  className="bg-success" onClick={this.addToCart}>Buy</Button>
                        <div>
                <CardLink to="#">
                <Link to={`/app/moreinfo/${this.props.id}`} >
                    More info
                    </Link>
                    </CardLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
