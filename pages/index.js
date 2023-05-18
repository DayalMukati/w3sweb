/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BrandSlider2 from "./../components/sliders/Brand2";
import CategoryTab2 from "../components/elements/CategoryTab2";
import CategorySlider1 from "../components/sliders/Category";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="bg-homepage1" />
        <section className="section-box mb-70">
          <div className="banner-hero hero-1">
            <div className="banner-inner">
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="block-banner text-center pb-40 pt-40">
                    <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                      Learn <span className="color-brand-2">Web3 </span>
                      Free
                      <br className="d-none d-lg-block" />
                      The Future of the Internet
                    </h1>
                    <p className="font-lg color-text-paragraph mt-20">
                    Get learning, Build and Deploy dApps &amp; Get Hired
                    </p>
                    <div className="mt-30">
                      <a
                        href=""
                        target="_blank"
                        className="btn btn-default mr-15"
                      >
                        Start Learning for Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div
                  className="list-tags-banner list-tags-banner-2 mt-20 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  <strong>Hot Learning Topics </strong>
                  <br></br>
                  <Link legacyBehavior href="#">
                    <a>zkProofs, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>DeFi, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>NFTs, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Web3 gaming, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Web3 social media, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Web3 security, </a>
                  </Link>
                  <Link legacyBehavior href="#">
                    <a>Web3 adoption, </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box overflow-visible mt-100 mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="box-image-job">
                                    <img className="img-job-1" alt="Web3School" src="assets/imgs/page/about-bg1.png" />
                                    {/* <img className="img-job-2" alt="Web3School" src="assets/imgs/page/homepage1/controlcard.png" /> */}
                                    <figure className="wow animate__animated animate__fadeIn">
                                        <img alt="web3school" src="assets/imgs/page/about-bg.svg" />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="content-job-inner">
                                    <span className="color-text-mutted text-32">What We Do </span>
                                    <h2 className="text-52 wow animate__animated animate__fadeInUp">
                                        We help Learners to upgrad themself to <span className="color-brand-2">Web3</span> ecosystem.
                                    </h2>
                                    <div className="mt-40 pr-50 text-md-lh28 wow animate__animated animate__fadeInUp">Check out upcomimg Masterclasses, Workshops and Fellowship programs.</div>
                                    <div className="mt-40">
                                        <div className="wow animate__animated animate__fadeInUp">
                                            <Link legacyBehavior href="#events">
                                                <a className="btn btn-default">Upcomimg Learning Series</a>
                                            </Link>

                                            <Link legacyBehavior href="/page-about">
                                                <a className="btn btn-link">Learn More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70 mb-40">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">How It Works</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Just via some simple steps, you will find be able to upgrad yourself to Web3!</p>
                            </div>
                            <div className="mt-70">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="box-step step-1">
                                            <h1 className="number-element">1</h1>
                                            <h4 className="mb-20">
                                                Register and Learn
                                                <br className="d-none d-lg-block" />
                                                Web3 Tech
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                Be part of our learning series,
                                                <br className="d-none d-lg-block" />
                                                Masterclasses, Workshops and Fellowships{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step step-2">
                                            <h1 className="number-element">2</h1>
                                            <h4 className="mb-20">
                                                Build & Deploy dApps
                                                <br className="d-none d-lg-block" />
                                                Get Certified
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                build the dapps and deploy them on chains,
                                                <br className="d-none d-lg-block" />
                                                evaluate yourself and get NFT based certificates{" "}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="box-step">
                                            <h1 className="number-element">3</h1>
                                            <h4 className="mb-20">
                                                Find Your Next Job
                                                <br className="d-none d-lg-block" />
                                                in Web3 ecosystem
                                            </h4>
                                            <p className="font-lg color-text-paragraph-2">
                                                Get access to Job Portal,
                                                <br className="d-none d-lg-block" />
                                                Where Top Web3 companies are waiting for you{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-50 text-center">
                                <a className="btn btn-default" href="#events">Get Started</a>
                            </div>
                        </div>
                    </section>
 

                    <section id="events" className="section-box mt-50 mb-30 bg-brand-2 pt-60 pb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="pt-70">
                                        <h2 className="color-black mb-20">Explore Our Learning Series</h2>
                                        <p className="color-black mb-30">Search and connect with the right candidates faster. Tell us what you are looking for and we will get to work for you.</p>
                                        <div className="mt-20">
                                            <a className="btn btn-brand-1 btn-icon-more hover-up">Explore</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="box-swiper mt-50 layout-brand-1">
                                        <CategorySlider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        <div className="section-box mb-30">
          <div className="container">
            <div className="box-we-hiring">
              <div className="text-1">
                <span className="text-we-are">Looking for</span>
                <span className="text-hiring">Blockchain Training</span>
              </div>
              <div className="text-2">
                Let’s <span className="color-brand-1">Work</span> Together
                <br /> &amp; <span className="color-brand-1">Get it</span> Done
              </div>
              <div className="text-3">
                <a
                  href="https://calendar.app.google/j7DaYh4dnvSBdsVp8"
                  target="_blank"
                  className="btn btn-default"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <section className="section-box mt-30">
                        <div className="container">
                            <div className="text-start">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Sharing Knowledge with Masterclasses.</h2>
                                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Explore and choose right one.</p>
                            </div>
                            <div className="mt-50">
                                <CategoryTab2 />
                            </div>
                        </div>
                    </section> */}

        
      </Layout>
    </>
  );
}
