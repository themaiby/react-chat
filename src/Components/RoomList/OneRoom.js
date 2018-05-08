import React from 'react';
import {ListItem, Avatar, ListItemText} from "material-ui";

class OneRoom extends React.Component {

  render() {
    return (
      <ListItem>
        <Avatar>{this.props.title.charAt(0)}</Avatar>
        <ListItemText primary={this.props.title}
                      secondary={this.props.createDate} />
      </ListItem>
    );
  }

}

export default OneRoom;
