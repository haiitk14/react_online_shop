import React from 'react';
import DashboardContainer from './containers/Dashboard';
import NotFound from './components/NotFound';
import CategorysContainer from './containers/Categorys';
import ArticleContainer from './containers/Article';
import ImagesContainer from './containers/Images';
import SettingContainer from './containers/Setting';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <DashboardContainer></DashboardContainer>
    },
    {
        path: '/categorys',
        exact: false,
        main: ({ match, location }) => {
            return (
                <CategorysContainer
                    match={match}
                    location={location}>
                </CategorysContainer>
            )
        }
    },
    {
        path: '/article',
        exact: false,
        main: ({ match, location }) => {
            return (
                <ArticleContainer
                    match={match}
                    location={location}>
                </ArticleContainer>
            )
        }
    },
    {
        path: '/images',
        exact: false,
        main: () => <ImagesContainer></ImagesContainer>
    },
    {
        path: '/setting',
        exact: false,
        main: () => <SettingContainer></SettingContainer>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound></NotFound>
    }
]

export default routes;