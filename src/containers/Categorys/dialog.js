import React, { Component } from 'react';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card,
    CardContent, Grid, Checkbox, Typography
} from '@material-ui/core';
import { uuidv4 } from './../../commons/func';
import { toast } from 'react-toastify';


class DialogCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtCode: '',
            txtDescription: '',
            txtOrder: '',
            chkIsPublic: false,
            txtTitleSeo: '',
            txtKeywordsSeo: '',
            txtDescriptionSeo: '',
            errors: {
                txtName: 'Tối thiểu 5 ký tự'
            }
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        // check error
        let { errors } = this.state;
        switch (name) {
            case 'txtName':
                if (value.length > 5) {
                    errors.txtName = '';
                }
                break;
            default:
                break;
        }
        this.setState({
            errors,
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        let { saveForm } = this.props;
        let { txtName, txtCode, txtDescription, txtOrder, chkIsPublic, txtTitleSeo, txtKeywordsSeo, txtDescriptionSeo } = this.state;
        let { errors } = this.state;

        if (this.validateForm(errors)) {
            saveForm({
                id: uuidv4(),
                name: txtName,
                code: txtCode,
                description: txtDescription,
                order: txtOrder,
                ispublic: chkIsPublic,
                titleseo: txtTitleSeo,
                keywordsseo: txtKeywordsSeo,
                descriptionseo: txtDescriptionSeo
            });
        } else {
            toast.error("Vui lòng nhập đầy đủ thông tin");
        }
    }
    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => {
                if (val.length > 0) {
                    valid = false
                }
            });
        return valid;
    }

    render() {
        let { open, handleClose } = this.props;
        let { txtName, txtCode, txtDescription, txtOrder, chkIsPublic, txtTitleSeo, txtKeywordsSeo, txtDescriptionSeo } = this.state;
        let { errors } = this.state;
        return (
            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                maxWidth="lg"
                fullWidth={true}
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Chi tiết"}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Box component="span" m={1}>
                                <Card>
                                    <Box m={2}>
                                        <Typography variant="subtitle2">
                                            Thông tin chung
                                        </Typography>
                                    </Box>

                                    <CardContent>
                                        <form noValidate autoComplete="off">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <TextField label="Tên loại" fullWidth
                                                        name="txtName"
                                                        value={txtName}
                                                        onChange={this.onChange}
                                                        error={errors.txtName === '' ? false : true}
                                                        helperText={errors.txtName}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Mã loại" fullWidth
                                                        name="txtCode"
                                                        value={txtCode}
                                                        onChange={this.onChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Mô tả" fullWidth multiline rows="2"
                                                        name="txtDescription"
                                                        value={txtDescription}
                                                        onChange={this.onChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Thứ tự" type="number"
                                                        name="txtOrder"
                                                        value={txtOrder}
                                                        onChange={this.onChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Checkbox
                                                        name="chkIsPublic"
                                                        checked={chkIsPublic}
                                                        onChange={this.onChange}
                                                        value="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    />  Hiển thị
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box component="span" m={1}>
                                <Card>
                                    <Box m={2}>
                                        <Typography variant="subtitle2">
                                            Thông tin SEO
                                        </Typography>
                                    </Box>

                                    <CardContent>
                                        <form noValidate autoComplete="off">
                                            <Grid container spacing={1}>
                                                <Grid item xs={12}>
                                                    <TextField label="Title" fullWidth
                                                        name="txtTitleSeo"
                                                        value={txtTitleSeo}
                                                        onChange={this.onChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Keywords" fullWidth
                                                        name="txtKeywordsSeo"
                                                        value={txtKeywordsSeo}
                                                        onChange={this.onChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Description" fullWidth multiline rows="2"
                                                        name="txtDescriptionSeo"
                                                        value={txtDescriptionSeo}
                                                        onChange={this.onChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Box m={2}>
                        <Button variant="contained" color="primary" onClick={this.onSave}>
                            Lưu
                        </Button>
                        <Button variant="contained" onClick={handleClose}>Thoát</Button>
                    </Box>

                </DialogActions>
            </Dialog>

        );
    }
}

export default DialogCategory;