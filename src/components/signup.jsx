
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";


function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupHandler = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                // after signup immediately send verification email 
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                    });

                // to update profile of the user
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                }).catch((error) => {
                    // An error occurred
                });

            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <>
            <h4>
                This is Signup Page
            </h4>
            <form onSubmit={signupHandler}>

                Name : <input type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={(e) => { setName(e.target.value) }} />
                <br />

                Email : <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => { setEmail(e.target.value) }} />
                <br />

                Password : <input type="password"
                    name="new-password"
                    placeholder="password"
                    onChange={(e) => { setPassword(e.target.value) }} />
                <br />

                Confirm Password : <input type="password"
                    name="new-password"
                    placeholder="confirm password" />
                <br />

                <button type="submit">Signup</button>

            </form>
        </>
    )
}

export default Signup;