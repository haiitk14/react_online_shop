import React, { Component } from 'react';

class PartialView extends Component {
    render() {
        return (
            <div className="row page-titles">
                <div className="col-md-6 col-8 align-self-center">
                    <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="# ">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
                <div className="col-md-6 col-4 align-self-center">
                    <a href="https://wrappixel.com/templates/monsteradmin/" className="btn pull-right hidden-sm-down btn-success"> Upgrade to Pro</a>
                </div>
            </div>
        );
    }
}

export default PartialView;