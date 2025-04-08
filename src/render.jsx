import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {addPost} from "./redux/state.jsx";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state) => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </StrictMode>,
    )
}