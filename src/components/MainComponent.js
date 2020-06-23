import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        const HomePage = () => {        // We used arrow function bc they inhert the "this" of their parent scope, so here, we can access state of Main comp. If we'd instead used a fxn declaration, then using "this" keyword would've been undefined
            return (
                <Home       
                    // We want to pass state as the following props to Home comp: featured campsite, featured partner, and featured promo
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}        // We'll filter through the campsites array and return the item that has the featured key set to "true". Use [0] to pull the 1st item that meets criteria out of the array.
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({match}) => {       // Since we'll need to access the Main comp's state with "this" keyword, we'll use arrow function. Passing the Route's match object.
            return (
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}       // Using the "+" infront of a string converts it into a number; [0] takes the first item/object in new array resulting from filtered array.
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() =>                // With Route, whhen passing state as props to a comp, need to use the render syntax
                        <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId}/>       {/* The ":" tells router that what follows the second "/" will be a param, and takes whatever that is and puts it in this property, campsiteId. The Route comp itself stores an object called match in its state which has a prop called params; campsiteId gets stored as a property of this params object */}
                    <Route exact path='/contactus' component={Contact} />       {/* If not passing any props, no need for render syntax; just use component attribute */}
                    <Redirect to='/home' />                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;