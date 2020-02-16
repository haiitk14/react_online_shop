import React, { Component } from 'react';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card,
    CardContent, Grid, Checkbox, Typography, FormControl, InputLabel, Select, MenuItem
} from '@material-ui/core';
import CKEditor from 'ckeditor4-react';
import { INITIAL_ARTICLE } from './../../constants/index';
import { stringToSlug, getCurrentDate } from './../../commons/func';
import { toast } from 'react-toastify';
import ImageUploader from "react-images-upload";
import "./styles.css";

class DialogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_ARTICLE;
        this.state.pictures = [];
    }
    onDrop = (pictureFiles, pictureDataURLs) => {
        this.setState({
            pictures: this.state.pictures.concat(pictureFiles)
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.resetForm();
        if (nextProps.itemEditing && nextProps.itemEditing.id) {
            let { itemEditing } = nextProps;
            let { id, categoryid, name, slug, description, image, order, ispublic, titleseo, keywordsseo, descriptionseo,
                createddate, updateddate } = itemEditing;
            this.setState({
                id: id,
                sltcategoryId: categoryid,
                txtName: name,
                txtSlug: slug,
                txtDescription: description,
                txtImage: image,
                txtOrder: order,
                chkIsPublic: ispublic,
                txtTitleSeo: titleseo,
                txtKeywordsSeo: keywordsseo,
                txtDescriptionSeo: descriptionseo,
                createdDate: createddate,
                updatedDate: updateddate,
                errors: {
                    txtName: ''
                }
            });
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onChangeValidate = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        // check error
        let { errors } = this.state;
        let generateCode = "";
        switch (name) {
            case 'txtName':
                if (value.length > 5) {
                    errors.txtName = '';
                    generateCode = stringToSlug(value);
                } else {
                    errors.txtName = 'Tối thiểu 5 ký tự';
                }
                break;
            default:
                break;
        }
        this.setState({
            errors,
            [name]: value,
            txtSlug: generateCode.length > 0 ? generateCode : ""
        });

    }
    // onChangeHandlerFile = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.files[0]);
    // }
    showCategorys = (list) => {
        let result = null;
        result = list.map((item, index) => {
            return (
                <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
            )
        });
        return result;
    }
    onSave = (e) => {
        e.preventDefault();
        let { saveForm, updateArticle, itemEditing } = this.props;
        let { id, sltcategoryId, txtName, txtSlug, txtDescription, txtImage, txtOrder, chkIsPublic, txtTitleSeo,
            txtKeywordsSeo, txtDescriptionSeo, createdDate } = this.state;
        let { errors } = this.state;
        let article = {
            id: id,
            categoryid: sltcategoryId,
            name: txtName,
            slug: txtSlug,
            description: txtDescription,
            image: txtImage,
            order: txtOrder,
            ispublic: chkIsPublic,
            titleseo: txtTitleSeo,
            keywordsseo: txtKeywordsSeo,
            descriptionseo: txtDescriptionSeo,
            createddate: createdDate,
            updateddate: getCurrentDate()
        }
        if (this.validateForm(errors)) {

            if (!itemEditing.id) {
                saveForm(article);
            } else {
                updateArticle(article);
            }
            this.resetForm();
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
    resetForm = () => {
        this.setState(INITIAL_ARTICLE);
    }

    render() {
        let { open, handleClose, categorysParam } = this.props;
        let { sltcategoryId, txtName, txtSlug, txtDescription, txtOrder, chkIsPublic,
            txtTitleSeo, txtKeywordsSeo, txtDescriptionSeo } = this.state;
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
                                                    <FormControl fullWidth>
                                                        <InputLabel >Thể loại</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-helper-label"
                                                            id="demo-simple-select-helper"
                                                            name="sltcategoryId"
                                                            value={sltcategoryId}
                                                            onChange={this.onChange}
                                                        >
                                                            {this.showCategorys(categorysParam)}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Tên bài viết" fullWidth
                                                        name="txtName"
                                                        value={txtName}
                                                        onChange={this.onChangeValidate}
                                                        error={errors.txtName === '' ? false : true}
                                                        helperText={errors.txtName}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Slug" fullWidth
                                                        name="txtSlug"
                                                        value={txtSlug}
                                                        onChange={this.onChange}
                                                        disabled
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <InputLabel >Hình ảnh</InputLabel>

                                                    <ImageUploader
                                                        withIcon={false}
                                                        withPreview={true}
                                                        label=""
                                                        buttonText="Upload Images"
                                                        onChange={this.onDrop}
                                                        imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                                        maxFileSize={1048576}
                                                        fileSizeError=" file size is too big"
                                                    />
                                                    {/* <input type="file" name="file" onChange={this.onChangeHandlerFile} /> */}

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
                            <CKEditor
                                data="<p>Some initial data</p>"
                                type="classic"
                                onChange={evt => console.log(evt.editor.getData())}
                                onBeforeLoad={(CKEDITOR) => (CKEDITOR.disableAutoInline = true)}
                            />
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