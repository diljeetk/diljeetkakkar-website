import React from 'react'
import {CustomCarousel} from './customCarousel';
export class landingPage extends React.Component {
  render() {
    return <div>
      <CustomCarousel/>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="">
                <h1 className="my-sec-heading">My goal</h1>
              </div>
              <div className="">
                <h4 className="lp-sub-head">Me and my team convert your requirements into a relaible software product.</h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="lp-icon-box">
                <div className="lp-icon text-center">
                  <img src='/images/mainPage/WhyAgile.png' className="img-fluid" />
                </div>
                <div className="st-bl-icon-con text-center">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="lp-icon-box">
                <div className="lp-icon text-center">
                  <img src='/images/mainPage/sdlc.png' className="img-fluid" />
                </div>
                <div className="st-bl-icon-con text-center">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="">
                <h1 className="my-sec-heading">Why Me</h1>
                <h4 className="lp-sub-head">Dedication and  Quality is key to my success.</h4>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="lp-icon-box">
                <div className="lp-icon text-center">
                  <img src='/images/mainPage/transparency.jpeg' className="img-fluid" />
                </div>
                <div className="st-bl-icon-con text-center">
                  <h4>Transparency</h4>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="lp-icon-box">
                <div className="lp-icon text-center">
                  <img src='/images/mainPage/quality.jpg' className="img-fluid" />
                </div>
                <div className="st-bl-icon-con text-center">
                  <h4>Quality</h4>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="lp-icon-box">
                <div className="lp-icon text-center">
                  <img src='/images/mainPage/security.png' className="img-fluid" />
                </div>
                <div className="st-bl-icon-con text-center">
                  <h4>Security</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}
