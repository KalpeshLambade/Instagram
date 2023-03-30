import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Component.css";
import { toast } from "react-hot-toast";

const AddPost = () => {
  const [userInfo, setUserInfo] = useState();
  const route = useNavigate();
  const [propic, setPropic] = useState();
  const [post, setPost] = useState({
    caption: "",
    image: "",
    username: "",
    profileImage: "",
  });

  const [Status, setStatus] = useState({statusImg:'', username:""});

  useEffect(() => {
    var currentData = JSON.parse(localStorage.getItem("CurrentUserIn"));
    if (currentData) {
      setUserInfo(currentData);
    }
  }, []);

  useEffect(() => {
    var currentUser = JSON.parse(localStorage.getItem("CurrentUserIn"));
    if (currentUser) {
      setStatus({ ...Status, ["username"]:currentUser.currentUserName}); //adding username to status
      // var setimage;
      var dataFromLs = JSON.parse(localStorage.getItem("userDataIn"));
      for (var i = 0; i < dataFromLs.length; i++) {
        if (dataFromLs[i].email === currentUser.currentEmail) {
          setPropic(dataFromLs[i].profileImage);
          setPost({ ...post, ["profileImage"]: dataFromLs[i].profileImage });
        }
      }
    }
  }, []);
  //Submit Post
  function addPost(e) {
    e.preventDefault();
    if (userInfo) {
      var newVal = post;
      newVal.username = userInfo.currentUserName;
      var dataFromLs = JSON.parse(localStorage.getItem("userDataIn"));

      for (var i = 0; i < dataFromLs.length; i++) {
        if (dataFromLs[i].email === userInfo.currentEmail) {
          var obj = dataFromLs[i];
          obj["posts"] = obj["posts"] || [];
          obj["posts"].push(post);
          dataFromLs[i] = obj;
        }
      }

      localStorage.setItem("userDataIn", JSON.stringify(dataFromLs));
      setPost({
        caption: "",
        image: "",
        username: "",
        profileImage: "",
      });
      route("/");
      toast.success("Posted");
    } else {
      toast.error("Login to Add post");
    }
  }
// console.log(Status);
  //submit status
  function submitStatus(e) {
    e.preventDefault();
      if(userInfo){
        // userInfo.currentUserName
        var dataFromLs = JSON.parse(localStorage.getItem("userDataIn"));
        for(var i=0; i<dataFromLs.length; i++){
          if(dataFromLs[i].email === userInfo.currentEmail ){
            var newCode = dataFromLs[i];
            newCode["status"] =newCode["status"] || [];
            newCode["status"].push(Status);
            dataFromLs[i] =newCode;
          }
        }
        localStorage.setItem("userDataIn",JSON.stringify(dataFromLs));
        route('/');
        toast.success("Status Updated");
      }
      else{
        toast.error("Login to add Posts")
      }
  }

  //featch data for adding post
  function fetchData(e) {
    var name = e.target.name;
    var value = e.target.value;

    setPost({ ...post, [name]: value });
  }

  //featch data for adding status
  function featchStatus(e) {
    var name = e.target.name;
    var value = e.target.value;

    setStatus({ ...Status, [name]: value });
  }

  return (
    <div id="post">
      <div>
        <div className="post-top">
          <div
            className="cursor"
            onClick={() => {
              route("/");
            }}
          >
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
          </div>
          <div>Create new post</div>
          <div
            className="cursor"
            onClick={() => {
              route("/");
            }}
          >
            X
          </div>
        </div>
        <div className="post-mid">
          <div>
            <img
              src="https://embedsocial.com/wp-content/uploads/2020/10/add-links-instagram-posts.jpg.webp"
              alt="logo"
              className="resize-img"
            />
          </div>
          <div>
            <h3>Add Post</h3>
            <form
              onSubmit={(e) => {
                submitStatus(e);
              }}
            >
              <input
                type="text"
                placeholder="Post Url"
                name="statusImg"
                onChange={(e) => {
                  featchStatus(e);
                }}
              />
              <input
                type="submit"
                value="Add Post"
              />
            </form>
          </div>
        </div>

        <div className="post-bot">
          <div>
            <div className="post-bot-top">
              <div>
                <div>
                  <img src={propic} alt="pro-pic" className="resize-img" />
                </div>
                <p>{userInfo && userInfo["currentUserName"]}</p>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Caption"
                  onChange={(e) => {
                    fetchData(e);
                  }}
                  name="caption"
                  value={post.caption}
                />
                <input
                  type="text"
                  placeholder="Image Url"
                  onChange={(e) => {
                    fetchData(e);
                  }}
                  name="image"
                  value={post.image}
                />
              </div>
            </div>
            <div className="post-bot-bot">
              <div>
                <p>Add Location</p>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p>Accessibility</p>
                <i className="fa-sharp fa-solid fa-arrow-down"></i>
              </div>
              <div>
                <p>Advance setting</p>
                <i className="fa-sharp fa-solid fa-arrow-down"></i>
              </div>
            </div>
            <div className="post-button">
              <button
                onClick={(e) => {
                  addPost(e);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
