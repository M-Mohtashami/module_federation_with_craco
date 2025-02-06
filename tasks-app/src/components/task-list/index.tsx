import React from 'react';
import {
  Box,
  Card,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { ITask, ITasks } from './../../redux/types';

function TaskList({ tasks }: ITasks) {
  return (
    <Card sx={{ margin: 2, maxWidth: 500, padding: 2 }}>
      <List
        sx={{
          padding: 2,
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        {tasks.map((task: ITask) => (
          <Box key={task.title}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  {/* <DeleteIcon /> */}
                  حذف
                </IconButton>
              }
            >
              <ListItemText primary={task.title} secondary={task.status} />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Card>
  );
}

export default TaskList;
