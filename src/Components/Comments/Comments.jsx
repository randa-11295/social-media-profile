import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {  pink } from '@mui/material/colors';
import { useContext , useEffect , useState } from 'react';
import CommentsContext from '../../Context/commentsContext';

export default function Comments(props) {
     const commentsData = useContext(CommentsContext);
     const [commentsPost , setcommentsPost] = useState([])

     useEffect(()=>{
        const  commentsFilter =  commentsData.comments?.filter((el)=>{
             return el.postId === props.postId
        })
        setcommentsPost(commentsFilter)

     },[commentsData.comments,  props.postId])

  return (<>
    
    <List sx={{ width: '100%',  bgcolor: 'background.paper' , paddingTop : "15px" }}>
     { commentsPost.map(el =>{ return ( <aside key={ el.id}>
       <Divider  />
       <ListItem alignItems="flex-start">

        <ListItemAvatar>
          <Avatar   sx={{ bgcolor: pink[500] ,  width: 35, height: 35 , fontSize : '1.1rem'  }} > {el.name[0]} </Avatar>
        </ListItemAvatar>

        <ListItemText 
          primary={el.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ fontSize : '.8rem'  }}
                component="p"
              >
               
                 {el.body}
              </Typography >
            </React.Fragment>
          }
        />
      </ListItem>
      </aside>
     )})}

    </List>
   </>
   
  );
}
