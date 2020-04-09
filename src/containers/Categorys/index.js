import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorys from '../../components/Categorys';
import PartialView from '../../containers/PartialView';
import { actAddCategoryRequest, actDeleteCategoryRequest, actEditCategoryRequest, actFetchCategorysRequest, actUpdateCategoryRequest, actUpdateStatusRequest } from './../../actions/categoryAction';
import { actResetItemEditing } from './../../actions/index';
import DialogCategory from './dialog';
import {
     Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText
} from '@material-ui/core';

class CategorysContainer extends Component {
    state = {
        open: false,
        openDialogDel: false,
        idDelete: ""
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
    renderDialogDelete = () => {
        let { openDialogDel } = this.state;
        return (
            <Dialog
                open={openDialogDel}
                onClose={this.handleClickDialogDel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Cảnh báo</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tất cả bài viết của thể loại sẽ bị xóa
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClickDialogDel} color="primary">
                        Hủy
                </Button>
                    <Button onClick={this.callDeleteCategory} color="primary" autoFocus>
                        Đồng ý
                </Button>
                </DialogActions>
            </Dialog>
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

    handleClickDialogDel = () => {
        let { openDialogDel } = this.state;
        this.setState({
            openDialogDel : !openDialogDel,
            idDelete: ""
        });
    }
    
    deleteCategory = (id) => {
        this.setState({
            idDelete: id,
            openDialogDel: true
        });
    }

    // Event call API
    saveForm = (category) => {
        this.props.saveCategoryF(category);
        this.handleClose();
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
    callDeleteCategory = () => {
        let { idDelete } = this.state;
        this.props.deleteCategoryF(idDelete);
        this.setState({
            openDialogDel: false
        });
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
                { this.renderDialog() }
                { this.renderDialogDelete() }
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