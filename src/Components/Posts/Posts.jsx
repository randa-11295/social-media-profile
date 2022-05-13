import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../PostCard/PostCard";
import Input from "../Input/Input" ;
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';
import commentsContext  from "../../Context/commentsContext";

const Posts = ()=>{
    const [postsData , setPostsData]  = useState([])
    const [commentsData , setcommentsData]  = useState([])

    const addNewPostHandel = (val)=>{
      if(val){
          const newPost =  {  userId: uuid(),
                              id: uuid(),
                              title: "New Post",
                              body: val  }

         setPostsData([newPost , ...postsData])
        }}

    const removePostHandel = (id)=>{
         const removedPost = postsData.filter(el =>{
              return (el.id !== id) })
          setPostsData(removedPost)
    }
   
    const editPostHandel =(id , val) =>{

         const indxEl =  postsData.findIndex((el)=>{
          return el.id === id
          })

          setPostsData( postsData.map((item, index) =>{
          
          return  index === indxEl ? { ...item, 'body' : val } : item      
     }))
    }
    
    const addNewCommentHandel = (val , PostId)=>{
               if(val){
                    const newComment =  {  postId: PostId,
                                             id: uuid(),
                                             name: "New Comment",
                                             body: val  }

               setcommentsData([newComment , ...commentsData])
               }
    }


     useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
               setPostsData(response.data)
          }).catch(function (error) {
               console.log(error);
          });

          axios.get('https://jsonplaceholder.typicode.com/comments').then(function (response) {
               setcommentsData(response.data)
          }).catch(function (error) {
               console.log(error);
          });

     },[])

     return( <main>
               <commentsContext.Provider value={{ comments : commentsData}} >
                  <Box sx={{ width:{ xs : "85%" , sm : "75%" , md : "60%" , lg :  '50%' }, 
                             margin : "30px auto 0" ,  }}>

                     <Input text="add new post" fun={addNewPostHandel} uniqe='post' row="5" />

                  </Box>
                    { postsData?.map((el)=>{
                         return <PostCard  postsData={el} key={el.id}
                                           removePost={removePostHandel}  
                                           editPost={editPostHandel} 
                                           addNewComment={addNewCommentHandel}
                                 />
                    })}
               </commentsContext.Provider>
            </main>
        )}

export default Posts