import React, { useState } from 'react'

import { Favorite, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import styled from "@emotion/styled";
import Image from 'next/image'


export default function MyCard({ post }) {

  // console.log(post)

  const [liked, setliked] = useState(false)

  const myLoader = ({ src, width, quality }) => {
    return src
  }

  const MyCard = styled('card')(({ theme }) => ({

    [theme.breakpoints.down('md')]: {

      width: '80vw',
      display: 'inline-block',
    },
    overflow: 'hidden',

    borderBottom: `1px solid black`

  }))


  return (
    <div>

      <MyCard sx={{ maxWidth: "600px", background: '#be32f536' }}>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red', textTransform: 'capitalize' }} aria-label="recipe">
              {post.name.slice(0, 1)}
            </Avatar>
          }

          title={post.name}
          subheader={post.time[1] + ' ' + post.time[0] + ' ' + post.time[2]}
        />


        <Box >
          <Image
            src={post.url}
            layout={'responsive'}
            loader={myLoader}
            height={200}
            width={400}
            alt='some image related to post'
            // placeholder={'blur'}
          />

        </Box>


        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.topic}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.desc}
          </Typography>

          <Box>
            <IconButton title='like it' aria-label="add to favorites" onClick={() => setliked(!liked)}>
              <Favorite sx={{ color: liked ? 'red' : '#795b60' }} />

            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton></Box>
        </CardContent>


      </MyCard>

    </div>
  )
}
