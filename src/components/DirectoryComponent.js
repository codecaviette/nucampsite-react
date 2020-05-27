import React, { Component } from 'react';       //Importing React and named import called Component 

class Directory extends Component {     //class keyword + capitalized component name + JS extends keyword + parent class name from React library
    constructor(props) {         //Constructor method is optional in React class component body; it is required in two cases: When you are storing local state inside this component, and when you wish to bind methods. When constructor is used, then it must take props as an argument 
        super(props);       //When a constructor is used, the first line within must be super(props). The super keyword is used to inherit properties from parent class, Component
        this.state = {      //We're defining a new property, state, which is an array of objects
            campsites: [
                {
                    id: 0,      //It's recommended to include an id property for objects within an array to keep track of the objects
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
                },
                {
                    id: 1,
                    name: 'Chrome River Campground ',
                    image: 'assets/images/chrome-river.jpg',
                    elevation: 877,
                    description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'Breadcrumb Trail Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                }
            ],
        };
    }
    render(){               // React class component requires return stmt to be wrapped in render() method
        const directory = this.state.campsites.map(campsite => {
            return(
                <div className="col">
                    <img src={campsite.image} alt={campsite.name} />    {/* Curly braces used in JSX when writing JS */}
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            );
        });
        
        return (            // return must have one and only have one parent div or it won't work - this returns one React element
            <div className="container">      {/* JSX syntax uses className rather than class (HTML) */}
                <div className="row">
                    {directory}             {/* This one React element that will be returned will be defined above. */}
                </div>
            </div>
        );
    }
}

export default Directory;






