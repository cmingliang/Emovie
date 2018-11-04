import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 300,
    margin:20,
  },
  media: {
    height: 250,
  },
};

class MovieCard extends Component{ 

    render(){
        const { classes, img, movieTitle, description } = this.props;
        return (
            <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={img}
                title={movieTitle}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {movieTitle}
                </Typography>
                <Typography component="p">
                    {description}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card> 
        );
  }
  
}

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);
