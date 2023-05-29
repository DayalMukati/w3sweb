import React, { useState } from "react";
import Link from "next/link";

const CategoryTab2 = ({ programme }) => {
    const [active, setActive] = useState(1);

    const handleOnClick = (index) => {
        setActive(index); // remove the curly braces
    };
    return (
        <>
            <div className="tab-content mt-50" id="myTabContent-1">
                
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="card-grid-2 grid-bd-16 hover-up">
                                <div className="card-grid-2-image"><span className="lbl-hot bg-green"><span>Beginner</span></span>
                                    <div className="image-box">
                                        <figure><img src="assets/imgs/page/homepage2/img1.png" alt="Web3School" /></figure>
                                    </div>
                                </div>
                                <div className="card-block-info">
                                    <h5>
                                        <Link legacyBehavior href="/web3-blockchain-masterclass"><a></a></Link>
                                        </h5>
                                    <div className="mt-5"><span className="card-location mr-15">Live Session</span><span className="card-time">5 Days</span></div>
                                    <div className="card-2-bottom mt-20">
                                        <div className="row">
                                            <div className="col-xl-7 col-md-7 mb-2">
                                                <Link legacyBehavior href="/jobs-grid"><a className="btn btn-tags-sm mr-5">Web3.0</a></Link>

                                            <Link legacyBehavior href="/jobs-grid"><a className="btn btn-tags-sm mr-5">Blockchain</a></Link>

                                            </div>
                                            {/* <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">$90 - $120</span><span className="text-muted">/Hour</span></div> */}
                                        </div>
                                    </div>
                                    <p className="font-sm color-text-paragraph mt-20">A comprehensive masterclass that covers the fundamentals of blockchain technology and its application in the Web3 ecosystem.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
           
        </>
    );
};

export default CategoryTab2;