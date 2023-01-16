import React from 'react';
import Vector from '../Assets/images/Vector.svg';
import BoxWhite from '../Assets/images/box-white.svg';
import IconHand from '../Assets/images/akar-icons_hand.svg';
import ALRUG from '../Assets/images/ALRUG.svg';
import IconSearch from '../Assets/images/eva_search-fill.svg';
import IconCart from '../Assets/images/Group 171.svg';


function Header() {
    return (
        <section id="header">
            <div className="header-top">
                <div className="container-fluid custom-container">
                    <div className="shop-info d-flex justify-content-between">
                        <div className="info shop-number">
                            <p><img src={Vector} className="img-fluid" alt="" /> +1 (800) 994-8440</p>
                        </div>
                        <div className="info shop-number">
                            <p><img src={BoxWhite} className="img-fluid" alt="" /> Free Shipping on all
                                orders</p>
                        </div>
                        <div className="info shop-number">
                            <p><img src={IconHand} className="img-fluid" alt="" /> 100% Handmade
                                Carpets</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container-fluid custom-container d-flex align-items-center">
                    <nav className="navbar navbar-expand-lg navbar-light header-nav">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src={ALRUG} className="img-fluid"
                                    alt="" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 header-navbar">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">ALl Rugs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Rugs by Size</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Rugs by Color</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Rugs by Store</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Custom Order</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About US</a>
                                    </li>
                                </ul>
                                <form className="d-flex header-search-bar">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                        aria-label="Search" />
                                    <img src={IconSearch} className="img-fluid" alt="" />
                                </form>
                            </div>
                        </div>
                    </nav>
                    <div className="cart-icon">
                        <a href="#"><img src={IconCart} className="img-fluid" alt="" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
