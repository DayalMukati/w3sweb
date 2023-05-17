import Link from 'next/link'
import { baseUrl } from '../util/utils'

export function EventCard({ event }) {
    console.log(event, "djskfhjfhdjshfjh")
	return (
        
		<Link legacyBehavior href={`/events/${event.id}`}>
			<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    <div className="card-grid-2-image-left">
                                                        <span className="flash" />
                                                        <div className="image-box">
                                                            <img src={event.attributes.cover_url} alt="jobBox" />
                                                        </div>
                                                        <div className="right-info">
                                                            <Link legacyBehavior href="company-details">
                                                                <a className="name-job">{event.attributes.title}</a>
                                                            </Link>
                                                            <span className="location-small">{event.attributes.mode}</span>
                                                        </div>
                                                    </div>
                                                    <div className="card-block-info">
                                                        <h6>
                                                            <Link legacyBehavior href="/job-details">
                                                                <a>on {event.attributes.framework}</a>
                                                            </Link>
                                                        </h6>
                                                        <div className="mt-5">
                                                            <span className="card-briefcase">Fulltime</span>
                                                            <span className="card-time">
                                                                {event.attributes.duration}<span> {}</span>
                                                            </span>
                                                        </div>
                                                        <p className="font-sm color-text-paragraph mt-15">{event.attributes.overview}</p>
                                                        {/* <div className="mt-30">
                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-small mr-5">Adobe XD</a>
                                                            </Link>

                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-small mr-5">Figma</a>
                                                            </Link>

                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="btn btn-grey-small mr-5">Photoshop</a>
                                                            </Link>
                                                        </div> */}
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7">
                                                                    <span className="card-text-price">Free</span>
                                                                    <span className="text-muted"></span>
                                                                </div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">
                                                                        Register now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
		</Link>
	)
}
