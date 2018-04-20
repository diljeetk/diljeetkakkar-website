import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export  class WhyMe extends React.Component {
    
    render() {
      return (
        <div>
            <section>
             <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="">
                <h1 className="my-sec-heading">Why Me !</h1>
              </div>
              <div className="">
              <h4 className="lp-sub-head">Dedication and Quality is key to my success.</h4>
                <h4 className="lp-sub-head">Me and my team convert your requirements into a relaible software product.</h4>
              </div>
              <div className="">
                <h4 className="lp-sub-head">Product might not look similar 
                to what you initially want but with your co-operation, me and my team will transform your requirements into what you actually need and will provide you fully functional and quality software product.</h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                 title="ReactJS"
                 avatar="images/whyMe/reactLogo.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                 title="Redux"
                 avatar="images/whyMe/redux.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="NodeJS"
                avatar="images/whyMe/nodejs.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="ExpressJS"
                avatar="images/whyMe/expressjs.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="Java"
                avatar="images/whyMe/java.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="Javascript"
                avatar="images/whyMe/js.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="MongoDB"
                avatar="images/whyMe/mongodb.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="MYSQL"
                avatar="images/whyMe/mysql.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="HTML 5"
                avatar="images/whyMe/html.png"
                />
            </Card>
            </div>
            <br/>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Card>
                <CardHeader
                title="Bootstrap"
                avatar="images/whyMe/bootstrap.png"
                />
            </Card>
            </div>
            <br/>
          </div>
        </div>
      </section>
        </div>
      );
    }
  }