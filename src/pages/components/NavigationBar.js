       
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';
import { useState } from 'react';
     
const NavigationBar =()=> {

      //creating a state variable
      //[currentstate, UpdateCurrentState]

      const [isDrawerOpen, setDrawerOpen] = useState("False");

      const handleDrawerOpen = ()=>{


           setDrawerOpen(true);


      };
      const handleDrawerClose = ()=>{


        setDrawerOpen(false);


   };


const drawerList = (
    //role of this drawer list is prsentation only
    //will trigger the handleDrawerClose which sets the useState

    <Box sx = {{width:250}}    
    role = "presentation"
    onClick = {handleDrawerClose}>
        <List>

                <ListItem button component={Link} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/match-analysis">
                    <ListItemText primary="Match Analysis" />
                </ListItem>
                <ListItem button component={Link} to="/player-statistics">
                    <ListItemText primary="Player Statistics" />
                </ListItem>
                <ListItem button component={Link} to="/team-comparison">
                    <ListItemText primary="Team Comparison" />
                </ListItem>


        </List>




    </Box>




);

        return (
       <>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick = {handleDrawerOpen}>
               <MenuIcon />

            </IconButton>
             
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> {/*the typograph is in a div to make it more responsive*/}
                  Cricket Dashboard
              </Typography>
              <Box sx = {{flexGrow:1,  border: '2px solid grey', display: { xs: 'none', md: 'flex' },justifyContent: 'center'}}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/match-analysis">Match Analysis</Button>
              <Button color="inherit" component={Link} to="/player-statistics">Player Statistics</Button>
              <Button color="inherit" component={Link} to="/team-comparison">Team Comparison</Button>
              </Box>
          </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>  {/*anchores the elements to the left, open or close based on state, onClose closes the box if clicked outside*/}
                {drawerList}
      </Drawer>
     </>
    
        );
    
    
    };
    

    export default NavigationBar;
       
       
    