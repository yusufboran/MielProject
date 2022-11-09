import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ProjectCard(props) {
  const [showMore, setShowMore] = useState(false);
  const data = props.data;
  return (
    <Card sx={{ maxWidth: 345 
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={data.imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {showMore
              ? data.information
              : `${data.information.substring(0, 200)}`}{" "}
            {data.information.length > 200 ? (
              <button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
              </button>
            ) : null}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
