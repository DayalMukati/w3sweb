/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import BrandSlider2 from "./../components/sliders/Brand2";
import CategoryTab2 from "../components/elements/CategoryTab2";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="bg-homepage1" />
        <section className="section-box">
          <div className="banner-hero hero-1">
            <div className="banner-inner">
              <div className="row">
                <div className="col-xl-8 col-lg-12">
                  <div className="block-banner">
                    <h1 className="heading-banner wow animate__animated animate__fadeInUp">
                      <br className="d-none d-lg-block" />
                      I Help Companies & StartUps With
                      <br />
                      <span className="color-brand-2">
                        Blockchain Implementation.
                      </span>
                    </h1>
                    <div
                      className="banner-description mt-20 wow animate__animated animate__fadeInUp"
                      data-wow-delay=".1s"
                    >
                      Help companies to setup their Blockchain Practice{" "}
                      <br className="d-none d-lg-block" />
                      Trained 5k+ Learners on Blockchain,{" "}
                      <br className="d-none d-lg-block" />
                      Helping Startups to build their Blockchain Products
                    </div>

                    <div className="mt-30">
                      <a
                        href="https://calendar.app.google/j7DaYh4dnvSBdsVp8"
                        target="_blank"
                        className="btn btn-default mr-15"
                      >
                        Schedule a Meeting
                      </a>

                      <a
                        href="/courses"
                        target="_blank"
                        className="btn btn-border-brand-2"
                      >
                        Courses
                      </a>
                    </div>
                    <div
                      className="list-tags-banner mt-60 wow animate__animated animate__fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <strong>Book a Call for:</strong>
                      <Link
                        legacyBehavior
                        href="https://calendar.app.google/j7DaYh4dnvSBdsVp8"
                      >
                        <a>Consultation, </a>
                      </Link>
                      <Link
                        legacyBehavior
                        href="https://calendar.app.google/j7DaYh4dnvSBdsVp8"
                      >
                        <a>Training, </a>
                      </Link>
                      <Link
                        legacyBehavior
                        href="https://calendar.app.google/j7DaYh4dnvSBdsVp8"
                      >
                        <a>Speaking, </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 d-none d-xl-block col-md-6">
                  <div className="banner-imgs">
                    <div className="block-1 shape-1">
                      <img
                        className="img-responsive"
                        alt="Dayal Mukati"
                        src="assets/imgs/page/homepage1/dayal.svg"
                      />
                    </div>
                    {/* <div className="block-2 shape-2">
                                            <img className="img-responsive" alt="Dayal Mukati" src="assets/imgs/page/homepage1/banner.gif" />
                                        </div> */}
                    <div className="block-3 shape-3">
                      <img
                        className="img-responsive"
                        alt="Dayal Mukati"
                        src="assets/imgs/page/homepage1/icon-top-banner.png"
                      />
                    </div>
                    <div className="block-4 shape-3">
                      <img
                        className="img-responsive"
                        alt="Dayal Mukati"
                        src="assets/imgs/page/homepage1/icon-bottom-banner.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-box mt-70">
            <div class="container">
              <div class="box-trust">
                <div class="row">
                  <div class="left-trust col-lg-2 col-md-3 col-sm-3 col-3">
                    <h4 class="color-text-paragraph-2">Worked With</h4>
                  </div>
                  <div class="right-logos col-lg-10 col-md-9 col-sm-9 col-9">
                    <div class="box-swiper">
                      <div class="swiper-container swiper-group-7 swiper">
                        <div className="row">
                          <div className="col-lg-3 col-md-6 col-sm-10 mb-30">
                            <img
                              src="assets/imgs/brands/upgrad.png"
                              alt="/upgrad"
                              width="150"
                              height="50"
                            />
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-10 mb-30">
                            <a href="#">
                              <img
                                src="assets/imgs/brands/drdo-logo.png"
                                alt="drdo"
                                width="150"
                                height="50"
                              />
                            </a>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <a href="#">
                              <img
                                src="assets/imgs/brands/hcltech.png"
                                alt="hcltech"
                                width="150"
                                height="50"
                              />
                            </a>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <a href="#">
                              <img
                                src="assets/imgs/brands/npci.png"
                                alt="npci"
                                width="150"
                                height="50"
                              />
                            </a>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <a href="#">
                              <img
                                src="assets/imgs/brands/kpmg.png"
                                alt="kpmg"
                                width="150"
                                height="50"
                              />
                            </a>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <a href="#">
                              <img
                                src="assets/imgs/brands/mit-adt.png"
                                alt="mit-adt"
                                width="150"
                                height="50"
                              />
                            </a>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <a href="#">
                              <img
                                src="assets/imgs/brands/ibf.png"
                                alt="jobBox"
                                width="150"
                                height="50"
                              />
                            </a>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                            <a href="#">
                              <img
                                src="assets/imgs/brands/infobeans.png"
                                alt="jobBox"
                                width="150"
                                height="50"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-box mt-50 mb-30 bg-border-3 pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="bdrd-10"
                  src="assets/imgs/page/homepage1/banner-profile.svg"
                  alt="Dayal Mukati"
                />
              </div>
              <div className="col-lg-6">
                <div className="pl-30">
                  <h5 className="color-brand-2 mb-15 mt-15">About</h5>
                  <h2 className="color-brand-1 mt-0 mb-15">Dayal Mukati</h2>
                  <p className="font-lg color-text-paragraph-2">
                    A Blockchain Consultant with over 8+ years of experience in
                    software design, development, and training in Blockchain
                    platforms, also helps start-ups and companies to set up
                    their Blockchain practice and develop Blockchain-based
                    products. Certified as a Blockchain Consultant from IBM and
                    Hyperledger Fabric Admin from Linux Foundation.
                  </p>
                  <div className="mt-20">
                    <a
                      href="https://calendar.app.google/j7DaYh4dnvSBdsVp8"
                      target="_blank"
                      className="btn btn-default"
                    >
                      Schedule a Meeting
                    </a>
                  </div>
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
