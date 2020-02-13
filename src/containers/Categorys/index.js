import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorys from '../../components/Categorys';
import PartialView from '../../containers/PartialView';
import { 
    actFetchCategorysRequest, actAddCategoryRequest, actDeleteCategoryRequest, actEditCategoryRequest
 } from './../../actions/categoryAction';
import DialogCategory from './dialog';

class CategorysContainer extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        this.props.getAllCategory();
    }

    render() {
        let current = "Quản lý thể loại";
        let { categorys } = this.props;
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
                <Categorys
                    categorys={categorys}
                    deleteCategory={this.deleteCategory}
                    editCategory={this.editCategory}
                >
                </Categorys>
                {this.renderDialog()}
            </div>
        );
    }
    renderDialog = () => {
        let { open } = this.state;
        return (
            <DialogCategory
                open={open}
                handleClose={this.handleClose}
                saveForm={this.saveForm}
            ></DialogCategory>
        );
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        })
    };
    handleClose = () => {
        this.setState({
            open: false
        })
    }

    // Event call API
    saveForm = (category) => {
        this.props.saveCategoryF(category);
        this.handleClose();
    }
    deleteCategory = (id) => {
        this.props.deleteCategoryF(id);
    }
    editCategory = (id) => {
        this.props.editCategoryF(id);
        console.log("A");
    }
    // END event call API
}
const mapStateToProps = state => {
    return {
        categorys: state.categorys,
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllCategory: () => {
            dispatch(actFetchCategorysRequest());
        },
        saveCategoryF: (category) => {
            dispatch(actAddCategoryRequest(category));
        },
        deleteCategoryF: (id) => {
            dispatch(actDeleteCategoryRequest(id));
        },
        editCategoryF: (id) => {
            dispatch(actEditCategoryRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorysContainer);