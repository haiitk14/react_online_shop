import React, { Component } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Checkbox
} from '@material-ui/core';

class Article extends Component {
    onDelete = (id) => {
        let { deleteArticles } = this.props;
        deleteArticles(id);
    }
    onEdit = (id) => {
        this.props.editArticles(id);
    }
    render() {
        let { articles } = this.props;
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell align="left">Tên</TableCell>
                            <TableCell align="right">Thể loại</TableCell>
                            <TableCell align="right">Mô tả</TableCell>
                            <TableCell align="right">Thứ tự</TableCell>
                            <TableCell align="right">Hiển thị</TableCell>
                            <TableCell align="right">Tùy chỉnh</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articles.map((row, index) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.categoryid}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.order}</TableCell>
                                <TableCell align="right">
                                    <Checkbox
                                        checked={row.ispublic}
                                        // onChange={handleChange}
                                        value="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <Button variant="outlined" color="primary" title="Chỉnh sửa" size="small"
                                        onClick={() => { this.onEdit(row.id) }}
                                    >
                                        Sửa
                                    </Button>
                                    <Button variant="outlined" color="secondary" title="Xóa" size="small"
                                        onClick={() => { this.onDelete(row.id) }}
                                    >
                                        Xóa
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        );
    }
}

export default Article;