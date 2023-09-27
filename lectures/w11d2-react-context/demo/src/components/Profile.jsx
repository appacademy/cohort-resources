import { useSessionContext } from "../context/SessionContext";



const Profile = (props) => {

    const {currentUser, loggedIn} = useSessionContext()


    return (loggedIn) ? (
        <section className="profile">
            <h1> {currentUser.name}'s  Profile Page</h1>
        </section>
    ) : null
}

export default Profile;