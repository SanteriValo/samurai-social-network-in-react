import './Profile.css'

const Profile = () => {
    return (
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
    )
}

export default Profile;