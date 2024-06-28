       
import React from 'react';
import { AppBar, Toolbar, Typography, Button,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
     
const NavigationBar =()=> {


        return (
       
        <AppBar position="static">
          <Toolbar>
             
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Cricket Dashboard
              </Typography>
              <Box sx = {{flexGrow:1,  display: 'flex',justifyContent: 'center'}}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/match-analysis">Match Analysis</Button>
              <Button color="inherit" component={Link} to="/player-statistics">Player Statistics</Button>
              <Button color="inherit" component={Link} to="/team-comparison">Team Comparison</Button>
              </Box>
          </Toolbar>
      </AppBar>
    
    
        );
    
    
    };
    

    export default NavigationBar;
       
       
    