import React from 'react';
import Rectangular41 from '../Assets/images/Rectangle 41.png';
import Rectangular42 from '../Assets/images/Rectangle 42.png';
import Rectangular43 from '../Assets/images/Rectangle 43.png';
import Rectangular44 from '../Assets/images/Rectangle 44.png';

function ChooseRugs() {
    return (
        <section id="choose-rugs">
                <div className="container-fluid custom-container">
                    <div className="choose-rugs-body">
                        <h2>More Than 10,000 Rugs to choose from</h2>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="newarrivals-tab" data-bs-toggle="tab"
                                    data-bs-target="#newarrivals" type="button" role="tab" aria-controls="newarrivals"
                                    aria-selected="true">New Arrivals</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="toprugs-tab" data-bs-toggle="tab" data-bs-target="#toprugs"
                                    type="button" role="tab" aria-controls="toprugs" aria-selected="false">Top
                                    Rugs</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="bestsellers-tab" data-bs-toggle="tab"
                                    data-bs-target="#bestsellers" type="button" role="tab" aria-controls="bestsellers"
                                    aria-selected="false">Best Sellers</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="featurerugs-tab" data-bs-toggle="tab"
                                    data-bs-target="#featurerugs" type="button" role="tab" aria-controls="featurerugs"
                                    aria-selected="false">Featured Rugs</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="allrugs-tab" data-bs-toggle="tab" data-bs-target="#allrugs"
                                    type="button" role="tab" aria-controls="allrugs" aria-selected="false">All
                                    Rugs</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade" id="newarrivals" role="tabpanel" aria-labelledby="newarrivals">
                                <div className="row">
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
                                </div>
                            </div>
                            <div className="tab-pane fade" id="toprugs" role="tabpanel" aria-labelledby="toprugs">
                                <div className="row">
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
                            <div className="tab-pane fade show active" id="bestsellers" role="tabpanel"
                                aria-labelledby="bestsellers">
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
                            <div className="tab-pane fade" id="featurerugs" role="tabpanel" aria-labelledby="featurerugs">
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
                            <div className="tab-pane fade" id="allrugs" role="tabpanel" aria-labelledby="allrugs">
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
                    <div className="modern-img-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="modern-img-wrapper contemporary-and-modern">
                                    <h1>Contemporary  Modern</h1>
                                    <h3>Weve got the look youre looking for from monochrome to ornate, vintage to
                                        modern.</h3>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="modern-img-wrapper persian-and-oriental">
                                    <h1>Persian  Oriental</h1>
                                    <h3>Weve got the look youre looking for from monochrome to ornate, vintage to
                                        modern.</h3>
                                </div>
                                <div className="modern-img-wrapper tribal">
                                    <h1>Tribal</h1>
                                    <h3>Weve got the look youre looking for from monochrome to ornate, vintage to
                                        modern.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ChooseRugs
