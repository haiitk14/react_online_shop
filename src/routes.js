import React from 'react';
import DashboardContainer from './containers/DashboardContainer';
import NotFound from './components/NotFound';
import CategorysContainer from './containers/CategorysContainer';
import ArticleContainer from './containers/ArticleContainer';
import ImagesContainer from './containers/ImagesContainer';
import SettingContainer from './containers/SettingContainer'

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