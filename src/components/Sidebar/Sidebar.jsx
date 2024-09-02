import React from 'react';
import edit from '../../assets/edit.png'
import {
    Box,
    Button,
    Stack,
    Typography,
    useMediaQuery
  } from "@mui/material";
import { useContext } from 'react';
//   import MenuIcon from '@mui/material/Menu'
import styles from "./Sidebar.module.css";
import newchat from '../../assets/newchat.png'
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from '../../theme/ThemeContext';

function Sidebar({setChat,closeMenu}) {
  const {mode,setMode}=useContext(ThemeContext)

    const isMobile=useMediaQuery("(max-width:800px)");
   const handleMode=()=>{
    setMode(prev=>prev==='light'?'dark':'light')
   }
  
    return (
      <Box >


      {isMobile && (
          <Button
              endIcon={<CloseIcon />}
              sx={{
                  width: 1,
                  justifyContent: 'flex-end',
                  color: mode == 'light' ? 'primary.dark' :'text.primary'
              }}
              onClick={closeMenu}
          >
           
          </Button>
      )}

      <Link to={'/'} style={{ textDecoration: 'none' }}>
          <Stack
              onClick={() => {
                  setChat([])
                  closeMenu()
              }}
              sx={{
                  bgcolor: 'primary.main',
                  '&:hover ': {
                      bgcolor: 'primary.bg'
                  }
              }}
              direction={'row'}
              spacing={1}
              alignItems={'center'}
              justifyContent={'space-between'}
              py={2}
              px={{xs:2, md:3}}
          >
              <Stack direction={'row'} gap={1} alignItems={'center'}>
                  <Box
                      component={'img'}
                      src={logo}
                      height={42}
                      width={42}
                      borderRadius={2}
                      boxShadow={4}
                      flexShrink={0}
                  />
                  <Typography
                      variant={'heading'}
                      fontSize={{xs:16, md:20}}
                      color={'text.primary'}
                  >
                      New Chat
                  </Typography>
              </Stack>
                <img src={edit} height="40px"/>
               {/* <AddCommentIcon sx={{ color: 'text.primary' }} />  */}

          </Stack>
      </Link>

      <Box p={{xs:2, md:3}}>
          <Link to={'/history'}>
              <Button
                  variant="contained" sx={{ width: 1 }}
                  onClick={closeMenu}
              >
                  Past Conversations
              </Button>
          </Link>
      </Box>

  </Box>

    );
}

export default Sidebar;