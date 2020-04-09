import React, { Component } from 'react';
import { Grid, Box, Card, Typography, CardContent, TextField } from '@material-ui/core';
import { INITIAL_SETTING } from './../../constants';

class SettingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_SETTING;
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        let { txtCompanyName, txtWebsite, txtSlogan, txtCopyright, txtEmail, txtHotline, txtAddress, txtLocation } = this.state;
        return (
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Box component="span" m={1}>
                        <Card>
                            <Box m={1}>
                                <Typography variant="subtitle2">
                                    Thông tin chung
                            </Typography>
                            </Box>

                            <CardContent>
                                <form noValidate autoComplete="off">
                                    <Grid container spacing={5}>
                                        <Grid item xs={12}>
                                            <TextField label="Tên công ty" fullWidth
                                                name="txtCompanyName"
                                                value={txtCompanyName}
                                                onChange={this.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Website" fullWidth
                                                name="txtWebsite"
                                                value={txtWebsite}
                                                onChange={this.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Slogan" fullWidth
                                                name="txtSlogan"
                                                value={txtSlogan}
                                                onChange={this.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Copyright" fullWidth
                                                name="txtCopyright"
                                                value={txtCopyright}
                                                onChange={this.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Email" fullWidth
                                                name="txtEmail"
                                                value={txtEmail}
                                                onChange={this.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Hotline" fullWidth
                                                name="txtHotline"
                                                value={txtHotline}
                                                onChange={this.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Địa chỉ" fullWidth
                                                name="txtAddress"
                                                value={txtAddress}
                                                onChange={this.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField label="Tọa độ" fullWidth
                                                name="txtLocation"
                                                value={txtLocation}
                                                onChange={this.onChange}
                                            />
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
                                <Box m={1}>
                                    <Typography variant="subtitle2">
                                        Thông tin chung
                                </Typography>
                                </Box>

                                <CardContent>
                                    <form noValidate autoComplete="off">
                                        <Grid container spacing={5}>
                                            <Grid item xs={12}>
                                                <TextField label="Tên công ty" fullWidth
                                                    name="txtCompanyName"
                                                    value={txtCompanyName}
                                                    onChange={this.onChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Website" fullWidth
                                                    name="txtWebsite"
                                                    value={txtWebsite}
                                                    onChange={this.onChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Slogan" fullWidth
                                                    name="txtSlogan"
                                                    value={txtSlogan}
                                                    onChange={this.onChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Copyright" fullWidth
                                                    name="txtCopyright"
                                                    value={txtCopyright}
                                                    onChange={this.onChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Email" fullWidth
                                                    name="txtEmail"
                                                    value={txtEmail}
                                                    onChange={this.onChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Hotline" fullWidth
                                                    name="txtHotline"
                                                    value={txtHotline}
                                                    onChange={this.onChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Địa chỉ" fullWidth
                                                    name="txtAddress"
                                                    value={txtAddress}
                                                    onChange={this.onChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField label="Tọa độ" fullWidth
                                                    name="txtLocation"
                                                    value={txtLocation}
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
        );
    }
}

export default SettingContainer;