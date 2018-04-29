import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1100,
    height: 1600,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/gallery/1.jpg',
    title: '',
    author: '',
  },
  {
    img: 'images/gallery/7.jpg',
    title: '',
    author: '',
  },
  {
    img: 'images/gallery/9.jpg',
    title: '',
    author: '',
  },
  {
    img: 'images/gallery/8.jpg',
    title: '',
    author: '',
  },
  {
    img: 'images/gallery/5.jpg',
    title: '',
    author: '',
  },
  {
    img: 'images/gallery/6.jpg',
    title: '',
    author: '',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */


export  class GridListExampleSimple extends React.Component {
    
    render() {
      return (
        <div>
          <div className='row'>
          <div className='col-lg-1 col-md-1 col-sm-1'></div>
        <div className='col-lg-5 col-md-5 col-sm-11'>
            <Card>
    <CardHeader
    />
    <CardMedia
    >
      <img src="images/gallery/1.jpg" alt="" />
    </CardMedia>
    <CardTitle title="" subtitle="" />
    <CardText>
    </CardText>
    </Card>
        </div>
        <div className='col-lg-5 col-md-5 col-sm-11'>
            <Card>
    <CardHeader
    />
    <CardMedia
    >
      <img src="images/gallery/7.jpg" alt="" />
    </CardMedia>
    <CardTitle title="" subtitle="" />
    <CardText>
    </CardText>
    </Card>
        </div>
        </div>

        <div className='row'>
        <div className='col-lg-1 col-md-1 col-sm-1'></div>
        <div className='col-lg-5 col-md-5 col-sm-11'>
            <Card>
    <CardHeader
    />
    <CardMedia
    >
      <img src="images/gallery/9.jpg" alt="" />
    </CardMedia>
    <CardTitle title="" subtitle="" />
    <CardText>
    </CardText>
    </Card>
        </div>
        <div className='col-lg-5 col-md-5 col-sm-11'>
            <Card>
    <CardHeader
    />
    <CardMedia
    >
      <img src="images/gallery/8.jpg" alt="" />
    </CardMedia>
    <CardTitle title="" subtitle="" />
    <CardText>
    </CardText>
    </Card>
        </div>
        </div>

         <div className='row'>
         <div className='col-lg-1 col-md-1 col-sm-1'></div>
        <div className='col-lg-5 col-md-5 col-sm-11'>
            <Card>
    <CardHeader
    />
    <CardMedia
    >
      <img src="images/gallery/5.jpg" alt="" />
    </CardMedia>
    <CardTitle title="" subtitle="" />
    <CardText>
    </CardText>
    </Card>
        </div>
        <div className='col-lg-5 col-md-5 col-sm-11'>
            <Card>
    <CardHeader
    />
    <CardMedia
    >
      <img src="images/gallery/6.jpg" alt="" />
    </CardMedia>
    <CardTitle title="" subtitle="" />
    <CardText>
    </CardText>
    </Card>
        </div>
        </div>
      </div>
      );
    }
  }

  /*
  <div style={styles.root}>
    <GridList
      cellHeight={500}
      style={styles.gridList}
    >
      <Subheader></Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img}/>
        </GridTile>
      ))}
    </GridList>
  </div>

  */