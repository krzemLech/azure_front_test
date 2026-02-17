import { useState } from 'react';
import { Box, TextField, IconButton, Paper } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={2}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 1,
        mb: 3,
        gap: 1,
        borderRadius: 2,
      }}
    >
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ '& fieldset': { border: 'none' } }}
      />
      <IconButton type="submit" color="primary" disabled={!text.trim()}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
    </Paper>
  );
}
