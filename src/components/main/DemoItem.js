import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    fontFamily: "roboto",
    color: "#293059",
    width: 270,
    height: "fit-content",
    minHeight: 380,
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 270,
    border: "none",
    borderBottom: "1px solid #cccccc75",
  },
  titleContainer: {
    margin: 0,
    marginLeft: 5,
    padding: 0,
  },
  title: {
    margin: 5,
    padding: 0,
  },
  cardActions: {
    marginBottom: "5px",
    marginTop: "auto",
  },
  btn: {
    background: "#293059",
    color: "white",
  },
  link: {
    textDecoration: "none",
    color: "#293059",
  },
});

export default function MediaCard({ img, url, title }) {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.card}>
      <a className={classes.link} href={url} target="_blank" rel="noopener noreferrer">
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={title} />
          <CardContent className={classes.titleContainer}>
            <Typography className={classes.title} variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>

      <CardActions className={classes.cardActions}>
        <a className={classes.link} href={url} target="_blank" rel="noopener noreferrer">
          <Button className={classes.btn} size="small" color="primary" onClick={() => {}}>
            Visit Demo Page
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
