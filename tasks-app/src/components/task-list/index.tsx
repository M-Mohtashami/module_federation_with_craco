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
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from './../../redux/types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, setSelectedTask } from '../../redux/slices/tasks';
import { RootState } from '../../redux/store';
import Filters from '../filters';

function TaskList() {
  const { tasks, selectedFilters } = useSelector(
    (state: RootState) => state.tasks
  );
  const dispatch = useDispatch();
  const filteredTasks = selectedFilters.length
    ? tasks.filter((task) => selectedFilters.includes(task.status))
    : tasks;
  return (
    <Grid2 container alignItems={'center'} flexDirection={'column'} size={12}>
      <Card
        sx={{
          marginBottom: 2,
          maxWidth: 500,
          padding: 2,
          width: '85%',
        }}
      >
        <Filters />
      </Card>
      <Card sx={{ maxWidth: 500, width: '85%', padding: 2 }}>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}
        >
          {filteredTasks.map((task: ITask) => (
            <Box key={task.id}>
              <ListItem
                secondaryAction={
                  <Grid2 container spacing={2}>
                    <Tooltip title="ویرایش" placement='top'>
                      <IconButton
                        onClick={() => dispatch(setSelectedTask(task))}
                        edge="end"
                        aria-label="delete"
                        color="primary"
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="حذف" placement='top'>
                      <IconButton
                        onClick={() => dispatch(deleteTask(task.id))}
                        edge="end"
                        aria-label="delete"
                      >
                       <DeleteIcon />
                      </IconButton>
                    </Tooltip>
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
    </Grid2>
  );
}

export default TaskList;
