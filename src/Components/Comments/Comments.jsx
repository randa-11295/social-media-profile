import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {  pink } from '@mui/material/colors';

export default function AlignItemsList() {
  return (<>
    
    <List sx={{ width: '100%',  bgcolor: 'background.paper' , marginTop : "15px" }}>
    <Divider  />

      <ListItem alignItems="flex-start">

        <ListItemAvatar>
          <Avatar   sx={{ bgcolor: pink[500] ,  width: 35, height: 35 , fontSize : '1.1rem'  }} > R </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' , fontSize : '.8rem'  }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography >
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
   </>
  );
}
