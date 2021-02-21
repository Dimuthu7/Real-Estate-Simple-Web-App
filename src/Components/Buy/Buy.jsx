import React from 'react'
import home1 from './img/home1.jpg';
import home2 from './img/home2.jpg';
import home3 from './img/home3.jpg';
import home4 from './img/home4.jpg';
import home5 from './img/home5.jpg';
import home6 from './img/home6.jpg';
import home7 from './img/home7.jpeg';
import home8 from './img/home8.jpg';
import './Buy.css'

const Buy = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row container mt-3">
                    <h4><span>Properties for Sale in Sri Lanka</span></h4>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="buy-cards">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home1}
                                            alt="new"
                                            style={{ width: "100%" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">Villa</span> <i className="fas fa-bed ml-3 mr-1"></i>5
                                    <i class="fas fa-bath ml-3 mr-1"></i>2 <span className="ml-3">2500 sq.ft.</span>
                                            <h5 className="card-title buy-price"> Rs. 50,000,000</h5>
                                            <h6>Beach front villa</h6>
                                            <p className="buy-address"><i className="fas fa-map-marker-alt"><span className="ml-2">Sebasthiyan Road, Galle</span> </i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home2}
                                            alt="new"
                                            style={{ width: "100%", height: "30vh" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">House</span>
                                            <i className="fas fa-bed ml-3 mr-1"></i>3
                                            <i class="fas fa-bath ml-3 mr-1"></i>2 <span className="ml-3">1321 sq.ft.</span>
                                            <h5 className="card-title buy-price"> Rs. 21,000,000</h5>
                                            <h6>House For Sale In Malabe</h6>
                                            <p className="buy-address"><i className="fas fa-map-marker-alt"><span className="ml-2">New kandy road Road, Malabe</span> </i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home3}
                                            alt="new"
                                            style={{ width: "100%" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">Villa</span>
                                            <i className="fas fa-bed ml-3 mr-1"></i>3
                                            <i class="fas fa-bath ml-3 mr-1"></i>3
                                            <h5 className="card-title buy-price"> Rs. 88,000,000</h5>
                                            <h6>Vyan Villa Ella</h6>
                                            <p className="buy-address"><i className="fas fa-map-marker-alt"><span className="ml-2">Uva Karandagolla, Ella</span> </i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home4}
                                            alt="new"
                                            style={{ width: "100%" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">Apartment</span> <i className="fas fa-bed ml-3 mr-1"></i>2
                                    <i class="fas fa-bath ml-3 mr-1"></i>2 <span className="ml-3">1012 sq.ft.</span>
                                            <h5 className="card-title buy-price"> Rs. 33,000,000</h5>
                                            <h6>Luxury Serviced Apartment in Mirissa</h6>
                                            <p className="buy-address"><i className="fas fa-map-marker-alt"><span className="ml-2">Sunanda Road, Mirissa</span> </i></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 mb-5">
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home5}
                                            alt="new"
                                            style={{ width: "100%" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">House</span> <i className="fas fa-bed ml-3 mr-1"></i>5+
                                    <i class="fas fa-bath ml-3 mr-1"></i>4
                                            <h5 className="card-title buy-price"> Rs. 38,500,000</h5>
                                            <h6>2 storied house</h6>
                                            <p className="buy-address"><i className="fas fa-map-marker-alt">
                                                <span className="ml-2">Senanayake Mw, Nawala</span> </i></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home6}
                                            alt="new"
                                            style={{ width: "100%" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">Apartment</span> <i className="fas fa-bed ml-3 mr-1"></i>2
                                    <i class="fas fa-bath ml-3 mr-1"></i>2 <span className="ml-3">1070 sq.ft.</span>
                                            <h5 className="card-title buy-price"> Rs. 58,000,000</h5>
                                            <h6>447 Luna Tower - Union Place</h6>
                                            <p className="buy-address"><i className="fas fa-map-marker-alt"><span className="ml-2">Union Place, Colombo 2</span> </i></p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home7}
                                            alt="new"
                                            style={{ width: "100%", height: "180px" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">House</span> <i className="fas fa-bed ml-3 mr-1"></i>3
                                    <i class="fas fa-bath ml-3 mr-1"></i>3
                                            <h5 className="card-title buy-price"> Rs. 37,500,000</h5>
                                            <h6>Stunningly Beautiful Modern Design House Flat Bungalow</h6>
                                            <p className="buy-address">
                                                <i className="fas fa-map-marker-alt">
                                                    <span className="ml-2">Lanka Matha Mw, Mahabage</span> </i></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card buy-card">
                                        <img
                                            src={home8}
                                            alt="new"
                                            style={{ width: "100%" }}
                                        />
                                        <div className="card-body">
                                            <span class="badge badge-primary">Apartment</span>
                                            <i className="fas fa-bed ml-3 mr-1"></i>3
                                    <i class="fas fa-bath ml-3 mr-1"></i>4 <span className="ml-3">1538 sq.ft.</span>
                                            <h5 className="card-title buy-price"> Rs. 75,000,000 </h5>
                                            <h6>85M Value Brand New 3 BED APT selling for 75M - Urgent Sale</h6>
                                            <p className="buy-address"><i className="fas fa-map-marker-alt">
                                                <span className="ml-2">Duplication Road (Infront of Mahanama College), Colombo 3</span> </i></p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Buy
