import React from 'react'
import { Link, Route } from "react-router-dom";
import stars from "../../data";

import Card from "../../components/Card/Card";

const Home = () => {
    return (
        <section className="content-section">
            <div className="">
                <div className="cards-container">
                    <div className="menu-container">
                        <aside className="menu">
                            <p className="menu-label is-size-4">Stars</p>
                            <ul className="menu-list">
                                {stars.map(star => (
                                    <li key={star.id}><Link to={`/${star.id}`} >{star.name}</Link></li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                    <div className="card-container">
                        
                        <Route path="/:id" render={props => <Card {...props} stars={stars}/>}/>                
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
