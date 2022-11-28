import React ,{useEffect ,useState} from 'react';
import { Container ,Box ,Grid ,List,ListItem,ListItemText,Button ,Typography} from '@material-ui/core';
import s from '../components/pagesComponent/Admin/Admin.module.scss';
import withAuth from 'src/HOC/withAdmin';
import Layout from 'src/components/DashboardLayout/Layout'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from "../utils/axios"
import { IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import * as Yup from 'yup';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Admin = () => {
  const [data,setData]=useState([])
  const [usertype,setusertype]=useState("client")
useEffect(()=>{
  getData()
},[usertype])

const { enqueueSnackbar, closeSnackbar } = useSnackbar();



  const getData = async () =>{

    try{
      const getAllUser = await axios.get(`${process.env.NEXT_PUBLIC_baseUrl}users/alluser?type=${usertype=="unverified"?"client":usertype}&isactive=true&isverified=${usertype=="unverified"?false:true}`,
      )
      if(getAllUser?.status == 200){
        var datas = getAllUser.data;
        setData(
          datas.map((r) => {
            return{
              id: r._id,
              email: r.email,
              firstname: r.firstname,
              lastname: r.lastname,
              clickupids: r.clickupids,
              jotformlink: r.jotformlink,
              password: r.password,
              usertype: r.usertype,
              isverified: r.isverified,
              isactive: r.isactive
            }
          })
        );
  
  
      }else{
      
      }
    }catch(error){
      enqueueSnackbar('Unable to fetch user records', {
        variant: 'error'})
    }
  

    
  }



  const addUser=async(r)=>{
    let dataClone=[...data]
    dataClone.push({
      id: r._id,
      email: r.email,
      firstname: r.firstname,
      lastname: r.lastname,
      clickupids: r.clickupids,
      jotformlink: r.jotformlink,
      password: r.password,
      usertype: r.usertype,
      isverified: r.isverified,
      isactive: r.isactive
    })
    setData(dataClone)
  }

  const updateRecord=(newdata)=>{
let recordIndex=data.findIndex(i=>i.id==newdata.id)
let dataClone=[...data]
dataClone[recordIndex]=newdata
console.log(recordIndex,newdata,data)
setData(dataClone)
  }

  const deleteRecord=(newdata)=>{
    let recordIndex=data.findIndex(i=>i.id==newdata.id)
let dataClone=[...data]
dataClone.splice(recordIndex,1)

setData(dataClone)
  }
 

  const classes = useStyles();
  
  
  
  return(
  <div className={s.mainadmin}>
    <AlertDialog />
  
    <Container maxWidth={"lg"}>
     <Box display={"flex"} style={{width:"100%"}}>
   
   <Box component={Paper} style={{height:"100%"}}>
   <List component="nav" >
        <ListItem button onClick={()=>setusertype("admin")} selected={usertype=="admin"}>
      
          <ListItemText primary="Admins"  />
        </ListItem>
        <ListItem button selected={usertype=="client"} onClick={()=>setusertype("client")}>
       
          <ListItemText primary="Verified Users"  />
        </ListItem>
        <ListItem button selected={usertype=="unverified"} onClick={()=>setusertype("unverified")}>
       
       <ListItemText primary="Unverified Users"  />
     </ListItem>
      </List>
   </Box>
   <Box style={{width:"100%" ,paddingLeft:32,paddingRight:32}}>
   <AddNewUserDialog addUser={addUser}/>
   <br/>
   <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">CLICKUP ID</TableCell>
            <TableCell align="right">JOTFORM LINK</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.firstname+" "+row.lastname}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.clickupids}</TableCell>
              <TableCell align="right">{row.jotformlink}</TableCell>
              <TableCell align="right">
                <Box display={"flex"}>
                <FormDialog data={row} updateRecord={updateRecord}>
                <EditIcon/>
                </FormDialog>
                <AlertDialog data={row} deleteRecord={deleteRecord}>
                 <DeleteIcon/>
                 </AlertDialog>
                 </Box>
                 </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Box>
     </Box>
    </Container>
  </div>
);
}



 function FormDialog(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    clickupids:"",
    jotformlink:"",
  });

  useEffect(()=>{

setValues(
{firstname:props.data?.firstname,
  lastname:props.data?.lastname,
  email :props.data?.email,
  clickupids:props.data?.clickupids,
  jotformlink:props.data?.jotformlink}
)
  },[props.data])

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
    firstname:Yup.string().required("firstname is required"),
  lastname:Yup.string(),
  clickupids:Yup.string(),
    jotformlink:Yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });



  const handleClose = () => {
    setOpen(false);
  };


  const SaveForm=(values)=>{
    axios.put(`${process.env.NEXT_PUBLIC_baseUrl}users/`, {...props.data,id:props.data.id,...values,}).then(res=>{
      setOpen(false);
      enqueueSnackbar('Successfully updated record', {
        variant: 'success'})
      props.updateRecord({...props.data,id:props.data.id,...values,})
    }).catch(err=>{
      enqueueSnackbar('Error in updating record', {
        variant: 'error'})
    })


  }

  

  return (
    <div>
     <IconButton onClick={()=>setOpen(true)}>{props.children}</IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Grid container spacing={2}   justifyContent="center"
  alignItems="center">
            <Grid item sm={12}>
            <TextField
            defaultValue={values.firstname}
            {...register('firstname')}
            autoFocus
            variant='outlined'
            margin="dense"
            id="name"
           placeholder='First Name'
            type="text"
            fullWidth
          />
            </Grid>
            <Grid item sm={12}>
            <TextField
             defaultValue={values.lastname}
             {...register('lastname')}
            autoFocus
            variant='outlined'
            margin="dense"
            id="name"
           placeholder='Last Name'
            type="text"
            fullWidth
          />
              </Grid>
              <Grid item sm={12}>
                 
           <TextField
            defaultValue={values.email}
            autoFocus
            variant='outlined'
            {...register('email')}
            margin="dense"
            id="name"
           
           placeholder='Email'
            type="email"
            fullWidth
          />
              </Grid>
              <Grid item sm={12}>
              
           <TextField
            defaultValue={values.clickupids}
            autoFocus
            variant='outlined'
            margin="dense"
            id="name"
           placeholder='Clickup id'
           {...register('clickupids')}
            type="text"
            fullWidth
          />
              </Grid>
              <Grid item sm={12}>
              <TextField
            autoFocus
            defaultValue={values.jotformlink}
            variant='outlined'
            margin="dense"
            id="name"
            {...register('jotformlink')}
           placeholder='Jotform id'
            type="text"
            fullWidth
          />
              </Grid>
          </Grid>
         
      


          
        </DialogContent>
        <DialogActions style={{padding:32}}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(SaveForm)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteUser=()=>{

    axios.post(`${process.env.NEXT_PUBLIC_baseUrl}users/delete`, {...props.data,id:props.data.id,isactive:false}).then(res=>{
      setOpen(false);
      enqueueSnackbar('Successfully deleted record', {
        variant: 'success'})
      props.deleteRecord({...props.data,id:props.data.id})
    }).catch(err=>{
      enqueueSnackbar('Error in deleting record', {
        variant: 'error'})
    })
    handleClose()
  }

  return (
    <div>
      <IconButton onClick={()=>setOpen(true)}>{props.children}</IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure ?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           You are going to delete <b>{props.data?.firstname+" "+props.data?.lastname} </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteUser} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}




