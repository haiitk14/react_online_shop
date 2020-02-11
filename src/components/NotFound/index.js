import React, { Component } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

class NotFound extends Component {
    render() {
        return (
            <Alert severity="error">
                <AlertTitle>404</AlertTitle>
                Không tìm thấy trang
            </Alert>
        );
    }
}

export default NotFound;