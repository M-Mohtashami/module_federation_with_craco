import React from 'react';
import {
  Box,
  Card,
  Divider,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { ITask } from './../../redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, setSelectedTask } from '../../redux/slices/tasks';
import { RootState } from '../../redux/store';

function TaskList() {
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  return (
    <Card sx={{ margin: 2, maxWidth: 500, width: '100%', padding: 2 }}>
      <List
        sx={{
          padding: 2,
          width: '100%',
          bgcolor: 'background.paper',
        }}
      >
        {tasks.map((task: ITask) => (
          <Box key={task.id}>
            <ListItem
              secondaryAction={
                <Grid2 container spacing={2}>
                  <IconButton
                    onClick={() => dispatch(setSelectedTask(task))}
                    edge="end"
                    aria-label="delete"
                    color="primary"
                  >
                    ویرایش
                  </IconButton>
                  <IconButton
                    onClick={() => dispatch(deleteTask(task.id))}
                    edge="end"
                    aria-label="delete"
                  >
                    حذف
                  </IconButton>
                </Grid2>
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