function AddNewUserDialog(props) {
  const [open, setOpen] = useState(false);
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    clickupids:"",
    jotformlink:"",
    password:""
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const rePass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is required'),
    firstname:Yup.string().required("firstname is required"),
    password: Yup.string().min(8,"Password should contain at least 8 characters").matches(rePass,"Password should be less than 12 characters").matches(rePass,"Password should include at least one number, one uppercase letter, and one lowercase letter").required('Password is required'),
  lastname:Yup.string(),
  clickupids:Yup.string(),
    jotformlink:Yup.string(),
    usertype:Yup.string().required("Usertype is required")
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });



  const handleClose = () => {
    setOpen(false);
    reset({})
  };


  const SaveForm=(values)=>{
    axios.post(`${process.env.NEXT_PUBLIC_baseUrl}users/`, {...values,domain:window.location.origin}).then(res=>{
      setOpen(false);
      reset({ firstname: "",
      lastname: "",
      email: "",
      clickupids:"",
      jotformlink:"",
    password:""})
      enqueueSnackbar('Record added successfully', {
        variant: 'success'})

    props.addUser(res.data)
    }).catch(err=>{
      reset({ firstname: "",
      lastname: "",
      email: "",
      clickupids:"",
      jotformlink:"",
    password:""})
      enqueueSnackbar('Error in adding record ||'+err.response.data.error, {
        variant: 'error'})
    })


  }

  
