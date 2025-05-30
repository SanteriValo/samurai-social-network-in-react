import {rerenderEntireTree} from "../render.jsx";

const state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Harvey"},
            {id: 2, name: "Mike"},
            {id: 3, name: "Jessica"},
            {id: 4, name: "Donna"},
            {id: 5, name: "Louis"},
            {id: 6, name: "Rachel"}
        ],

        messages: [
            {id: 1, message: "Hi! How are you?"},
            {id: 2, message: "Whatsapp?"},
            {id: 3, message: "Yep"},
            {id: 4, message: "Not a chance!"},
            {id: 5, message: "He knows it"},
            {id: 6, message: "Next time"},
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 7},
            {id: 2, message: 'It\'s my first post', likesCount: 12}
        ],
        newPostText: "IT-kamasutra",
    }
};

export const addPost = () => {
    const newPost = {
        id: Date.now(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (changedMessage) => {
    state.profilePage.newPostText = changedMessage;
    rerenderEntireTree(state);
}

export default state;