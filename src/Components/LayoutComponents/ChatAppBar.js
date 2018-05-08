import React from 'react';

import classNames from 'classnames';
import {AppBar, Toolbar, Typography, withStyles} from "material-ui";

const styles = ({
  appBar: {
    width: 'calc(100% - 240px)',
  },
  'appBar-left': {
    marginLeft: 240,
  }
});

class ChatAppBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, classes['appBar-left'])}
      >
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            React Chat
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(ChatAppBar);
