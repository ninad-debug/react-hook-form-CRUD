
import { 
    TableContainer, 
    Table, 
    TableHead, 
    TableBody, 
    TableRow, 
    Paper,
    TableCell,
    Stack,
    IconButton
} from '@mui/material'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MuiTable = () => {

  const [ data , setData ] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      setData(response.data);
    }catch(error){
      console.log('Error Fetching Data', error)
    }
  };

  const handleEditUser = (id) => {
    navigate("edituser/"+id)
  }

  useEffect(() => {
    fetchData();
  }, [])

  console.log('data', data);
  return (
    <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
            </TableHead>
            <TableBody>
                {
                    data.map( row => (
                        <TableRow 
                            key={row.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell>{row?.id}</TableCell>
                            <TableCell>{row?.firstname}</TableCell>
                            <TableCell>{row?.lastname}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                <Stack spacing={0} direction={'column'}>
                                    <IconButton aria-label='edit' color='success' size='small' onClick={() => handleEditUser(row?.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label='edit' color='warning' size='small'>
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTable