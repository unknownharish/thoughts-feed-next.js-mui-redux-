import react, { useState } from 'react'


import styled from "@emotion/styled";
import { Group, Mail, NotificationAdd, Search, TramRounded, } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, InputBase, Toolbar, Typography } from "@mui/material";



// import style from './style.module.css'

export default function Header() {

    const [searchbar, setsearchbar] = useState(true)

    const Styledsearch = styled('div')(({ theme }) => ({
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        transition: [theme.transitions.easing.easeIn],


        [theme.breakpoints.down('md')]: {

            padding: '3px',
            fontSize: "13px",
            outline: searchbar ? '1px solid white' : 'none',
            marginLeft:'-13px',
        },

    }))



    const StyledBadges = styled('div')(({ theme }) => ({

        [theme.breakpoints.down('md')]: {
            display: 'none'
        },

        display: 'block'

    }))



    return (


        <AppBar sx={{ position: 'sticky', top: '0',width:'100%' }} >

            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <Toolbar>
                        <Group />
                        <Typography variant="h4" sx={(theme) => ({ ml: 1, fontSize: '18', [theme.breakpoints.down('md')]: { fontSize: 15 } })} >Connect</Typography>

                    </Toolbar>
                </Box>

                <Styledsearch  >

                    <Search sx={(theme) => ({
                        color: 'white',
                        cursor: 'pointer',
                    })}
                        onClick={() => { setsearchbar(!searchbar); }}
                    />

                    <InputBase

                        sx={(theme) => ({
                            ml: 2,
                            display: searchbar ? 'block' : 'none',
                            width: '35vw',
                            padding: '0 6px',
                            borderRadius: '4px',
                            [theme.breakpoints.down('md')]: {
                                display: !searchbar ? 'block' : 'none',
                                width: '45vw',
                                fontSize: 15,
                                padding: '0 10px',
                            },
                            backgroundColor: theme.palette.common.white,
                            '&:hover': {
                                backgroundColor: theme.palette.common.white,
                            },
                        })}
                        placeholder={'Search something'}
                    />

                </Styledsearch>

                <StyledBadges >

                    <IconButton
                        size="large"
                        aria-label="show 4 new mails"
                        color="inherit"
                    >
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                    </IconButton>

                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color='error'>
                            <NotificationAdd />
                        </Badge>
                    </IconButton>
                </StyledBadges>

            </Toolbar>

        </AppBar>




    )
}
