/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer mt-50">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1 col-md-3 col-sm-12">
                        
                        <Link legacyBehavior href="/"><a><img alt="Let's Connect" src="assets/imgs/template/logo.svg" /></a></Link>
                        <div className="mt-20 mb-20 font-xs color-text-paragraph-2">Upgrade yourself to Web3.</div>
                        <div className="footer-social">
                            <a className="icon-socials icon-linkedin" href="https://www.linkedin.com/company/web3school-in/?viewAsMember=true" />
                            <a className="icon-socials icon-twitter" href="https://twitter.com/web3school" />
                            </div>
                    </div>
                    <div className="footer-col-2 col-md-2 col-xs-6">
                        <h6 className="mb-20">Resources</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="https://www.linkedin.com/in/dayal-mukati/">About</a></li>
                            <li>
                                <a href="/web3-blockchain-masterclass">Courses</a></li>
                           
                        </ul>
                    </div>
                    <div className="footer-col-3 col-md-2 col-xs-6">
                        <h6 className="mb-20">Community</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Join Community</a></li>
                            <li>
                                <a href="#">Access LMS</a></li>
                            <li>
                                <a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-col-4 col-md-2 col-xs-6">
                        <h6 className="mb-20">Edtech Consultation</h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="#">Content Development</a></li>
                            <li>
                                <a href="#">Course Design</a></li>
                           
                        </ul>
                    </div>
                    <div className="footer-col-5 col-md-3 col-xs-6">
                        <h6 className="mb-20"></h6>
                        <ul className="menu-footer">
                            <li>
                                <a href="/privacy-policy"></a></li>
                            
                            <li>
                                <a href="#"></a></li>
                    
                        </ul>
                    </div>
                    <div className="footer-col-6 col-md-3 col-sm-12">
                        <h6 className="mb-20">Help Section</h6>
                        {/* <p className="color-text-paragraph-2 font-xs">Drop an Email</p> */}
                        <div className="mt-15">
                            <a className="mr-5" href="mailto:help@web3school.in">help@web3school.in</a>
                            <a href="#"></a></div>
                    </div>
                </div>
                <div className="footer-bottom mt-50">
                    <div className="row">
                        <div className="col-md-6"><span className="font-xs color-text-paragraph">Copyright © 2023.Web3School all right reserved</span></div>
                        <div className="col-md-6 text-md-end text-start">
                            <div className="footer-social">
                                <a className="font-xs color-text-paragraph" href="/privacy-policy">Privacy Policy</a>
                                <a className="font-xs color-text-paragraph mr-30 ml-30" href="#">Terms &amp; Conditions</a>
                                <a className="font-xs color-text-paragraph" href="#">Security</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;