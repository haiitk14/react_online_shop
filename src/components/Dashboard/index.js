import React, { Component } from 'react';
import PartialView from '../../containers/PartialView';

class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <PartialView></PartialView>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Daily Sales</h4>
                                <div className="text-right">
                                    <h2 className="font-light m-b-0"><i className="ti-arrow-up text-success"></i> $120</h2>
                                    <span className="text-muted">Todays Income</span>
                                </div>
                                <span className="text-success">80%</span>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar"
                                        style={{ width: '80%', height: '6px' }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Weekly Sales</h4>
                                <div className="text-right">
                                    <h2 className="font-light m-b-0"><i className="ti-arrow-up text-info"></i> $5,000</h2>
                                    <span className="text-muted">Todays Income</span>
                                </div>
                                <span className="text-info">30%</span>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar"
                                        style={{ width: '30%', height: '6px' }}
                                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Revenue Statistics</h4>
                                <div className="flot-chart">
                                    <div className="flot-chart-content" id="flot-line-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-block">
                                <select className="custom-select pull-right">
                                    <option defaultValue >January</option>
                                    <option value="1">February</option>
                                    <option value="2">March</option>
                                    <option value="3">April</option>
                                </select>
                                <h4 className="card-title">Projects of the Month</h4>
                                <div className="table-responsive m-t-40">
                                    <table className="table stylish-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">Assigned</th>
                                                <th>Name</th>
                                                <th>Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '50px' }}><span className="round">S</span></td>
                                                <td>
                                                    <h6>Sunil Joshi</h6><small className="text-muted">Web Designer</small></td>
                                                <td>Elite Admin</td>
                                                <td>$3.9K</td>
                                            </tr>
                                            <tr className="active">
                                                <td><span className="round"><img src="../assets/images/users/2.jpg" alt="user" width="50" /></span></td>
                                                <td>
                                                    <h6>Andrew</h6><small className="text-muted">Project Manager</small></td>
                                                <td>Real Homes</td>
                                                <td>$23.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span className="round round-success">B</span></td>
                                                <td>
                                                    <h6>Bhavesh patel</h6><small className="text-muted">Developer</small></td>
                                                <td>MedicalPro Theme</td>
                                                <td>$12.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span className="round round-primary">N</span></td>
                                                <td>
                                                    <h6>Nirav Joshi</h6><small className="text-muted">Frontend Eng</small></td>
                                                <td>Elite Admin</td>
                                                <td>$10.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span className="round round-warning">M</span></td>
                                                <td>
                                                    <h6>Micheal Doe</h6><small className="text-muted">Content Writer</small></td>
                                                <td>Helping Hands</td>
                                                <td>$12.9K</td>
                                            </tr>
                                            <tr>
                                                <td><span className="round round-danger">N</span></td>
                                                <td>
                                                    <h6>Johnathan</h6><small className="text-muted">Graphic</small></td>
                                                <td>Digital Agency</td>
                                                <td>$2.6K</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <img className="card-img-top img-responsive" src="../assets/images/big/img1.jpg" alt="Card" />
                            <div className="card-block">
                                <ul className="list-inline font-14">
                                    <li className="p-l-0">20 May 2016</li>
                                    <li><a href="# " className="link">3 Comment</a></li>
                                </ul>
                                <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img className="card-img-top img-responsive" src="../assets/images/big/img2.jpg" alt="Card" />
                            <div className="card-block">
                                <ul className="list-inline font-14">
                                    <li className="p-l-0">20 May 2016</li>
                                    <li><a href="# " className="link">3 Comment</a></li>
                                </ul>
                                <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <img className="card-img-top img-responsive" src="../assets/images/big/img4.jpg" alt="Card" />
                            <div className="card-block">
                                <ul className="list-inline font-14">
                                    <li className="p-l-0">20 May 2016</li>
                                    <li><a href="# " className="link">3 Comment</a></li>
                                </ul>
                                <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Dashboard;