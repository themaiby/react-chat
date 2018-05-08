import React from 'react';
import {Drawer, withStyles} from "material-ui";
import RoomList from "../RoomList/RoomList";

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  toolbar: theme.mixins.toolbar
});

class ChatDrawer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
      variant="permanent"
      classes={{paper: classes.drawerPaper}}
      anchor="left"
      >
        <div className={classes.toolbar} />

        <RoomList/>

      </Drawer>
    )
  }
}

export default withStyles(styles)(ChatDrawer);
