import { List, Typography, Box, Chip, Stack } from '@mui/material';
import SingleTodo from './SingleTodo';

export default function TodoList({ todos, onToggle, onRemove, onEdit }) {
  const total = todos.length;
  const done = todos.filter((t) => t.completed).length;

  if (total === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 6, color: 'text.secondary' }}>
        <Typography variant="h6">No todos yet</Typography>
        <Typography variant="body2">Add one above to get started!</Typography>
      </Box>
    );
  }

  return (
    <>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip label={`Total: ${total}`} size="small" variant="outlined" />
        <Chip label={`Done: ${done}`} size="small" color="success" variant="outlined" />
        <Chip
          label={`Remaining: ${total - done}`}
          size="small"
          color="warning"
          variant="outlined"
        />
      </Stack>

      <List disablePadding>
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </List>
    </>
  );
}
