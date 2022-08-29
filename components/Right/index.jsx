import React, { useState } from 'react'


import { Edit } from '@mui/icons-material'
import { Avatar, AvatarGroup, Fab, ImageList, ImageListItem, Modal, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import Form from './Form'

export default function Right() {

  const [openModal, setopenModal] = useState(false)

  const MyRight = styled('div')(({ theme }) => ({

    position: 'fixed',
    width: '33%',
    marginTop: '-5px',
    display: 'block',

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }))


  const myLoader = ({ src, width, quality }) => {
    return src
  }

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];




  return (
    <>
      <MyRight>


        <Box sx={{ background: '#cccc2817' }}>

          <Typography variant='h6' textAlign={'left'} margin={'5px 0'} paddingY={1} paddingX={1}>Online</Typography>
          <Box >
            <AvatarGroup total={24} sx={{ display: 'flex', justifyContent: 'flex-end', padding: '5px' }}>
              <Avatar alt="Remy Sharp" src="https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg" />
              <Avatar alt="Travis Howard" src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg" />
              <Avatar alt="Agnes Walker" src="https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png" />
              <Avatar alt="Trevor Henderson" src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg" />
              <Avatar alt="Remy Sharp" src="https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg" />
            </AvatarGroup>

          </Box>

          <Box>

            <Typography variant='h6' textAlign={'left'} margin={'5px 0'} paddingX={1} >Archive</Typography>


            <ImageList sx={{ width: '100%', height: 450, padding: '5px' }} cols={3} rowHeight={164}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>

                  <Image
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    layout={'fill'}
                    loader={myLoader}
                    height={200}
                    width={400}
                  />

                </ImageListItem>
              ))}
            </ImageList>
          </Box>

          <Fab aria-label="edit"
            sx={(theme) => ({
              backgroundColor: theme.palette.success.main,
              color: theme.palette.success.contrastText,
              '&:hover': {
                backgroundColor: theme.palette.primary.contrastText,
                color: theme.palette.primary.main,
              },
              margin: '2px 20px',

            })}

            title='Create New Post'
            onClick={() => setopenModal(!openModal)}

          >
            <Edit />
          </Fab>


        </Box>
        <Modal
          open={openModal}
          onClose={() => setopenModal(!openModal)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

        >
          <Form />
        </Modal>



      </MyRight>
    </>
  )
}
