import { useState, useEffect } from "react";
import moment from 'moment';

import {
    getFirestore, collection, addDoc,
    getDocs, doc, onSnapshot, query,
    serverTimestamp, orderBy, deleteDoc, updateDoc
} from "firebase/firestore";
import "./home.css";

function Home() {

    const db = getFirestore();

    //state variables or stateful components
    const [postText, setPostText] = useState("");
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [editing, setEditing] = useState({ editingId: null, editingText: "" })


    useEffect(() => {

        // this is to get data only once. Afterwards, it is not used/stopped.
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));

            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => `, doc.data());

                setPosts((prev) => {
                    let newArray = [...prev, doc.data()];
                    return newArray
                });

            });
        }
        // getData();

        let unsubscribe = null;
        // this is to get real time data
        const getRealtimeData = async () => {

            const q = query(collection(db, "posts"), orderBy("createdOn", "desc"));

            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const posts = [];

                querySnapshot.forEach((doc) => {
                    // posts.unshift(doc.data());
                    // posts.push(doc.data());

                    posts.push({ id: doc.id, ...doc.data() });

                });

                setPosts(posts);
            });

        }
        getRealtimeData();

        // Cleanup function / After leaving work or having a break, 
        //                    work is also stopped/aborted
        return () => {
            unsubscribe();
        }
    }, [])

    // when typed on keyboard and post button is clicked, 
    // this function runs and send data to firebase firestore "posts" collection
    const savePost = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "posts"), {
                text: postText,
                // createdOn: new Date().getTime(),
                createdOn: serverTimestamp(),
            });
        } catch (e) {
        }


    }

    const deletePost = async (postId) => {
        await deleteDoc(doc(db, "posts", postId));
    }

    const updatePost = async (e) => {
        e.preventDefault();

        await updateDoc(doc(db, "posts", editing.editingId),
            { text: editing.editingText });

        setEditing({ editingId: null, editingText: "" })
    }


    return (
        <div>

            <div className="searchBar">
                <form onSubmit={savePost}>

                    <textarea className="postBox" maxLength="80" type="text"
                        placeholder="What's in your mind..."
                        onChange={(e) => { setPostText(e.target.value) }} />

                    <br />
                    <button type="submit" className="searchBtn">Post..!</button>

                </form>
            </div>


            <div>
                {(isLoading) ? "loading..." : ""}

                {posts.map((eachPost, i) => (
                    <div className="post" key={i}>

                        <h3 className="postHead" href={eachPost?.url}
                            target="_blank" rel="noreferrer">

                            {(eachPost.id === editing.editingId) ?
                                <form onSubmit={updatePost}>

                                    <input className="editBox" type="text" value={editing.editingText}
                                        onChange={(e) => {
                                            setEditing({ ...editing, editingText: e.target.value })
                                        }}
                                        maxLength="80" placeholder="please enter updated value" />

                                    <button className="updateBtn" type="submit">Update</button>
                                </form>
                                :
                                eachPost?.text}
                        </h3>

                        <span className="date">{moment((eachPost?.createdOn?.seconds) ?
                            eachPost?.createdOn?.seconds * 1000 : undefined).format('Do MMMM, h:mm a')}
                        </span>

                        <br />
                        <button className="delBtn"
                            onClick={() => { deletePost(eachPost?.id) }}
                        >Delete</button>

                        {(editing.editingId === eachPost?.id) ? null :

                            <button className="editBtn"
                                onClick={() => { setEditing({ editingId: eachPost?.id, editingText: eachPost?.text }) }}
                            >Edit</button>
                        }

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;