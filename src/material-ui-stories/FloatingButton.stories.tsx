import React from 'react';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default {
  title: 'Material UI/FloatingActionButton',
  component: Fab,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const FloatingActionButtonsInternal = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </div>
  );
};

export const FloatingActionButtons = () => <FloatingActionButtonsInternal />;

const SizesInternal = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <Fab variant="extended" size="small" color="primary" aria-label="add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
      </div>
    </div>
  );
};

export const Sizes = () => <SizesInternal />;
