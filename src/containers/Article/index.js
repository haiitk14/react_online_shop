import React, { Component } from 'react';
import Article from '../../components/Article';
import DialogArticle from './dialog';
import PartialView from '../PartialView';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { actFetchArticlesRequest, actAddArticleRequest, atcDeleteArticleRequest, 
    atcEditArticleRequest, actUpdateArticleRequest, actUpdateStatusArticleRequest } from '../../actions/articleAction';
import { actGetCategoryByIsPublicRequest } from './../../actions/categoryAction';
import { actResetItemEditing } from './../../actions/index';

class ArticleContainer extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        this.props.getAllArticles();
        this.props.getCategoryIsPublicF(true);
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        });
        this.props.resetItemEditing();
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    saveForm = (article) => {
        this.props.saveArticleF(article);
        this.handleClose();
    }
    deleteArticle = (id) => {
        this.props.deleteArticleF(id);
    }
    editArticle = (id) => {
        this.props.editArticleF(id);
        this.setState({
            open: true
        });
    }
    updateArticle = (article) => {
        this.props.updateArticleF(article);
        this.handleClose();
    }
    updateStatus = (article) => {
        this.props.updateStatusF(article);
    }
    renderDialog = () => {
        let { open } = this.state;
        let { categorysParam, itemEditing } = this.props;

        return (
            <DialogArticle
                open={open}
                handleClose={this.handleClose}
                saveForm={this.saveForm}
                itemEditing={itemEditing}
                updateArticle={this.updateArticle}
                categorysParam={categorysParam}
            ></DialogArticle>
        );
    }

    render() {
        let current = "Quản lý bài viết";
        let { articles } = this.props;
        return (
            <div className="container-fluid">
                <PartialView
                    current={current}
                ></PartialView>
                <Box mb={2}>
                    <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                        <AddIcon />
                        Thêm mới
                    </Button>
                </Box>
                <Article
                    articles={articles}
                    deleteArticle={this.deleteArticle}
                    editArticle={this.editArticle}
                    updateStatus={this.updateStatus}
                >
                </Article>
                {this.renderDialog()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        categorysParam: state.categorysParam,
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllArticles: () => {
            dispatch(actFetchArticlesRequest())
        },
        getCategoryIsPublicF: (ispublic) => {
            dispatch(actGetCategoryByIsPublicRequest(ispublic))
        },
        saveArticleF: (article) => {
            dispatch(actAddArticleRequest(article));
        },
        deleteArticleF: (id) => {
            dispatch(atcDeleteArticleRequest(id));
        },
        editArticleF: (id) => {
            dispatch(atcEditArticleRequest(id))
        },
        updateArticleF: (article) => {
            dispatch(actUpdateArticleRequest(article));
        },
        resetItemEditing: () => {
            dispatch(actResetItemEditing())
        },
        updateStatusF: (article) => {
            dispatch(actUpdateStatusArticleRequest(article));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);