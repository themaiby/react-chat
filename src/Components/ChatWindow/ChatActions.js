import React from 'react';

import TextField from 'material-ui/TextField';

const style = {
    textfield: {
        overflowY: 'auto',
    },
    sendButton: {
        padding: 4
    }
};

export default class ChatActions extends React.Component {
    render() {
        return (
            <div>
            <TextField
                hintText="Ctrl+Enter to send"
                underlineShow={true}
                multiLine={false}
                style={style.textfield}
                fullWidth={true}
            />
            </div>
        );
    }
}