import React from 'react';
import {List} from "material-ui";
import OneRoom from "./OneRoom";

class RoomList extends React.Component {
  render() {
    return (
      <List>
        <OneRoom
          title="Room name"
          createDate={Math.round(Math.random() * 16) + ' days ago'}
        />
      </List>
    )
  }
}

export default RoomList;
