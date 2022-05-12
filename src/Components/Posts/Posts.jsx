import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../PostCard/PostCard";

const Posts = ()=>{
    const [data , setData]  = useState([])

     useEffect(()=>{
          axios.get('https://jsonplaceholder.typicode.com/posts').then(function (response) {
               setData(response.data)
          }).catch(function (error) {
               console.error(error);
          });
     },[])

     return( <main>
              {
                 data?.map((el)=>{
                      return <PostCard data={el} key={el.id}/>
                 })
              }
            </main>
     )

}

export default Posts