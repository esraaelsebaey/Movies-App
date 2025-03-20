import React from "react";
import './Slider.css';

function Slider(){
    return(
        <div className="slider mt-4">
            <div className="container-fluid container-md">
                <div className="row">
                    <div className="col-12">
                        <div className="slider-content">
                            <div id="carouselExampleIndicators" class="carousel slide carousel-fade"  data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active position-relative" data-bs-interval="3000">
                                       <img src="./images/2.jpg" class="d-block w-100" />
                                       <div class="carousel-caption position-absolute d-block">
                                            <h5>Rock Music Festival</h5>
                                            <p>A thrilling night of rock music featuring top bands.</p>
                                        </div>
                                        <div className="overlay position-absolute"></div>
                                    </div>
                                    <div class="carousel-item position-relative" data-bs-interval="3000">
                                       <img src="./images/11.png" class="d-block w-100" />
                                       <div class="carousel-caption position-absolute d-block">
                                            <h5>Tech Conference 2025</h5>
                                            <p>Explore the latest innovations in AI and technology.</p>
                                        </div>
                                        <div className="overlay position-absolute"></div>
                                    </div>
                                    <div class="carousel-item position-relative" data-bs-interval="3000">
                                       <img src="./images/21.jpg" class="d-block w-100" />
                                       <div class="carousel-caption position-absolute d-block">
                                            <h5>Art & Culture Exhibition</h5>
                                            <p>An inspiring collection of artwork from global artists.</p>
                                        </div>
                                        <div className="overlay position-absolute"></div>
                                    </div>
                                    <div class="carousel-item position-relative" data-bs-interval="3000">
                                       <img src="./images/16.png" class="d-block w-100" />
                                       <div class="carousel-caption position-absolute d-block">
                                            <h5>Food & Drinks Expo</h5>
                                            <p>A delicious experience with world-class chefs and cuisines.</p>
                                        </div>
                                        <div className="overlay position-absolute"></div>
                                    </div>
                                    <div class="carousel-item position-relative" data-bs-interval="3000">
                                       <img src="./images/30.jpg" class="d-block w-100" />
                                       <div class="carousel-caption position-absolute d-block">
                                            <h5>International Film Festival</h5>
                                            <p>Screenings of top films from around the world.</p>
                                        </div>
                                        <div className="overlay position-absolute"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider;