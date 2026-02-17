import { Container, AppBar, Toolbar, Typography, Box, CssBaseline } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <main className={styles.Main}>
      <CssBaseline />
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <ChecklistIcon sx={{ mr: 1.5 }} />
          <Typography variant="h6" component="h1" sx={{ fontWeight: 600 }}>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={styles.VersionBadge}>v{import.meta.env.VITE_APP_VERSION}</div>

      <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
        <Box>{children}</Box>
      </Container>
    </main>
  );
}
