import React, { Component } from 'react';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card,
    CardContent, Grid, Checkbox, Typography
} from '@material-ui/core';

class DialogCategory extends Component {
    render() {
        let { open, handleClose } = this.props;
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
                                                    <TextField label="Tên loại" fullWidth />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Mã loại" fullWidth />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        label="Mô tả"
                                                        fullWidth
                                                        multiline
                                                        rows="2" />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Thứ tự" type="number" />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Checkbox
                                                        checked={false}
                                                        // onChange={handleChange}
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
                                                    <TextField label="Title" fullWidth />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField label="Keywords" fullWidth />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        label="Description"
                                                        fullWidth
                                                        multiline
                                                        rows="2" />
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
                        <Button variant="contained" color="primary" onClick={handleClose}>
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