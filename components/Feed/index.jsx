import styled from '@emotion/styled';
import { Stack } from '@mui/material'
import React from 'react'

import { useSelector } from 'react-redux'


import MyCard from './MyCard';


export default function Feed() {

  const posts = useSelector(x => x.mainStore.totalPost);
  // console.log(posts)
  // const Mystack = styled('div')(({ theme }) => ({

  //   // background: 'green',
  //   // position: 'relative',
  //   padding: '10px',
  //   margin: '0 auto'
  //   [theme.breakpoints.down('md')]:{
  //   marginLeft: '9vw'
  // }

  // }))

  const Mystack = styled('div')(({ theme }) => ({
    padding: '10px',
    margin: '0 auto',

    [theme.breakpoints.down('md')]: {
      marginLeft: '15vw'


    },

  }))

  return (
    <Mystack>

      <Stack direction="column" spacing={2} alignItems='center'>
        {/* <MyCard /> */}
        {posts.map(x => <MyCard post={x}/>)}
      </Stack>


    </Mystack>
  )
}
