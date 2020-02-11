import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: "Dashboard",
        to: "/",
        exact: true,
        icon: "fa fa-clock-o"
    },
    {
        name: "Thể loại",
        to: "/categorys",
        exact: false,
        icon: "fa fa-book"
    },
    {
        name: "Bài viết",
        to: "/article",
        exact: false,
        icon: "fa fa-edit"
    },
    {
        name: "Hình ảnh",
        to: "/images",
        exact: false,
        icon: "fa fa-image"
    },
    {
        name: "Thiết lập",
        to: "/setting",
        exact: false,
        icon: "fa fa-cog"
    },
    // {
    //     name: "Error 404",
    //     to: "/error-404",
    //     exact: false,
    //     icon: "fa fa-info-circle"
    // }
];
const MenuLink = ({ label, to, activeOnlyWhenExact, icon }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active' : '';
            return (
                <li className={`${active}`}>
                    <Link to={to} className={`${active} waves-effect`} >
                        <i className={`${icon} m-r-10`} aria-hidden="true"></i>
                        {label}
                    </Link>
                </li>
            )
        }} />
    );
}

class SideBar extends Component {
    showMenus = (menus) => {
        let result = null;

        if (menus.length > 0) {
            result = menus.map((item, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={item.name}
                        to={item.to}
                        activeOnlyWhenExact={item.exact}
                        icon={item.icon}
                    />
                )
            })
        }
        return result;
    }
    render() {
        return (
            <aside className="left-sidebar">
                <div className="scroll-sidebar">
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav">
                            {this.showMenus(menus)}
                        </ul>
                        <div className="text-center m-t-30">
                            <a href="https://wrappixel.com/templates/monsteradmin/" className="btn btn-danger"> Upgrade to Pro</a>
                        </div>
                    </nav>
                </div>
            </aside>

        );
    }
}

export default SideBar;