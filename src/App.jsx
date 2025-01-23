import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                    alt="logo"/>
            </header>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className="content">
                <div>Main content
                    <img
                        src="https://media.licdn.com/dms/image/v2/D4D16AQHvE3xNl5cTWw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1731583753566?e=1743033600&v=beta&t=tmrCY-eTfjij1iKONTIaZg5o49EBtc5nTswxlnqpZXo"
                        alt="main content image one"/>
                </div>
                <div>
                    avatar + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            Post 1
                        </div>
                        <div>
                            Post 2
                        </div>
                        <div>
                            Post 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
