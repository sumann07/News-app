import React, { Component } from 'react'

export default class Newsletter extends Component {
    render() {
        return (
            <>

                <section className="newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="content">
                                    <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Enter your email"/>
                                            <span className="input-group-btn">
                                                <button className="btn" type="submit">Subscribe Now</button>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
