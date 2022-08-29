import { Fab, Modal, Stack, styled } from '@mui/material'
import { House, Info, Groups, AdminPanelSettings, SettingsVoice, Settings, AddReaction, CrisisAlert, Edit } from '@mui/icons-material/';
import React,{useState} from 'react'
import Form from '../Right/Form';

export default function Left() {

  const [openModal, setopenModal] = useState(false)


  let MyStack = styled('div')(({ theme }) => ({

    width: '17%',
    // background: '#ae4dd5',
    background: theme.palette.primary.main,
    color: 'white',
    height: '108vh',
    position: 'fixed',
    paddingTop: '10px',

    [theme.breakpoints.down('md')]: {
      margin: ' 0',
      width: '16%',
      cursor: 'pointer',

    },
    
    // flexGrow: 1,

  }))


  let MyIcons = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5vh',
    borderRadius: '5px',
    '&:hover': {
      background: theme.palette.secondary.light
    },

  }))


  let MyPara = styled('p')(({ theme }) => ({

    width: '60px',
    fontSize: '15px',
    marginLeft: '15px',
    [theme.breakpoints.down('md')]: {
      display: 'none'

    }

  }))

  return (
    <MyStack>

      <Stack direction="column" spacing={1} >

        <MyIcons title='Home'><House/><MyPara >Home</MyPara></MyIcons>
        <MyIcons title='Info'  ><Info/><MyPara>Info</MyPara></MyIcons>
        <MyIcons title='Friends'  ><Groups/><MyPara>Friends</MyPara></MyIcons>
        <MyIcons title='Admin'  ><AdminPanelSettings/><MyPara>Admin</MyPara></MyIcons>
        <MyIcons title='Voice'  ><SettingsVoice/><MyPara>Voice</MyPara></MyIcons>
        <MyIcons title='Settings'  ><Settings /><MyPara>Settings</MyPara></MyIcons>
        <MyIcons title='Emojies'  ><AddReaction/><MyPara>Emojies</MyPara></MyIcons>
        <MyIcons title='Logout'  ><CrisisAlert  /><MyPara>Logout</MyPara></MyIcons>




        {/* //edit button */}

        <Fab aria-label="edit"
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
            },
            display: 'none',
            [theme.breakpoints.down('md')]: {
              display: 'block',
            margin:'3vh auto !important'
            }

          })}

          title='Create New Post'
          onClick={() => setopenModal(!openModal)}

        >
          <Edit />
        </Fab>


        <Modal
          open={openModal}
          onClose={()=>setopenModal(!openModal)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        
        >
        <Form/>



        
        </Modal>



      </Stack>


    </MyStack>

  )
}
