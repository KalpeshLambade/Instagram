import "./Component.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";

const Profile = () => {
  const [user, setUser] = useState();
  const [userPosts, setUserPost] = useState();
  const [savePost, setSavePost] = useState();
  const [showSavePost, setShowSavePost] = useState(false);
  const[showPage, setShowPage] = useState(true);
  const route = useNavigate();

  useEffect(() => {
    displayPost();
  }, []);

  // console.log(userPosts);

  function displayPost() {
    var currentUser = JSON.parse(localStorage.getItem("CurrentUserIn"));
  
    if (currentUser) {
      var dataFromLs = JSON.parse(localStorage.getItem("userDataIn"));
      for (var i = 0; i < dataFromLs.length; i++) {
        if (
          dataFromLs[i].email === currentUser.currentEmail &&
          dataFromLs[i].posts
        ) {
          setUserPost(dataFromLs[i].posts);
          setUser(dataFromLs[i]);
        }
        else if(dataFromLs[i].email === currentUser.currentEmail){
          setUser(dataFromLs[i]);
        }
      }
    } else {
      route("/login");
      toast.error("Login to your Profile");
    }
  }

  function showSave() {
    var dataFromLS = JSON.parse(localStorage.getItem("userDataIn"));
    var CurrentUser = JSON.parse(localStorage.getItem("CurrentUserIn"));
    
    for (var i = 0; i < dataFromLS.length; i++) {
      if (dataFromLS[i].email === CurrentUser.currentEmail) {
        setSavePost(dataFromLS[i].save);
      }
    }
    setShowSavePost(true);
  }

  function closePage(value){
    if(value === "sidebar"){
      setShowPage(false);
    }
    else{
        setShowPage(true);
    }
  }

  // console.log(user);

  return (
    <div id="profile">
      {showPage ? <Sidebar onClose={() => {closePage("sidebar")}} /> : <Searchbar onClose={() => {closePage()}}/> }
      <div className="home-empty"></div>
      <div className="profile-cont">
        <div className="pro-info">
          <div className="pro-info-top">
            <div>
              <div>
                <img
                  src={user && user.profileImage}
                  alt="pro-pic"
                  className="resize-img"
                />
              </div>
            </div>
            <div>
              <div className="pro-username">
                <p>{user && user.username}</p>
                <button onClick={() => {route("/edit")}} className="cursor">Edit Profile</button>
                <button>Add Tool</button>
                <div>
                  <i className="fa-solid fa-gear"></i>
                </div>
              </div>
              <div className="pro-follower">
                <p>
                  <strong>40 </strong>posts
                </p>
                <p>
                  <strong>26 </strong>followers
                </p>
                <p>
                  <strong>25 </strong>following
                </p>
              </div>
              <div className="pro-details">
                <p>{user && user.username}</p>
                <p>{user && user.name}</p>
                <p>{user && user.bioData}</p>
              </div>
            </div>
          </div>

          <div className="pro-info-bot">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2015/05/13/13/53/skull-765477_960_720.jpg"
                alt="pro-pic"
                className="resize-img"
              />
            </div>
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2020/06/16/16/00/people-5306374__340.png"
                alt="pro-pic"
                className="resize-img"
              />
            </div>
          </div>
        </div>
        <div className="post-save-tag " >
          <div onClick={() => {setShowSavePost(false)}} className="cursor">
            <i className="fa-solid fa-table-cells"></i>
            <p>POSTS</p>
          </div>
          <div
            onClick={() => {
              showSave();
            }}
            className="cursor"
          >
            <i className="fa-regular fa-bookmark "></i>
            <p>SAVED</p>
          </div>
          <div>
            <i className="fa-solid fa-house-user"></i>
            <p>TAGGED</p>
          </div>
        </div>
        <div className="profile-display-posts">
          {showSavePost ? (
            <div>
              {savePost &&
                savePost.map((e, i) => (
                  <div key={i}>
                    <img src={e.image} alt="posts" />
                  </div>
                ))}
            </div>
          ) : (
            <div>
              {userPosts &&
                userPosts.map((e, i) => (
                  <div key={i}>
                    <img src={e.image} alt="posts" />
                  </div>
                ))}
            </div>
          )}

          {/* {savePost &&
            savePost.map((e, i) => (
              <div key={i}>
                <img src={e.image} alt="posts" />
              </div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
