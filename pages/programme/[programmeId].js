import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { baseUrl, fetchQuery } from "../../util/utils";


export default function Event({programme}) {
    console.log(programme, "evebjshj")
    return (
        <>
            <Layout>

                <div>
                <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero banner-image-single">
                                <img src={programme.attributes.poster_url} alt="Web3School" />
                            </div>
                            <div className="row mt-10">
                                <div className="col-lg-8 col-md-12">
                                    <h3>{programme.attributes.full_title}</h3>
                                    <div className="mt-0 mb-15">
                                        <span className="card-briefcase">{programme.attributes.mode}</span>
                                        <span className="card-time">{programme.attributes.duration}</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 text-lg-end">
                                    <div className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                        Apply now
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom pt-10 pb-10" />
                        </div>
                    </section>
                </div>
                </Layout>
        </>
    );
    }


    export async function getStaticProps({ params }) {
        console.log(params, "params")
        const data = await fetchQuery('programmes', `${params.programmeId}`)
        const programme = data.data;
        return {
            props: {
                programme
            }
        }
    }
    
    export async function getStaticPaths() {
        const programmes = await fetchQuery('programmes')
        console.log(programmes, "events in eventid")
        const paths = programmes.data.map((programme) => {
            return {
                params: { programmeId: String(programme.attributes.slug) }
            
            }
        })
    
        return {
            paths,
            fallback: false
        }
    }