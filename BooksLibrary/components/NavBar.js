import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import Link from 'next/link'

export default function NavBar(props) {
  return <AppBar position="static">
    <Toolbar>

      <Link href="/" passHref >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Our Libraries
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
}