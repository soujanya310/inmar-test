import React,{useState} from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
// import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import validator from 'validator';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from 'react-redux';
import * as signupActions from './actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {

  const [errorMessage, setErrorMessage] = useState('')
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();

  const onSignupClick = () => {
    if(!userData.firstName && !userData.lastName && !userData.email && !userData.password){
      window.alert("fields can not be empty")
      props.history.push('/sign-up')
    }
    else{
      dispatch(signupActions.userSignUpDataRequest(userData))
      window.alert("successfully created the account");
      props.history.push('/login')
    }     
  }

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
      let tempObject = userData;
      tempObject["password"] = value;
      setUserData(tempObject)
    } else {
      setErrorMessage('')
    }
  }

  const onInputFieldsChange = (e) => {
    let tempObject = userData;
    if(e.target.name === "email"){
      tempObject["email"] = e.target.value + "@inmar.com"
    }
    else{
      tempObject[e.target.name] = e.target.value;
    }
    setUserData(tempObject)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e)=>onInputFieldsChange(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                // autoComplete="lname"
                onChange={(e)=>onInputFieldsChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" style={{width:'100%'}}>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">@inmar.com</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'Email',
                    }}
                    labelWidth={0}
                    name="email"
                    autoComplete='off'
                    onChange={(e)=>onInputFieldsChange(e)}
                />
            </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title={<div style={{fontSize:'16px',lineHeight: 1.5}}>Password should contain minimum characters 8,minimum lower case letters 1,
                  minimum upper case letters 1, minimum numbers 1, minimum special characters 1</div>}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete='off'
                  inputProps={{
                    autocomplete: 'new-password',
                    form: {
                      autocomplete: 'off',
                    },
                  }}
                  // autoComplete="current-password"
                  onChange={(e) => validate(e.target.value)}
                />
              </Tooltip>
              <span style={{fontWeight: 'bold',color: errorMessage === 'Is Strong Password' ? 'green' : 'red'}}>{errorMessage}</span>
            </Grid>
          </Grid>
          <Grid className="login-buttons" container style={{display:'flex',alignItems:'center',justifyContent:'space-between', marginTop:'10px'}} >
            <Grid item>
              <Link to="/login" color="primary">
                Already have an account? Sign in
              </Link>
            </Grid>
            <Grid>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={()=>onSignupClick()}
                    // className={classes.submit}
                >
                    Sign Up
                </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
