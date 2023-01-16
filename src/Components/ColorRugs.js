import React from 'react';
import Rectangular41 from '../Assets/images/Rectangle 41.png';
import Rectangular42 from '../Assets/images/Rectangle 42.png';
import Rectangular43 from '../Assets/images/Rectangle 43.png';
import Rectangular44 from '../Assets/images/Rectangle 44.png';


function ColorRugs() {
    return (
        <section id="rugs-by-color">
                <div className="container-fluid custom-container">
                    <div className="rugs-by-color-body">
                        <div className="rugs-by-color-text">
                            <h2>Rugs by Color</h2>
                        </div>
                        <h3>Weve got the look youre looking for — from monochrome to ornate, vintage to modern.</h3>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="green-tab" data-bs-toggle="tab" data-bs-target="#green"
                                    type="button" role="tab" aria-controls="green" aria-selected="true">Green</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="brown-tab" data-bs-toggle="tab" data-bs-target="#brown"
                                    type="button" role="tab" aria-controls="brown" aria-selected="false">Brown</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="golden-tab" data-bs-toggle="tab"
                                    data-bs-target="#golden" type="button" role="tab" aria-controls="golden"
                                    aria-selected="false">Golden</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="gray-tab" data-bs-toggle="tab" data-bs-target="#gray"
                                    type="button" role="tab" aria-controls="gray" aria-selected="false">Gray</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="black-tab" data-bs-toggle="tab" data-bs-target="#black"
                                    type="button" role="tab" aria-controls="black" aria-selected="false">Black</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="all-colors-tab" data-bs-toggle="tab"
                                    data-bs-target="#all-colors" type="button" role="tab" aria-controls="all-colors"
                                    aria-selected="false">All Colors</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade" id="green" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular43} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular41} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular42} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular44} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="brown" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular43} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular41} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular42} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular44} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show active" id="golden" role="tabpanel"
                                aria-labelledby="contact-tab">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular43} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular41} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular42} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular44} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="gray" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular43} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular41} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular42} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular44} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="black" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular43} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular41} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular42} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular44} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="all-colors" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular43} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular41} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular42} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 choose-rugs">
                                        <div className="choose-rugs-wrapper">
                                            <div className="choose-rugs-img">
                                                <img src={Rectangular44} className="img-fluid" alt="" />
                                            </div>
                                            <div className="choose-rugs-content">
                                                <p>Saddle Bag 2' X 4' 7" - No. AL43259</p>
                                                <p><span className="crossout-price">$1,066.00</span> $199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-all-link">
                            <a href="#">View all</a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ColorRugs
