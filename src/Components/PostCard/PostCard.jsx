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
import Comments from "../Comments/Comments"

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

     props.editPost(props.postsData.id , val)
     setEdit(false)

  }

  const getTextNewComment = (val)=>{
     props.addNewComment(val , props.postsData.id)
  }

 
  return (
    <Card sx={{ width:{ xs : "85%" , sm : "75%" , md : "60%" , lg :  '50%' }, margin : "30px auto 15px" ,  background : "white"}}>
      <CardHeader
        avatar={ <Avatar alt="randa mohamed " src={avatar} /> }
        action={ <IconButton onClick={()=>props.removePost(props.postsData.id)}  aria-label="remove">
                      <ClearIcon />
                 </IconButton>  }
        title="Randa Mohamed"
        subheader={props.postsData.title}
      />
     
      <CardContent>

        <Typography  component={'div'} variant="body2" color="text.secondary">
            {( edit ? <Input val={props.postsData.body} row={3}  fun={getTextEditPost} /> : <p>  {props.postsData.body} </p>)  }
        </Typography>

      </CardContent>

      <CardActions disableSpacing>

        <IconButton aria-label="favorites">
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
          
            <Input fun={getTextNewComment} unique="comment" text="Write a comment"/>
     
          <Comments postId={props.postsData.id} />

        </CardContent>
      </Collapse>
    </Card>
  );
}
