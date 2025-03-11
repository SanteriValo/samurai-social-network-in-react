import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 7},
    {id: 2, message: 'It\'s my first post', likesCount: 12}
]

const dialogs = [
    {id: 1, name: "Harvey"},
    {id: 2, name: "Mike"},
    {id: 3, name: "Jessica"},
    {id: 4, name: "Donna"},
    {id: 5, name: "Louis"},
    {id: 6, name: "Rachel"}
]

const messages = [
    {id: 1, message: "Hi! How are you?"},
    {id: 2, message: "Whatsapp?"},
    {id: 3, message: "Yep"},
    {id: 4, message: "Not a chance!"},
    {id: 5, message: "He knows it"},
    {id: 6, message: "Next time"},
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </StrictMode>,
)
