import React from 'react';
import Rectangle20 from '../Assets/images/Rectangle 20.png';
import Rectangle21 from '../Assets/images/Rectangle 21.png';
import Rectangle22 from '../Assets/images/Rectangle 22.png';
import Rectangle23 from '../Assets/images/Rectangle 23.png';

function StyleRugs() {
    return (
        <section id="rugs-by-style">
                <div className="container-fluid custom-container">
                    <div className="rugs-by-style-body">
                        <div className="rugs-by-style-text">
                            <h2>Rugs by Style</h2>
                        </div>
                        <h3>Weve got the look youre looking for — from monochrome</h3>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="rugs-style-wrapper">
                                    <div className="rugs-style-img">
                                        <img src={Rectangle20} className="img-fluid" alt="" />
                                    </div>
                                    <div className="rugs-style-content">
                                        <p>Contemporary</p>
                                        <p>Minimal sophisticated</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="rugs-style-wrapper">
                                    <div className="rugs-style-img">
                                        <img src={Rectangle21} className="img-fluid" alt="" />
                                    </div>
                                    <div className="rugs-style-content">
                                        <p>Shag Rugs</p>
                                        <p>Soft, cozy, welcoming</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="rugs-style-wrapper">
                                    <div className="rugs-style-img">
                                        <img src={Rectangle22} className="img-fluid" alt="" />
                                    </div>
                                    <div className="rugs-style-content">
                                        <p>Jute Rugs</p>
                                        <p>For a natural look</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="rugs-style-wrapper">
                                    <div className="rugs-style-img">
                                        <img src={Rectangle23} className="img-fluid" alt="" />
                                    </div>
                                    <div className="rugs-style-content">
                                        <p>Transitional Rugs</p>
                                        <p>classNameic patterns, modern materials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default StyleRugs
