import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
        <header className="header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="logo"/>
        </header>
        <nav className="nav">
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
        <div className="content">Main content</div>
    </div>
  )
}

export default App
