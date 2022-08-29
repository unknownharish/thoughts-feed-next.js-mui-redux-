import { createSlice } from "@reduxjs/toolkit";


let init = {
    totalPost: [
        {
            name: 'Harish',
            desc: 'Plants as a food source are often divided into seeds, fruits, vegetables, legumes, grains and nuts. Where plants fall within these categories can vary with ',
            url: 'https://arctickingdom.com/wp-content/uploads/2017/03/214-IMG_8054.jpg',
            time: ['29', 'August', '2022'],
            topic:'Food',
        },
        {
            name: 'Shrimp and Chorizo Paella',
            desc: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            url: 'https://www.photos-public-domain.com/wp-content/uploads/2012/03/frilled-lizard.jpg',
            time: ['28', 'August', '2022'],
            topic:'lizard',
        },
        {
            name: 'Random',
            desc: 'lets define coding as the basic act of writing - in a programming language - a script that a computer can understand. This script will tell the computer to behave in a certain way, to do a certain thing, and to, ultimately, perform the actions that you want it to',
            url: 'https://www.smallbizdaily.com/wp-content/uploads/2020/08/shutterstock_749021593-1.jpg',
            time: ['27', 'August', '2022'],
            topic:'Coding',
        },
        {
            name: 'Harish',
            desc: 'America, Mexico and the Caribbean. Discover Destinations DRIVING VACATIONS AND ROAD TRIPS Getting there can create some of the most cherished memories, and who better to help you plan ',
            url: 'https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2017/08/travel-tools-destination.jpg',
            time: ['11', 'April', '2000'],
            topic:'Somewhere in world',
        },
    ],

    rightSideImages: [{
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
    },]
}

const slice = createSlice({
    name: 'main store',
    initialState: init,
    reducers: {

        setPosts: (state, action) => {

            console.log('in reducer', action);
          state.totalPost = [action.payload,...state.totalPost,];
        //   state.totalPost = state.totalPost.reverse()

        }


    }

})


export const { setPosts } = slice.actions

export default slice.reducer