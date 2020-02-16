import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorys from '../../components/Categorys';
import PartialView from '../../containers/PartialView';
import {
    actFetchCategorysRequest, actAddCategoryRequest, actDeleteCategoryRequest, actEditCategoryRequest, 
    actUpdateCategoryRequest, actUpdateStatusRequest
} from './../../actions/categoryAction';
import { actResetItemEditing } from './../../actions/index';
import DialogCategory from './dialog';

class CategorysContainer extends Component {
    state = {
        open: false
    }
    componentDidMount() {
        this.props.getAllCategory();
    }

    renderDialog = () => {
        let { open } = this.state;
        let { itemEditing } = this.props;
        return (
            <DialogCategory
                open={open}
                handleClose={this.handleClose}
                saveForm={this.saveForm}
                itemEditing={itemEditing}
                updateCategory={this.updateCategory}
            ></DialogCategory>
        );
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        });
        this.props.actResetItemEditing();
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
        this.setState({
            open: true
        });
    }
    updateCategory = (category) => {
        this.props.updateCategoryF(category);
        this.handleClose();
    }
    updateStatus = (category) => {
        this.props.upsdateStatusF(category);
    }
    // END event call API

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
                    updateStatus={this.updateStatus}
                >
                </Categorys>
                {this.renderDialog()}
            </div>
        );
    }
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
        },
        actResetItemEditing: () => {
            dispatch(actResetItemEditing());
        },
        updateCategoryF: (category) => {
            dispatch(actUpdateCategoryRequest(category))
        },
        upsdateStatusF: (category) => {
            dispatch(actUpdateStatusRequest(category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorysContainer);