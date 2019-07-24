import React, { useState, useEffect } from 'react'



const Card = (props) => {
    const stars = props.stars;
    const starID = props.match.params.id;

    const star = stars.find(star => star.id === starID);
    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title has-text-primary is-size-4">{star.name}</p>
            </header>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <img src="http://via.placeholder.com/150x150" alt=""/>
                    </div>
                    <div className="media-content">
                        <p>Hometown: <span className="has-text-grey">{star.hometown}</span></p>
                        <br></br>
                        <div className="notification">
                        <div className="columns">
                                <div className="column">
                                <ul>Favorite Foods: <span className="has-text-grey">
                                    {star.favorite_foods.map((food, index) => (
                                        <li key={index}>{food}</li>
                                    ))}
                                    </span>
                                </ul>   
                                </div>
                                <div className="column">
                                <ul>Favorite Musics: <span className="has-text-grey">
                                    {star.favorite_musics.map((music, index) => (
                                        <li key={index}>{music}</li>
                                    ))}
                                    </span>
                                </ul>   
                                </div>
                                <div className="column">
                                <ul>Favorite Vacations: <span className="has-text-grey">
                                    {star.favorite_vacation_locations.map((place, index) => (
                                        <li key={index}>{place}</li>
                                    ))}
                                    </span>
                                </ul>   
                                </div>
                                <div className="column">
                                <ul>Favorite Hobbies: <span className="has-text-grey">
                                    {star.hobbies.map((hobby, index) => (
                                        <li key={index}>{hobby}</li>
                                    ))}
                                    </span>
                                </ul>   
                                </div>
                            </div>
                        </div>
                            
                        
                    </div>
                </div>
                <div className="content">
                    
                </div>
            </div>
            
        </div>
    )
}

export default Card

