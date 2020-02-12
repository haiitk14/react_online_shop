import React, { Component } from 'react';
import Dashboard from '../../components/Dashboard'

class DashboardContainer extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Dashboard></Dashboard>
        );
    }
}

export default DashboardContainer;