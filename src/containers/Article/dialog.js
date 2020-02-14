import React, { Component } from 'react';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card,
    CardContent, Grid, Checkbox, Typography, FormControl, InputLabel, NativeSelect, FormHelperText
} from '@material-ui/core';
import { INITIAL_ARTICLE } from './../../constants/index';

class DialogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_ARTICLE;
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
    render() {
        let { open, handleClose } = this.props;
        let { sltcategoryId, txtName, txtSlug, txtDescription, txtOrder, chkIsPublic, txtTitleSeo, txtKeywordsSeo, txtDescriptionSeo } = this.state;
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
                <DialogTitle id="alert-dialog-slide-title">Chi tiết</DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
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
                                                    <FormControl error fullWidth>
                                                        <InputLabel htmlFor="name-native-error">Name</InputLabel>
                                                        <NativeSelect
                                                            value={sltcategoryId}
                                                            onChange={this.onChange}
                                                            name="sltcategoryId"
                                                            inputProps={{
                                                                id: 'name-native-error',
                                                            }}
                                                        >
                                                            <option value="" />
                                                            <option value="hai">Hai</option>
                                                            <option value="olivier">Olivier</option>
                                                            <option value="kevin">Kevin</option>
                                                        </NativeSelect>
                                                        <FormHelperText>Error</FormHelperText>
                                                    </FormControl>
                                                </Grid>
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
                                                        name="txtSlug"
                                                        value={txtSlug}
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
                        <Grid item xs={8}>
                        // NỘI DUNG ARTICLE
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

export default DialogArticle;