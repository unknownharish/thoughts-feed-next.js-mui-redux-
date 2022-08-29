import React, { useState } from 'react'
import { AccountCircle, Close, Image, ViewStream, WbIncandescent } from '@mui/icons-material';
import { Box, Button, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, Radio, RadioGroup, Snackbar, TextField, Typography } from '@mui/material'
import styled from '@emotion/styled';


import { useDispatch } from 'react-redux'
import { setPosts } from '../../REDUX/actionSlice'

export default function Form() {

    const dispatch = useDispatch()

    const MyBox = styled('box')(({ theme }) => ({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        background: 'white',
        boxShadow: 24,
        p: 4,
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '90vw',
            padding: '10px'

        },
        border: '1px solid black',
        padding: '20px',

    }))



    const [Name, setName] = useState('')
    const [Desc, setDesc] = useState()
    const [Url, setUrl] = useState()
    const [time, settime] = useState()
    const [title, settitle] = useState()
    const [toast, settoast] = useState(false)
    const [toastMessage, settoastMessage] = useState('post created sucessfully')
    
    // dispatch(setPosts({name:'hello'}))


    function saveChanges() {
        let date = new Date() + ' ';
        date = date.split(' ');

        let month = date[1];
        let digitaldate = date[2]
        let year = date[3]
        settime({
            date: digitaldate,
            month,
            year
        })

        let NAME = document.getElementById('name').value
        let TITLE = document.getElementById('title').value
        let DESC = document.getElementById('desc').value
        let URL = document.getElementById('url').value;

        // setName(NAME); setDesc(DESC); settitle(TITLE); setUrl(URL)

        console.log('name', Name, 'title', title, 'desc', Desc, 'url', Url)

        if (!NAME || !DESC || !URL || !TITLE) {
            settoastMessage("Some fields are missing...!")
        }
        else {

            let finalObj = { 'name': NAME, 'desc': DESC, 'url': URL, 'time': [digitaldate, month, year], 'topic': TITLE }
            dispatch(setPosts(finalObj))
            settoastMessage('post created sucessfully...!')
        }
        settoast(true)


    }


    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => settoast(false)}
            >
                <Close fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (

        <div>

            <MyBox  >
                <FormControl variant="standard">

                    <Typography variant='h6' textAlign={'center'}>Create Post</Typography>

                    <Input
                        id='name'
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                        placeholder='Your Name'
                    // value={Name}
                    // onChange={(e)=>setName(e.target.value)}
                    />

                    <Input
                        id='title'
                        startAdornment={
                            <InputAdornment position="start">
                                <ViewStream />
                            </InputAdornment>
                        }
                        placeholder='Post title'
                    // value={title}
                    // onChange={(e) => settitle(e.target.value)}
                    />
                    <Input
                        id='desc'
                        startAdornment={
                            <InputAdornment position="start">
                                <WbIncandescent />
                            </InputAdornment>
                        }
                        sx={{ m: '5px 0' }}
                        placeholder='whats in your mind...! in 200 words'
                        margin="normal"
                    // value={Desc}
                    // onChange={(e) => setDesc(e.target.value)}
                    />
                    <Input
                        id='url'
                        startAdornment={
                            <InputAdornment position="start">
                                <Image />
                            </InputAdornment>
                        }
                        sx={{ m: '5px 0' }}
                        placeholder='Image url'
                        margin="normal"
                    // value={Url}
                    // onChange={(e) => setUrl(e.target.value)}
                    />



                    <Typography variant='body1' textAlign={'left'}>Gender</Typography>
                    <RadioGroup
                        defaultValue="female"
                        name="radio-buttons-group"
                        row
                    >
                        <FormControlLabel sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 18,
                            },
                        }} value="female" control={<Radio />} label="F" id='female' />
                        <FormControlLabel sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 18,
                            },
                        }} value="male" control={<Radio />} label="M" id='male' />
                        <FormControlLabel sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 18,
                            },
                        }} value="prefer not to say" control={<Radio />} label="Others" id='others' />
                    </RadioGroup>


                    <Button variant='contained' color='success' sx={{ margin: '10px 0' }} onClick={() => saveChanges()}>Create</Button>
                    <Typography varient='body2'>Note: All this Info will be public...</Typography>
                </FormControl>




            </MyBox>


            <Snackbar
                open={toast}
                autoHideDuration={1500}
                onClose={() => settoast(false)}
                message={toastMessage}
                action={action}
            />


        </div>
    )
}
