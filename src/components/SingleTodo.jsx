import { useState } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function SingleTodo({ todo, onToggle, onRemove, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const handleSave = () => {
    const trimmed = draft.trim();
    if (trimmed) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setDraft(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSave();
    if (e.key === 'Escape') handleCancel();
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        isEditing ? (
          <Stack direction="row" spacing={0.5}>
            <IconButton edge="end" size="small" onClick={handleSave} color="success">
              <CheckIcon fontSize="small" />
            </IconButton>
            <IconButton edge="end" size="small" onClick={handleCancel} color="error">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        ) : (
          <Stack direction="row" spacing={0.5}>
            <IconButton
              edge="end"
              size="small"
              onClick={() => setIsEditing(true)}
              color="primary"
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              edge="end"
              size="small"
              onClick={() => onRemove(todo.id)}
              color="error"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Stack>
        )
      }
      sx={{
        borderRadius: 1,
        mb: 0.5,
        bgcolor: 'background.paper',
        '&:hover': { bgcolor: 'action.hover' },
        transition: 'background-color 0.2s',
      }}
    >
      {isEditing ? (
        <TextField
          fullWidth
          size="small"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          sx={{ mx: 2, my: 0.5 }}
        />
      ) : (
        <ListItemButton onClick={() => onToggle(todo.id)} dense>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <Checkbox edge="start" checked={todo.completed} tabIndex={-1} disableRipple />
          </ListItemIcon>
          <ListItemText
            primary={todo.text}
            sx={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'text.disabled' : 'text.primary',
            }}
          />
        </ListItemButton>
      )}
    </ListItem>
  );
}
