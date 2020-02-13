import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './../../routes';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Router>
                <Loading></Loading>
                <ToastContainer />
                <Header></Header>
                <div id="main-wrapper">
                    <SideBar></SideBar>
                    <div className="page-wrapper">

                        {/* Nội dung */}
                        {/* Switch như witch case trong code */}
                        <Switch>
                            {
                                this.showRoutes(routes)
                            }
                           

                        </Switch>

                        <footer className="footer text-center">
                            © 2017 Monster Admin by wrappixel.com
                        </footer>
                    </div>
                </div>

            </Router>
        );
    }
    showRoutes = (routes) => {
        let result = null;
        if (routes.length > 0) {
            result = routes.map((item, index) => {
                return (
                    <Route
                        key={index}
                        path={item.path}
                        exact={item.exact}
                        component={item.main}
                    >
                    </Route>
                )
            })
        }

        return result;
    }
}
export default App;
