import { Box } from "@mui/system";
import bg from "../../Images/bg.jpg";
import avatar from "../../Images/avatar.jpg"

const headerStyle = {backgroundImage : `url(${bg})` ,             
                     backgroundPosition : 'center',
                     backgroundSize : "cover" ,
                     height : "35vh"}
                    
const avatarStyle = {
            width : "180px",
            height : "180px",
            borderRadius : "50%",
            background : "green",
            position: 'relative',
            top : "-90px",
            margin : '0 auto -90px',
            outline : "7px white solid",
            backgroundImage : `url(${avatar})` ,             
          backgroundPosition : 'center',
          backgroundSize : "cover" ,
}

const Header =  ()=>{
   return (<header>
              <Box sx={headerStyle} />
              <Box sx={avatarStyle} /> 
              <h1 style={{fontSize : "2.5rem" , margin : "30px 0" , textAlign : "center"}}> Randa Mohamed </h1>
          </header>
   )
}

export default Header