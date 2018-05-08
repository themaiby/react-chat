import React from 'react';

import { withStyles } from 'material-ui/styles';

// Component imports
import ChatAppBar from "./LayoutComponents/ChatAppBar";
import ChatDrawer from "./LayoutComponents/ChatDrawer";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar
});

class Layout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>

          <ChatAppBar />
          <ChatDrawer />

          <main className={classes.content}>
            <div className={classes.toolbar} />

            {this.props.body}

          </main>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
