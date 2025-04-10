import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state.jsx";

const root = createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
    root.render(
        <StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
            </BrowserRouter>
        </StrictMode>,
    )
}