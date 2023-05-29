/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { fetchQuery } from "../util/utils";
import { EventCard } from "../components/eventCard";
import CategoryTab2 from "../components/elements/CategoryTab2";
export default function Learn({ data }) {
  return (
    <>
      <Layout>
        <div>
          <section className="section-box-2">
            <div className="container">
              <div className="banner-hero banner-single banner-single-bg">
                <div className="block-banner text-center">
                  <h1 className="wow animate__animated animate__fadeInUp">
                    Become the <span className="color-brand-2"> Expert</span> in
                    Web3
                  </h1>
                  <div
                    className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".1s"
                  ></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-box mt-30">
            <div className="container">
              <div className="text-start">
                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                Register for Upcoming Programmes.
                </h2>
                <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                  Explore and choose right one.
                </p>
              </div>
            </div>
          </section>
          <section className="section-box mt-30">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-lg-10 col-md-14 col-sm-12 col-12 float-center">
                  <div className="content-page">
                    <div className="box-filters-job">
                      <div className="row">
                        {data.map((programme) => (
                          <EventCard
                            key={programme.title}
                            programme={programme}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="row"></div>
                  </div>
                 
                </div>
              
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const programmes = await fetchQuery("programmes");
  console.log(programmes, "promess");
  const data = programmes.data;
  return {
    props: {
      data,
    },
  };
}
