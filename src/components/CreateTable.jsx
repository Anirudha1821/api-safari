import { useState } from 'react';

import { Box, Typography, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';
import { makeStyles } from '@mui/styles';

import AddRow from './AddRow';

const useStyles = makeStyles({
    textfield: {
        width: '100%',
        color: 'white',
    },
    tablecell: {
        padding: ['7px 5px', '!important'],
        border: '1px solid rgba(224, 224, 224, 1)',
        borderCollapse: 'collapse',
        color: 'white',
    },
    checkbox: {
        padding: ['2px 5px', '!important'],
        color: 'white',
    }
});

const CreateTable = ({ text, data, setData }) => {
    const classes = useStyles();
    const [rows, addRows] = useState([0]);
    
    return (
        <Box>
            <Typography mt={2} mb={2}>{text}</Typography>
            <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224, 224, 1)' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color: 'white'}} className={classes.tablecell}></TableCell>
                        <TableCell sx={{color: 'white'}} className={classes.tablecell}>KEY</TableCell>
                        <TableCell sx={{color: 'white'}} className={classes.tablecell}>VALUE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{color: 'white'}}>
                    {
                        rows.map((row, index) => {
                            return <AddRow 
                                addRows={addRows} 
                                rowId={index} 
                                key={index}
                                setData={setData}
                                data={data} 
                                sx={{color: 'white'}}
                            />
                        })
                    }
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable;