import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useContext , useEffect , useState } from 'react';
import CommentsContext from '../../Context/commentsContext';
import CommentCard from '../CommentCard/CommentCard';

export default function Comments(props) {
     const commentsData = useContext(CommentsContext);

     const [commentsPost , setcommentsPost] = useState([])

     useEffect(()=>{
        const  commentsFilter =  commentsData.comments?.filter((el)=>{
             return el.postId === props.postId
        })
        setcommentsPost(commentsFilter)

     },[commentsData.comments,  props.postId])

  return (  <List sx={{ width: '100%',  bgcolor: 'background.paper' , paddingTop: "20px" }}>
              { commentsPost.map(el =>{  return ( <Box  key={ el.id} >
                                                      <Divider  />
                                                      <CommentCard commentdata={el} />
                                                  </Box>
              )})}
           </List>
  );
}
