import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Input from "../Input/Input"
import ClearIcon from '@mui/icons-material/Clear';
import EditOffIcon from '@mui/icons-material/EditOff';
import avatar from "../../Images/avatar.jpg"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  const handleExpandClick = () => {
      setExpanded(!expanded);
  };

  const getTextEditPost= (val)=>{

     props.editPost(props.data.id , val)
     setEdit(false)

  }

  return (
    <Card sx={{ width: '50%' , margin : "30px auto" }}>
      <CardHeader
        avatar={ <Avatar alt="randa mohamed " src={avatar} /> }
        action={ <IconButton onClick={()=>props.removePost(props.data.id)}  aria-label="remove">
                      <ClearIcon />
                 </IconButton>  }
 
        title="Randa Mohamed"
        subheader={props.data.title}
      />
     
      <CardContent>

        <Typography  component={'div'} variant="body2" color="text.secondary">
            {( edit ? <Input  fun={getTextEditPost} /> : <p>  {props.data.body} </p>)  }
        </Typography>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={()=>{setEdit(!edit)}} aria-label="share">
        {( edit ? <EditOffIcon /> : <EditIcon /> )}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Input />
     
          <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}
