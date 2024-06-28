       
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
     
const NavigationBar =()=> {


        return (
        /*
         <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/match-analysis">Match Analysis</Link></li>
              <li><Link to="/player-statistics">Player Statistics</Link></li>
              <li><Link to="/team-comparison">Team Comparison</Link></li>
            </ul>
          </nav>
  
          */

        <AppBar position="static">
          <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Cricket Dashboard
              </Typography>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/match-analysis">Match Analysis</Button>
              <Button color="inherit" component={Link} to="/player-statistics">Player Statistics</Button>
              <Button color="inherit" component={Link} to="/team-comparison">Team Comparison</Button>
          </Toolbar>
      </AppBar>
    
    
        );
    
    
    };
    

    export default NavigationBar;
       
       
    