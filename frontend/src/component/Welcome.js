import { Grid, Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "", minHeight: "93vh",backgroundColor:"#F6DEC8" }}
    >
      <Grid item>
        <Typography variant="h2"></Typography>
      </Grid>
    </Grid>,

    <div style={{display:"flex" , justifyContent:"space-between"}} className="main">

<h1 style={{fontSize:"70px",fontWeight:"bolder",color:"#218C8C",marginLeft:"0px",lineHeight:"85px" }}>
  Welcome to <br></br> <span style={{fontSize:"100px",color:"#FF424D" }}>Job Portal</span>
</h1>

    <div className="main_gif">
    <img style={{width:"40vw",marginLeft:"220px" }} src="https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"></img>

    </div></div>

    
    
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;