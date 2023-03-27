import "./Component.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(false);
  const [userPosts, setUserPost] = useState();
  const route = useNavigate();

  useEffect(() => {
    displayPost();
  }, []);

  console.log(userPosts);

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
          setUser(true);
        }
      }
    } else {
      route("/login");
      toast.error("Login to your Profile");
    }
  }

  return (
    <div id="profile">
      <Sidebar />
      <div className="profile-cont">
        <div className="pro-info">
          <div className="pro-info-top">
            <div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2016/06/11/12/15/females-1450050_960_720.jpg"
                  alt="pro-pic"
                  className="resize-img"
                />
              </div>
            </div>
            <div>
              <div className="pro-username">
                <p>Username</p>
                <button>Edit Profile</button>
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
                <p>AK</p>
                <p>Blogger</p>
                <p>Nature lover | Traveler | photographer</p>
                <p>Mumbai, Thane</p>
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
        <div className="post-save-tag">
          <div>
            <i className="fa-solid fa-table-cells"></i>
            <p>POSTS</p>
          </div>
          <div>
            <i className="fa-regular fa-bookmark"></i>
            <p>SAVED</p>
          </div>
          <div>
            <i className="fa-solid fa-house-user"></i>
            <p>TAGGED</p>
          </div>
        </div>
        <div className="profile-display-posts">
          {userPosts &&
            userPosts.map((e, i) => (
              <div key={i}>
                <img src={e.image} alt="posts" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
