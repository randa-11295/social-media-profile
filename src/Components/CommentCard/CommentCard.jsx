import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  pink } from '@mui/material/colors';
import { useContext  } from 'react';
import CommentsContext from '../../Context/commentsContext';
import avatar from "../../Images/avatar.jpg"
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import EditOffIcon from '@mui/icons-material/EditOff';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Input from "../Input/Input"


export default function CommentCard(props) {
const commentsData = useContext(CommentsContext);
const [edit , setEdit] = useState(false)

const getTextComment =(val)=>{

     commentsData.editComment(props.commentdata.id , val)
     setEdit(false)
}

  return ( <ListItem alignItems="flex-start" component="section"  >

        <ListItemAvatar>
          {(  props.commentdata.name === "New Comment" ? <Avatar sx={{ width: 35, height: 35 }}  alt="user" src={avatar}/> :
            <Avatar   sx={{ bgcolor: pink[500] ,  width: 35, height: 35 , fontSize : '1.1rem'  }} > {props.commentdata.name[0]} </Avatar>
          )}
        </ListItemAvatar>

        <ListItemText  component="section" 

          primary={<Box  sx={{ fontSize : '.8rem' , marginBottom : "5px" ,display : "flex" , justifyContent : "space-between" }}   component="span" >    
                         <p> {props.commentdata.name} </p> 
                         <Box component="span"  >
                            <IconButton  size="small" onClick={()=> setEdit(!edit) }  aria-label="remove">
                               
                                {( edit ?  <EditOffIcon  sx={{ fontSize : '.8rem' }}/>   :  <EditIcon  sx={{ fontSize : '.8rem' }}/>  )}

                            </IconButton> 

                            <IconButton  size="small" onClick={()=>commentsData.removeComment(props.commentdata.id)}  aria-label="remove">
                                <ClearIcon  sx={{ fontSize : '.8rem' }}/>
                            </IconButton> 
                         </Box>
                         

                  </Box >   }

          secondary={  <Box component="span"  >{( edit ? <Input val={props.commentdata.body} row={1}  fun={getTextComment} /> :

                              <Typography sx={{ fontSize : '.8rem'  }}   component="span" >    
                                        {props.commentdata.body}
                              </Typography >  
                              
                     )} </Box> }
        />
      </ListItem>
 
  );
}
