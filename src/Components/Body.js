import React from 'react';
import ChatList from "./ChatList/ChatList";
import {GridList, GridTile} from 'material-ui/GridList';
import ChatWindow from "./ChatWindow/ChatWindow";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        height: '90vh',
        width: '100%',
        overflowY: 'none',
    },
    gridTileRooms: {
        height: '90vh',
        overflowY: 'auto',
    }
};

export default class Body extends React.Component {
    render() {
        return (

            <GridList
                cellHeight="auto"
                style={styles.gridList}
                cols={6}
                rows={2}
            >
                <GridTile cols={1} style={styles.gridTileRooms}>
                    <ChatList/>
                </GridTile>

                <GridTile cols={5}>
                    <ChatWindow/>
                </GridTile>

            </GridList>
        );
    }
}