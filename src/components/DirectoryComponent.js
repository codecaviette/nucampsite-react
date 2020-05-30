import React, { Component } from 'react';       //Importing React and named import called Component 
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Directory extends Component {     //class keyword + capitalized component name + JS extends keyword + parent class name from React library
    constructor(props) {         //Constructor method is optional in React class component body; it is required in two cases: When you are storing local state inside this component, and when you wish to bind methods. When constructor is used, then it must take props as an argument 
        super(props);       //When a constructor is used, the first line within must be super(props). The super keyword is used to inherit properties from parent class, Component
        this.state = {      //We're defining a new property, state, which is an array of objects
            selectedCampsite: null      //this property will keep track of the last campsite selected by user with an initial value of null for when nothing has been clicked yet

        };
    }

    onCampsiteSelect(campsite){     //This method will fire whenever a campsite card is clicked on
        this.setState({selectedCampsite: campsite})     //Must use this.setState to change the state outside of the constructor method
    }
    //Now we need a way to trigger this event (onCampsiteSelect method) whenever a user clicks on campsite card, so add onClick handler to Card element in render() method
    
    renderSelectedCampsite(campsite){
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle> {campsite.name}</CardTitle>
                        <CardText> {campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }
    //Now we need to call this renderSelectedCampsite method, and we'll do that in the return element for thie Directory component which is the top-level return line in the render() method


    render(){               // React class component requires return stmt to be wrapped in render() method
        const directory = this.props.campsites.map(campsite => {       //this.props... is used bc inheriting state from parent App component
            return(
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>      {/* We include onClick handler on each campsite card - notice C is capitalized.  */}
                        <CardImg width = "100%" src={campsite.image} alt={campsite.name} />    {/* Curly braces used in JSX when writing JS */}
                        <CardImgOverlay> 
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
        return (            // return must have one and only have one parent div or it won't work - this returns one React element
            <div className="container">      {/* JSX syntax uses className rather than class (HTML) */}
                <div className="row">
                    {directory}             {/* This one React element that will be returned will be defined above. */}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;






