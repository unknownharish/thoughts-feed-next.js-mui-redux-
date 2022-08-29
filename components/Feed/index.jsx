import styled from '@emotion/styled';
import { Stack } from '@mui/material'
import React from 'react'

import { useSelector } from 'react-redux'


import MyCard from './MyCard';


export default function Feed() {

  const posts = useSelector(x => x.mainStore.totalPost);

  const Mystack = styled('div')(({ theme }) => ({
    padding: '10px',
    margin: '0 auto',

    [theme.breakpoints.down('md')]: {
      marginLeft: '15vw',
      background:'white !important'


    },

  }))

  return (
    <Mystack>

      <Stack direction="column" spacing={2} alignItems='center'>
       
        {posts.map((x,idx) => <MyCard key={idx} post={x}/>)}
      </Stack>


    </Mystack>
  )
}
