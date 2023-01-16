import React from 'react'
import Banner from '../Assets/images/image 1.png';
import Group from '../Assets/images/Group.svg';
import CarbonReview from '../Assets/images/carbon_review.svg';
import Refresh from '../Assets/images/Refresh.svg';
import PhoneIcon from '../Assets/images/phone-icon.svg';

function Bannerr() {
    return (
        <section id="banner">
                <div className="banner-img">
                    <img src={Banner} className="img-fluid" alt="" />
                </div>
                <div className="customer-support">
                    <div className="container-fluid customer-support-container">
                        <div className="customer-support-list d-flex justify-content-between flex-wrap">
                            <div className="list">
                                <p><img src={Group} className="img-fluid" alt="" />Free shipping</p>
                            </div>
                            <div className="list">
                                <p><img src={CarbonReview} className="img-fluid" alt="" />10k+ Reviews
                                </p>
                            </div>
                            <div className="list">
                                <p><img src={Refresh} className="img-fluid" alt="" />Easy Returns</p>
                            </div>
                            <div className="list">
                                <p><img src={PhoneIcon} className="img-fluid" alt="" />24/7 Customer
                                    Support</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Bannerr
