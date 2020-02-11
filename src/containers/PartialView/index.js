import React, { Component } from 'react';

class PartialView extends Component {
    render() {
        let { current } = this.props;
        return (
            <div className="row page-titles">
                <div className="col-md-6 col-8 align-self-center">
                    <h3 className="text-themecolor m-b-0 m-t-0">{ current }</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                        <li className="breadcrumb-item active">{ current }</li>
                    </ol>
                </div>
                {/* <div className="col-md-6 col-4 align-self-center">
                    <a href="https://wrappixel.com/templates/monsteradmin/" className="btn pull-right hidden-sm-down btn-success"> Upgrade to Pro</a>
                </div> */}
            </div>
        );
    }
}

export default PartialView;