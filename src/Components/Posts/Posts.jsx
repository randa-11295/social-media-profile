import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../PostCard/PostCard";
import Input from "../Input/Input" ;
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';

const Posts = ()=>{
    const [data , setData]  = useState([])

    const addNewPostHandel = (val)=>{
      if(val){
          const newPost =  {  userId: uuid(),
                              id: uuid(),
                              title: "New Post",
                              body: val  }

          setData([newPost , ...data])
        }}

    const removePostHandel = (id)=>{
         const removedPost = data.filter(el =>{
              return (el.id !== id) })
         setData(removedPost)
    }
   
    const editPostHandel =(id , val) =>{

         const indxEl =  data.findIndex((el)=>{
          return el.id === id
          })

         setData( data.map((item, index) =>{
          
          return  index === indxEl ? { ...item, 'body' : val } : item      
     }))
    }

     useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
               setData(response.data)
          }).catch(function (error) {
               console.error(error);
          });
     },[])

     return( <main>
                  <Box sx={{ width:{ xs : "85%" , sm : "75%" , md : "60%" , lg :  '50%' }, margin : "30px auto 0" ,  }}>
                     <Input text="add new post" fun={addNewPostHandel} uniqe='post' row="5" />
                  </Box>
               { data?.map((el)=>{
                      return <PostCard removePost={removePostHandel}  editPost={editPostHandel} data={el} key={el.id}/>
               })}
            </main>
        )}

export default Posts