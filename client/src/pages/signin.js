import { Avatar, Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import {Link as LinkR} from "react-router-dom";
import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import styled from "styled-components";

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
const ButtonStyle = {color: "#141645", backgroundColor: "#5FA5F9", margin:"8px 0"};
const SignIn = () => {
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2 style={{ color: "#141645" }}>Sign In</h2>
          <TextField
          Placeholder="Enter UserName"
          label="UserName"
          fullWidth
          required
        />
        <TextField
          Placeholder="Enter Password"
          label="Password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button style={ButtonStyle} type="Submit" color="#141645" fullWidth variant="contained">Sign In</Button>
        <Typography> 
            <LinkRo href="#" >
                Forgot password?
            </LinkRo>
            </Typography>
            <Typography style={{ marginBottom:"20px"}}> Don't have an account? 
            <LinkRo to="/signup" >
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

export default SignIn;
