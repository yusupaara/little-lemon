import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faShareAltSquare } from "@fortawesome/free-solid-svg-icons";
import Home from "../layout/home";

export default function Source() {

    // state
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // redux state
    const {loading, error} = useSelector(state => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLoginEvent = (e) => {
        e.preventDefault();
        let userCredentials = {
            id, username, email, password
        }
        dispatch(loginUser(userCredentials))
        .then(response => {
            if(response.payload) {
                setId('');
                setUsername('');
                setEmail('');
                setPassword('');
                navigate('/menu');
            } else {
                alert('Login failed');
            }
        
        })
    }

    function getUser(){
        let user = localStorage.getItem('user');
        if(user){
            user = JSON.parse(user);
        } else {
            user = null;
        }
        return user;
    }

    return (
        <div>
            <button>
                {loading ? "Loading..." : "Login"}
            </button>
            {error && <p>{error}</p>}
        </div>
    )

    // for Home
    // export const Home = () => {

    //     const [user, setUser] = useState(getUser());
    //     const handleLogout = () => {
    //         localStorage.removeItem('user');
    //         setUser(null);
    //         // navigate('/');
    //         // window.location.reload();
    //         // alert('Logout successful');
    //         // return false;
        
    //     }

    //     return (
    //         <>
    //         {user ? (
    //             <>
    //             <div> {user.email}</div>
    //             <button onClick={handleLogout}>Logout</button> 
    //             </>
    //         )}
    //         </>
    //     )
    
}