console.log(errors)
  return (
    <div>
     <Button onClick={()=>setOpen(true)} variant={"outlined"} color="primary">Add User</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
        <DialogContent>
  
          <Grid container spacing={2}   justifyContent="center"
  alignItems="center">
            <Grid item sm={12}>
            <Typography>Firstname</Typography>
            <TextField
   
            {...register('firstname')}
            autoFocus
            variant='outlined'
            margin="dense"
            id="name"
            helperText={errors?.firstname?.message}
            error={errors?.firstname?.message}
           placeholder='First Name'
            type="text"
            fullWidth
          />
            </Grid>
            <Grid item sm={12}>
            <Typography>Lastname</Typography>
            <TextField
           
             {...register('lastname')}
            autoFocus
            variant='outlined'
            margin="dense"
            helperText={errors?.lastname?.message}
            error={errors?.lastname?.message}
            id="name"
           placeholder='Last Name'
            type="text"
            fullWidth
          />
              </Grid>
              <Grid item sm={12}>
              <Typography>Email</Typography>
           <TextField
      
            autoFocus
            variant='outlined'
            {...register('email')}
            helperText={errors?.email?.message}
            error={errors?.email?.message}
            margin="dense"
            id="name"
           
           placeholder='Email'
            type="email"
            fullWidth
          />
          
              </Grid>
              <Grid item sm={12}>
              <Typography>Password</Typography>
              <TextField
         
         autoFocus
         variant='outlined'
         {...register('password')}
         helperText={errors?.password?.message}
         error={errors?.password?.message}
         margin="dense"
         id="name"
        
        placeholder='password'
         type="password"
         fullWidth
       />
              </Grid>
              <Grid item sm={12}>
              <Typography>Clicup id</Typography>
           <TextField
           
            autoFocus
            variant='outlined'
            margin="dense"
            id="name"
           placeholder='Clickup id'
           {...register('clickupids')}
            type="text"
            fullWidth
          />
              </Grid>
              <Grid item sm={12}>
              <Typography>Jotform id</Typography>
              <TextField
            autoFocus
          
            variant='outlined'
            margin="dense"
            id="name"
            {...register('jotformlink')}
           placeholder='Jotform id'
            type="text"
            fullWidth
          />
       
              </Grid>
              <Grid item sm={12}>
              <Typography>User type</Typography>
              <FormControl fullWidth>
       
       <Select
         helperText={errors?.usertype?.message}
         error={errors?.usertype?.message}
        variant='outlined'
         {...register('usertype')}
       
       >
         <MenuItem value={"client"}>Client</MenuItem>
         <MenuItem value={"admin"}>Admin</MenuItem>
        
       </Select>
     </FormControl>
              </Grid>
          </Grid>
         
      


          
        </DialogContent>
        <DialogActions style={{padding:32}}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(SaveForm)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



let AuthAdmin=withAuth(Admin)
AuthAdmin.hasLocalLayout=true
AuthAdmin.getLayout = function getLayout(page) {
 return <Layout >{page}</Layout>;
};


export default AuthAdmin;
