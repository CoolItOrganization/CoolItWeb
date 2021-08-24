import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import React from "react";
import HowToRegIcon from "@material-ui/icons/HowToReg";
const LinkRo = styled(LinkR)`
font-weight: bold;
text-decoration: none;
   
`;
const paperStyle = {
  padding: 20,
  height: "100%",
  width: 310,
  margin: "20px auto",
};
const avatarStyle = { color: "#141645", backgroundColor: "#5FA5F9" };
const ButtonStyle = {
  color: "#141645",
  backgroundColor: "#5FA5F9",
  margin: "8px 0",
};

const SignUp = () => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <HowToRegIcon />
          </Avatar>
          <h2 style={{ color: "#141645" }}>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
          ></TextField>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your Email"
          ></TextField>
          <FormControl component="fieldset" style={{marginTop:"20px"}}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{display:"initial"}}
            >
              <FormControlLabel
                value="female"
                control={<Radio color="primary"/>}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male" />
              
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          ></TextField>
          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Create a password"
          ></TextField>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            placeholder="Re enter the password"
          ></TextField>
          <Button
            style={ButtonStyle}
            type="Submit"
            color="#141645"
            fullWidth
            variant="contained"
          >
            Sign Up
          </Button>
            <Typography style={{ marginBottom:"20px"}}> Already have an account? 
            <LinkRo to="/signin" >
                Sign Up
            </LinkRo>
            </Typography>
            <h2 >
            <LinkRo to="/" style={{ marginTop:"100px",color:"#141645" , border:"4px solid #141645 ", borderRadius:"8px", padding:"4px",background:"#5FA5F9" }} >
                Go back to home
            </LinkRo>
            </h2>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUp;
