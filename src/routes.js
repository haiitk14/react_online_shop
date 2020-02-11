import React from 'react';
import DashboardContainer from './containers/DashboardContainer';
import ProfileContainer from './containers/ProfileContainer';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <DashboardContainer></DashboardContainer>
    },
    {
        path: '/profile',
        exact: false,
        main: ({match, location}) => <ProfileContainer match={match} location= {location}></ProfileContainer>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound></NotFound>
    }
]

export default routes;