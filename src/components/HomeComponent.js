import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

// This builds structure of each featured item card; called in Home functional component below
function RenderCard({item}) {           // Deconstruct a property named "item" from the props object - to do this, item must be in {}
    return (
        <Card>
            <CardImg src={item.image} alt={item.name}/>     {/* We're accessing the image and name properties of the argument passed through RenderCard fxn */}
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText> {item.description} </CardText>
            </CardBody>
        </Card>
    )
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">                {/* When no number succeeds col, all divs in the row will take up same amount of space */}
                    <RenderCard item={props.campsite} />    {/* Create item prop from passed prop, which is used in RenderCard fxn */}
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
            </div>
        </div>
    )
}

export default Home;