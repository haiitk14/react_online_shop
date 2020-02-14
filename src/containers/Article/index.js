import React, { Component } from 'react';
import Article from '../../components/Article';
import DialogArticle from './dialog';
import PartialView from '../PartialView';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { actFetchArticlesRequest } from '../../actions/articleAction'

const articles = [];

class ArticleContainer extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        this.props.getAllArticles();
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        });
        // this.props.actResetItemEditing();
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    renderDialog = () => {
        let { open } = this.state;
        //let { itemEditing } = this.props;
        return (
            <DialogArticle
                open={open}
                handleClose={this.handleClose}
                // saveForm={this.saveForm}
                // itemEditing={itemEditing}
                // updateCategory={this.updateCategory}
            ></DialogArticle>
        );
    }
    render() {
        let current = "Quản lý bài viết";
        let { articles } = this.props;
        console.log(articles);
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
                >
                </Article>
                {this.renderDialog()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllArticles: () => {
            dispatch(actFetchArticlesRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);