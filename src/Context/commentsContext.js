import { createContext } from "react";
  
 const commentsContext = createContext(
          { comments : [],
            removeComment: ()=>{}
        }
  );

  export default  commentsContext