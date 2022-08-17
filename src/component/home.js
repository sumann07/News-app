import React, { Component } from 'react'
import web from "../home.png";
import Section1 from './section1';
import img from "../home1.png";
import business from "../img/business.jpg";
import sports from "../img/sports.png";
import health from "../img/health.jpg";
import entertainment from "../img/ee.jpg";
import tech from "../img/tech.jpg";
import science from "../img/science.jpg";
import Newsletter from './newsletter';
import News from './news';

export default class Home extends Component {
    apikey = process.env.REACT_APP_API
    render() {
        return (
            <>
                <section id="header"
                    className="d-flex align-items-center" style={{height:'100vh'}}>
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-11 mx-auto">
                                <div className="row">
                                <div className="col-lg-6 order-1 order-lg-1 header-img">
                                        <img src={web} className="img-fluid animated" alt="home img" />
                                    </div>
                                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                                        <h1>Keep yourself updated with 
                                            <strong className='logo-brand-name'> MediaScan</strong>
                                        </h1>
                                        <h4 className="my-3"> Read all the current, latest and breaking news only on MediaScan. The one stop destination for live news.</h4>
                                       
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>



                </section>
                <div className='category-heading'>CATEGORY</div>
                <div className='category-container'>
                <Section1 category="business" image={business}/>
                <Section1 category="technology" image={tech}/>
                <Section1 category="entertainment" image={entertainment}/>
                <Section1 category="general" image={img}/>
                <Section1 category="science" image={science}/>
                <Section1 category="health" image={health}/>
                <Section1 category="sports" image={sports}/>
                <Section1 category="all" image={tech}/>
                </div>
                <News key="general" pageSize={6} apikey={this.apikey} country = "in" category = "general"/>
                <Newsletter />
                
            </>
        )
    }
}
