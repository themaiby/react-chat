import React from 'react';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import ChatListSearchField from './ChatListSearchField';

const chats = [{
        "title": "Harvey Moss"
    }, {
        "title": "Marjorie Atnip"
    }, {
        "title": "Heather Richardson"
    }, {
        "title": "Alma Greenfeild"
    }, {
        "title": "Jim Bos"
    }, {
        "title": "Henry Willson"
    }, {
        "title": "Alma Reed"
    }, {
        "title": "John Joy"
    }, {
        "title": "Barny Bons"
    }, {
        "title": "Larry Hire"
    }, {
        "title": "Harvey Moss"
    }, {
        "title": "Philip Taylor"
    }, {
        "title": "Frank Underwood"
    }, {
        "title": "Claire Underwood"
    }]; // TODO: hardcoded data


const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export default class ChatList extends React.Component {
    render() {
        return (
                <List>
                    <Subheader>{ChatListSearchField}</Subheader>
                    {chats.map((chat) => (
                        <ListItem
                            primaryText={chat.title}
                            leftAvatar={<Avatar backgroundColor={getRandomColor()}>{chat.title.charAt(0)}</Avatar>}
                            rightIcon={<CommunicationChatBubble />}
                        />
                        ))}
                </List>
        );
    }
}