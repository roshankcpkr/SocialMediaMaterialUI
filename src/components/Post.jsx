import React from 'react';
import {Box,CardMedia, CardHeader, Card, Typography, CardActions, CardContent, Avatar, IconButton, Checkbox} from '@mui/material';
import {FavoriteBorder, Favorite} from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
const Post = ()=>{
    return (
        <Box sx={{margin: 5}}>
            <Card>
      <CardHeader
        avatar={
          <Avatar>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://images.theconversation.com/files/460884/original/file-20220502-24-bg7hxv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
        </Box>
    )
}
export default Post;