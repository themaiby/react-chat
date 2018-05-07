import React from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import ChatActions from "./ChatActions";
import ChatMessages from "./ChatMessages";

const styles = {
    room: {
        height: 'auto',
    },
    text: {
        height: '72vh',
        overflowY: 'auto'
    },
    actions: {
        paddingBottom: '3px'
    }
};

export default class ChatWindow extends React.Component{
    render() {
        return (
            <Card containerStyle={styles.room}>
                <CardTitle title="Room title" subtitle="Room subtitle" />
                <CardText style={styles.text}>
                    <ChatMessages/>
                </CardText>
                <CardActions style={styles.actions}>
                    <ChatActions/>
                </CardActions>
            </Card>
        );
    }
}