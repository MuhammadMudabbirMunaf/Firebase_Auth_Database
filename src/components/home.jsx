// import React from "react";
// import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
// import "./home.css";

// function Home() {

//     let Post = ({ profilePhoto, names, postDate, postImage, postText }) => (
//         // ES6 coding of FB posts   
//         <div className="post">
//             <div className="postHeader">
//                 <img className="postPics" src={profilePhoto} alt="profile pic" />
//                 <div className="postName">
//                     {names} <br />
//                     {postDate}
//                 </div>
//             </div>

//             <div className="postText">
//                 {postText}
//             </div>

//             <img className="postImage" src={postImage} alt="postImg" />
//             <hr />

//             <div className="postFooter">
//                 <div><FontAwesomeIcon icon={faThumbsUp} /> Like </div>
//                 <div><FontAwesomeIcon icon={faComment} /> Comment </div>
//                 <div><FontAwesomeIcon icon={faShare} /> Share </div>
//             </div>
//             <hr />
//         </div>
//     );


//     let Page = () => (
//         <div className="page">
//             <Post names="Mudabbir"
//                 profilePhoto="https://832431.smushcdn.com/1688923/wp-content/uploads/2022/06/Melbourne-Branding-Photography_professional_headshots-Huss-52-3-web.jpg?lossy=1&strip=1&webp=1"
//                 postDate="14 Aug 2022"
//                 postImage="https://cdn.mainstreethost.com/wp-content/uploads/2021/02/social-media-image-size-cheat-sheet-800x600.jpg"
//                 postText="A local exploit requires prior access to the vulnerable system and usually increases the privileges of the person running the exploit past those granted by the system administrator."
//             />
//             <Post names="Fahad"
//                 profilePhoto="https://images.squarespace-cdn.com/content/v1/5521b031e4b06ebe90178744/1560360135937-3YXVZ3124L1YL2FOASSQ/headshots-linkedin-photographer.jpg?format=1000w"
//                 postDate="15 Aug 2022"
//                 postImage="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/zoom-online-classes-facebook-share-post-design-template-19bf316d9320014a24eb94177276c65c_screen.jpg?ts=1594918098"
//                 postText="A local exploit requires prior access to the vulnerable system and usually increases the privileges of the person running the exploit past those granted by the system administrator."
//             />
//             <Post names="Uzair"
//                 profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KJBSqkkxcDLLF1KJv4smptrlNmESFpjktYoT16Z-Z9-XSmepQ3Dik-N98yXZBX17H5s&usqp=CAU"
//                 postDate="16 Aug 2022"
//                 postImage="https://www.designcap.com/res/template/medium/de69a9e3a7468daddd30aeb154d9268d/page0.jpg?t=1602654191"
//                 postText="A local exploit requires prior access to the vulnerable system and usually increases the privileges of the person running the exploit past those granted by the system administrator."
//             />
//             <Post names="Hassan"
//                 profilePhoto="https://i.pinimg.com/originals/6d/b7/68/6db768dd203091a75014a40fc9d75701.jpg"
//                 postDate="17 Aug 2022"
//                 postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRBJG8hNpC7IAScfBs_2JA6jj6uRaeNDdxw&usqp=CAU"
//                 postText="A local exploit requires prior access to the vulnerable system and usually increases the privileges of the person running the exploit past those granted by the system administrator."
//             />
//         </div>
//     )
//     ReactDOM.render(<Page />, document.querySelector("#root"));
// }

// export default Home;

function Home() {
    return (
        <div>
            This is Home Page
        </div>
    )
}

export default Home;