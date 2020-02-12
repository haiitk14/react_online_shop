import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorys from '../../components/Categorys';
import { actFetchCategorysRequest } from './../../actions/categoryAction';
import DialogCategory from './dialog';
import PartialView from '../../containers/PartialView';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


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
                <Categorys categorys={categorys}></Categorys>
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
}
const mapStateToProps = state => {
    return {
        categorys: state.categorys
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllCategory: () => {
            dispatch(actFetchCategorysRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorysContainer);