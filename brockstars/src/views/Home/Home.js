import React from 'react'
import { Link, Route } from "react-router-dom";
import stars from "../../data";

import Card from "../../components/Card/Card";

const Home = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <aside className="menu">
                            <p className="menu-label is-size-4">Stars</p>
                            <ul className="menu-list">
                                {stars.map(star => (
                                    <li key={star.id}><Link to={`/${star.id}`} >{star.name}</Link></li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                    <div className="column is-two-third">
                        
                        <Route path="/:id" render={props => <Card {...props} stars={stars}/>}/>                
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
