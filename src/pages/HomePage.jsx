import MuiTable from "../components/MuiTable"
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate('/adduser');
  }

  

  return (
    <div>
      <h2>Welcome To User Data !</h2>
      <Button variant="contained" size="small" startIcon={<PersonAddAltIcon />} onClick={handleAddUser}>
        Add User
      </Button>
      <br />
      <br />
      <MuiTable />
    </div>
  )
}

export default HomePage