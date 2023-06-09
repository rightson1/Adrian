import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useAuth } from '../utils/authContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
const pages = ['Home', 'Dashboard'];
function Navbar({ homepage }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { router } = useRouter()
    const { user, admin, logout, signInWithGoogle } = useAuth();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" className=' shadow-none relative h-[80px] flex justify-center items-center'
            sx={{
                backgroundColor: homepage ? 'transparent' : 'white',
                color: homepage ? 'white' : 'black',
            }}
        >
            <Container maxWidth="xl" className='bg-transparent '

            >
                <Toolbar disableGutters className='t'
                >
                    <Link href="/" className='cursor-pointer'>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} className='cursor-pointer' />
                    </Link>
                    <Link href="/">
                        <Typography
                            variant="h6"
                            className='cursor-pointer'
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            GYM
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                user ? <Link passHref href={page === "Home" ? '/' : `/${page.toLowerCase()}`} key={index}>
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                </Link> : <MenuItem key={page} onClick={() => {
                                    handleCloseNavMenu()
                                    signInWithGoogle()
                                }}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Link href="/" className='cursor-pointer'>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} className='cursor-pointer' />
                    </Link>
                    <Link href="/">
                        <Typography
                            variant="h5"
                            noWrap
                            className='cursor-pointer'
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            GYM
                        </Typography>
                    </Link>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        className="justify-center items-center"

                    >
                        {pages.map((page, index) => (
                            user ? <Link
                                passHref href={page === "Home" ? '/' : `/${page.toLowerCase()}`} key={index}
                            >
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: homepage ? "white" : "black", display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link> :
                                <Button
                                    key={page}
                                    onClick={() => {
                                        handleCloseNavMenu()
                                        signInWithGoogle()
                                    }}
                                    sx={{ my: 2, color: homepage ? "white" : "black", display: 'block' }}
                                >
                                    {page}
                                </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={user?.photoURL} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {user ? (<MenuItem onClick={() => {
                                logout()
                                handleCloseUserMenu()
                            }}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>) : (
                                <MenuItem onClick={() => {
                                    signInWithGoogle()
                                    handleCloseUserMenu()
                                }}>
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>

                            )
                            }

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;