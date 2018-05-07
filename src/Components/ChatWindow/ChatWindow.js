import React from 'react';

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import ChatActions from "./ChatActions";

const styles = {
    room: {
        height: 'auto',
    },
    text: {
        height: '70vh',
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions style={styles.actions}>
                    <ChatActions/>
                </CardActions>
            </Card>
        );
    }
}