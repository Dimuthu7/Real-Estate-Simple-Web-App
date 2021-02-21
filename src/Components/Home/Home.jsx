import React from 'react'
import backImg from './back-img1.png';
import "./Home.css"
import "../LoadingSpinner/LoadingSpinner.css"
import buyImg from './buy.png';
import sellImg from './sell.png';
import rentImg from './rent.png';
import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();
    return (
        <>
            <div style={{
                width: "100%",
                height: "100vh",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${backImg})`,
            }}>

                <div className="container" >
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <div className="container-main">
                                <div className="headling-group">
                                    <h1><span className="text-1">Discover your perfect home</span></h1>
                                    <h4><span className="text-2">With the most complete source of homes for sale & real estate near you</span></h4>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="container">
                <div className="row home-card">
                    <div className="col-md-4">
                        <div className="card text-center home-card">
                            <div className="card-body">
                                <img
                                    src={buyImg}
                                    alt="new"
                                    style={{ width: "100%", height: "32vh" }}
                                />
                                <h5 className="card-title">Buy a home</h5>
                                <p className="card-text">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                                <button type="button" className="btn btn-outline-primary" onClick={() => { history.push("/buy"); }}>Search homes</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center home-card">
                            <div className="card-body">
                                <img
                                    src={sellImg}
                                    alt="new"
                                    style={{ width: "100%", height: "30vh" }}
                                />
                                <h5 className="card-title">Sell a home</h5>
                                <p className="card-text">We can help you navigate a successful sale.</p>
                                <button type="button" className="btn btn-outline-primary" onClick={() => { history.push("/sell"); }}>See your options</button>
                            </div>
                        </div>
                    </div>
                    {
                        (localStorage.getItem('user-email') !== null) ?
                            <div className="col-md-4">
                                <div className="card text-center home-card">
                                    <div className="card-body">
                                        <img
                                            src={rentImg}
                                            alt="new"
                                            style={{ width: "100%", height: "40vh" }}
                                        />
                                        <h5 className="card-title">My Ad</h5>
                                        <p className="card-text">Check your ad.</p>
                                        <button type="button" className="btn btn-outline-primary" onClick={() => { history.push("/MyAd"); }}>See your ad</button>
                                    </div>
                                </div>
                            </div> : null
                    }

                </div>

            </div>

        </>
    )
}

export default Home
