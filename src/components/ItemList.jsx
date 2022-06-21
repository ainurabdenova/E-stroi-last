import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function GutterlessList() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {[1, 2, 3].map((value) => (
                <ListItem
                    key={value}
                    disableGutters
                >
                    <ListItemText primary={`${value}`} />
                </ListItem>
            ))}
        </List>
    );
}
