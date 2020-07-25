import React from 'react'

export default function Profile(props) {
    console.log(props)
    return (
        <section>
    <div className="container-fluid">
        <div className="row align-items-center pl-4 pr-4">
            <div className="col-lg-12 ">
                <div className="row p-5">
                    <div className="card mb-3" >
                        <div className="row no-gutters">
                            <div className="col-md-4 pt-3 pl-3">
                                <img src="images/user-side-img.webp" className="card-img" alt=""/>
                                <button className="btn btn-primary choose-image">Change Photo</button>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Kshiti Ghelani</gith5>
                                    <p className="card-text">Web Developer and Designer</p>
                                    <p className="card-text pt-3"><span className="text-muted rating">RANKINGS : <b>8/10</b></span></p>
                                </div>

                                <ul className="nav nav-tabs ">
                                    <li className="pb-3"><a className="p-3 active" data-toggle="tab" href="#about" aria-expanded="true">About</a></li>
                                    <li className="pb-3"><a className="p-3" data-toggle="tab" href="#timeline" aria-expanded="false">Timeline</a></li>
                                </ul>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="profile-work">
                                            <p>WORK LINK</p>
                                            <Link="">Website Link</><br/>
                                            <Link="">Bootsnipp Profile</a><br/>
                                            <Link="">Bootply Profile</a>
                                            <p>SKILLS</p>
                                            <Link="">Web Designer</a><br/>
                                            <Link="">Web Developer</a><br/>
                                            <Link="">WordPress</a><br/>
                                            <Link="">WooCommerce</a><br/>
                                            <Link="">PHP, .Net</a><br/>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="tab-content active">
                                            <div id="about" className="tab-pane fade in active show">
                                                <div className="row">
                                                    <div className="col-md-6 pt-3">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <p>Kshiti123</p>
                                                    </div>

                                                    <div className="col-md-6 pt-3">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <p>Kshiti Ghelani</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="timeline" className="tab-pane fade">
                                                <div className="row">
                                                    <div className="col-md-6 pt-3">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <p>Kshiti123</p>
                                                    </div>

                                                    <div className="col-md-6 pt-3">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className="col-md-6 pt-3">
                                                        <p>Kshiti Ghelani</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
    )
}
