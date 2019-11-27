import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { 
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button } from "reactstrap";
import ProductCounter from "./ProductCounter.jsx";
import { useParams } from "react-router-dom";



// const SingleItem = (props) => {
//   //pass down the correct ID here on props
//   return(
//     <div>
//       <p>Product ID: {props.id}</p>
//       <p>name: {props.name}</p>
//       <p>description: {props.description}</p>
//     </div>
//   )
// }

export default function ProductPage (props){
  //all props are passed down
  const {items} = {...props}

  //looks for the item id based on url - app/more/info/3
  const {id} = useParams();

  let item = null;
  if(items.length > 0){
    //filter items based on the item id(finds an existing item with id requested)
    //retrives item indexed 0, alt you can use pop()
    item = items.filter((item) => (item.id == id))[0];
  } 
 
  if (item === undefined) {
    item = null;
  }
 

  // const DropDown = props => {
  //   const [dropdownOpen, setDropdownOpen] = useState(false);
  //   const [dropdownTitle, setDropdownTitle] = useState("Departure");
  //   const { setDepartureCode } = props;
  //   const toggle = () => setDropdownOpen(prevState => !prevState);
  
  //   const handleItemClick = e => {
  //     setDropdownTitle(e.target.dataset.title);
  //     setDepartureCode(e.target.id)

  return(
      <div>
      {
       item !== null ? (
         <Row>
         <Col>
           <Card
           style={{
            padding: "1rem",
            margin: "1rem",
            minHeight: "500px",
            maxWidth: "500px",
          }}>
            <CardTitle><h1>{item.item_name}</h1></CardTitle>
            <CardImg 
              top
              width="100%"
              src={item.item_img}
              alt="product image"/>

            <CardBody min-width="500px">
            <CardSubtitle>Description: {item.description}</CardSubtitle>
            <CardText>Price: {item.price_per_item} CZK</CardText>
            </CardBody>
            </Card>
          </Col>
          <Col>
          {/** HERE GOES ADD/REMOVE PRODUCT QUANTITY */}
          <ProductCounter/>
          </Col>
        </Row>
       ) : (
         <h2>Loading</h2> 
       )
       }
     </div>
    )
}

// export default class ProductPage extends React.Component {
//   componentDidMount() {
//     const id = this.props.match.params.id;
//     this.fetchData(id);
//   }
//   fetchData = id => {
//     //...
//   };
//   render() {
//     return <div>BLAH</div>;
//   }
// }

{/* {items.map(item => (
          <>
          <p>{item.item_name}</p>
          <p>{item.id}</p>
          </>

        ))} */}
        {/* <div>{items[2].item_name}</div> */}

// const itemsArr = items.map(x => {
  //   return(
  //     <SingleItem name={x.item_name} description={x.description} />
  //   )
  // })
  // console.log(itemsArr)