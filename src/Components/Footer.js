import React from 'react';
import Group from '../Assets/images/Group.svg';
import CarbonReview from '../Assets/images/carbon_review.svg';
import Refresh from '../Assets/images/Refresh.svg';
import PhoneIcon from '../Assets/images/phone-icon.svg';
import Fb from '../Assets/images/fb.png';
import Insta from '../Assets/images/inst.png';
import Pin from '../Assets/images/pin.png';
import Geoup20 from '../Assets/images/Group 20.png';

function Footer() {
    return (
        <section id="footer">
            <div class="customer-support">
                <div class="container-fluid customer-support-container">
                    <div class="customer-support-list d-flex justify-content-between flex-wrap">
                        <div class="list">
                            <p><img src={Group} class="img-fluid" alt="" />Free shipping</p>
                        </div>
                        <div class="list">
                            <p><img src={CarbonReview} class="img-fluid" alt="" />10k+ Reviews</p>
                        </div>
                        <div class="list">
                            <p><img src={Refresh} class="img-fluid" alt="" />Easy Returns</p>
                        </div>
                        <div class="list">
                            <p><img src={PhoneIcon} class="img-fluid" alt="" />24/7 Customer Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container-fluid custom-container">
                    <div class="row">
                        <div class="col-md-3 col-sm-4 footer-navbar col-6">
                            <div class="footer-navbar-wrapper">
                                <h4>COMPANY</h4>
                                <ul class="footer-navbar-ul">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Philanthropy</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Reviews</a></li>
                                    <li><a href="#">#Ruggable</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Affiliate</a></li>
                                    <li><a href="#">Spill Club Rewards</a></li>
                                    <li><a href="#">Get 15%</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 footer-navbar col-6">
                            <div class="footer-navbar-wrapper">
                                <h4>SHOP</h4>
                                <ul class="footer-navbar-ul">
                                    <li><a href="#">New Arrivals</a></li>
                                    <li><a href="#">Best Sellers</a></li>
                                    <li><a href="#">All Rug Collections</a></li>
                                    <li><a href="#">Shop All Colors</a></li>
                                    <li><a href="#">Our Rug Pads</a></li>
                                    <li><a href="#">Our Doormats</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-4 footer-navbar col-6">
                            <div class="footer-navbar-wrapper">
                                <h4>SUPPORT</h4>
                                <ul class="footer-navbar-ul">
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Track Your Order</a></li>
                                    <li><a href="#">Customer Account</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Afterpay</a></li>
                                    <li><a href="#">Rug Size Guide</a></li>
                                    <li><a href="#">Product Safety</a></li>
                                    <li><a href="#">Accessibility</a></li>
                                    <li><a href="#">Site Map</a></li>
                                    <li><a href="#">How handmade rugs are made</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 col-7">
                            <div class="footer-navbar-wrapper">
                                <h4>SUPPORT</h4>
                                <p>Sign up to receive 10% OFF your first order, exclusive offers and design updates.</p>
                                <form class="d-flex footer-form">
                                    <input type="email" class="form-control" placeholder="Subscribe"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <button type="submit" class="btn footer-submit-btn btn-primary">Submit</button>
                                </form>
                                <p>By clicking Sign up, you agree to Ruggable's Privacy Policy and Terms of Service, and
                                    agree to receive Ruggable offers, promotions and other commercial messages. You may
                                    unsubscribe from our marketing emails at any time.</p>
                                <div class="social-links">
                                    <h4>SOCIALIZE</h4>
                                    <ul class="social-links-ul">
                                        <li><a href="#"><img src={Fb} class="img-fluid" alt="" /></a>
                                        </li>
                                        <li><a href="#"><img src={Insta} class="img-fluid"
                                                    alt="" /></a></li>
                                        <li><a href="#"><img src={Pin} class="img-fluid" alt="" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="all-right-services">
                    <div class="container-fluid custom-container">
                        <div class="all-right-services-body">
                            <p>© 2021 Alrug. All Rights Reserved.</p>
                            <button onclick="topFunction()"><img src={Geoup20} class="img-fluid"
                                    alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
