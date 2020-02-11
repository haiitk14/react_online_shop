import React, { Component } from 'react';
import {
    Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Card, 
    CardContent, CardActions, Grid
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
                    {"Thông tin chi tiết"}
                </DialogTitle>
                <DialogContent>

                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Box component="span" m={1}>
                                <Card>
                                    <CardContent>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box component="span" m={1}>
                                <Card>
                                    <CardContent>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                   
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        
        );
    }
}

export default DialogCategory;