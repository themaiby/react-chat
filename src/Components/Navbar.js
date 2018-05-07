import React from 'react';

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const RightIcon = (
    <IconButton><MoreVertIcon /></IconButton>
);

export default class Navbar extends React.Component {
    render() {
        return (
            <AppBar
                title="React chat"
                iconElementRight={RightIcon}
                showMenuIconButton={false}
            />
        );
    }
}