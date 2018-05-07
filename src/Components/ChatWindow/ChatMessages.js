import React from 'react';
import { ListItem, Avatar } from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';


// TODO remove hardcode

const messages = [{
    "sender": "someone",
    "content": "Hello, World!"
}, {
    "sender": "someone",
    "content": "Here's my very first message..."
}, {
    "sender": "me",
    "content": "Oh, hi 👋🏻"
}, {
    "sender": "me",
    "content": "What's up?"
}, {
    "sender": "me",
    "content": "Everything is up, buddy 😎"
}, {
    "sender": "someone",
    "content": "Neat 👍🏻\nKeep rocking"
}, {
    "sender": "someone",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
}, {
    "sender": "me",
    "content": "What's that?"
}, {
    "sender": "someone",
    "content": "That's a HUUUUUGGGEEEE message!!11"
}, {
    "sender": "me",
    "content": "LOL"
}, {
    "sender": "someone",
    "content": "Wanna more?"
}, {
    "sender": "me",
    "content": "Sure 😁"
}, {
    "sender": "someone",
    "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
}, {
    "sender": "me",
    "content": "I can do this too!"
}, {
    "sender": "me",
    "content": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
}];

const style = {
    listLeft : {
        maxWidth: '60%',
        float: 'left'
    },
    listRight: {
        maxWidth: '60%',
        float: 'right'
    },
    gridTile: {
        height: 'auto'
    }
};

export default class ChatMessages extends React.Component {
    render() {
        return (
            <GridList cols={1} rows={1} padding={0}>
                {
                    messages.map((message) => (
                        <GridTile cols={1} style={style.gridTile}>
                            <ListItem
                                secondaryText={message.sender}
                                primaryText={message.content}
                                leftAvatar={<Avatar>{message.sender.charAt(0)}</Avatar>}
                                style={message.sender === 'me' ? style.listRight : style.listLeft}
                            >
                            </ListItem>
                        </GridTile>
                    ))
                }
            </GridList>
        )
    }
}

