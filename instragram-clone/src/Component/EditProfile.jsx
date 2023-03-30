import "./Component.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Footer from "./Footer";

const EditProfile = () => {
  const [showPage, setShowPage] = useState(true);
  const route = useNavigate();
  const [userData, setUserData] = useState();
  const [editData, setEditData] = useState({
    name: "",
    username: "",
    bioData: "",
    email: "",
    image: "",
  });

  function closePage(value) {
    if (value === "sidebar") {
      setShowPage(false);
    } else {
      setShowPage(true);
    }
  }

  useEffect(() => {
    updateProfile();
  }, []);

  const updateProfile = () => {
    var currentData = JSON.parse(localStorage.getItem("CurrentUserIn"));
    var dataFromLs = JSON.parse(localStorage.getItem("userDataIn"));
    var userPro;

    if (currentData) {
      for (var i = 0; i < dataFromLs.length; i++) {
        if (dataFromLs[i].email === currentData.currentEmail) {
          userPro = {
            name: dataFromLs[i].name,
            profilepic: dataFromLs[i].profileImage,
            username: dataFromLs[i].username,
          };
        }
      }
      setUserData(userPro);
    } else {
      toast.error("Login to your profile");
      route("/login");
    }
  };

  // console.log(editData);

  const editPro = (e) => {
    e.preventDefault();
    var dataFromLs = JSON.parse(localStorage.getItem("userDataIn"));
    var currentData = JSON.parse(localStorage.getItem("CurrentUserIn"));

      for(var i=0; i<dataFromLs.length; i++){
        if (dataFromLs[i].email === currentData.currentEmail) {
          var newbj = dataFromLs[i];
          newbj.name = editData.name;

          if(verifyEmail(dataFromLs,editData.email)){
            newbj.email = editData.email;
          }
          else{
            return toast.error("Email is already Present");
          }

          newbj.profileImage= editData.image;
          newbj.username =editData.username;
          newbj.bioData =editData.bioData;
          dataFromLs[i] =newbj;
        }
      }
      localStorage.setItem("CurrentUserIn", JSON.stringify({currentEmail:editData.email, currentUserName: editData.username}))
      localStorage.setItem("userDataIn",JSON.stringify(dataFromLs));
      toast.success("Profile updated");
      route("/profile");
  };

  const featch = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setEditData({ ...editData, [name]: value });
  };

  function verifyEmail(dataFromLs, checkEmail){
    var flag =false;
    for(var i=0; i<dataFromLs.length; i++){
      if(dataFromLs[i].email === checkEmail){
        flag =true;
      }
    }
    if(flag){
      return false;
    }
    else{
      return true;
    }

  }

  return (
    <div id="profile">
      {showPage ? (
        <Sidebar
          onClose={() => {
            closePage("sidebar");
          }}
        />
      ) : (
        <Searchbar
          onClose={() => {
            closePage();
          }}
        />
      )}
      <div className="home-empty"></div>
      <div className="edit">
        <div className="edit-profile">
          <div className="edit-profile-left">
            <div>
              <div>
                <div>
                  <img
                    src="https://companieslogo.com/img/orig/META-4767da84.png?t=1654568366"
                    alt=""
                  />
                </div>
                <p className="black">Meta</p>
              </div>

              <p className="black">Some account settings are moving</p>
              <p>
                Soon, Accounts Center will be the primary place to manage your
                account info, settings and experiences across Meta technologies
                like Facebook and Instagram.
              </p>
              <p className="blue">Learn more</p>
            </div>

            <div>
              <div>
                <p>
                  <strong>Edit Profile</strong>
                </p>
                <p>Professional Account</p>
                <p>Change Password</p>
                <p>Apps and Websites</p>
                <p>Email Notification</p>
                <p>Push Notification</p>
                <p>Manage Contact</p>
                <p>Privacy and security</p>
                <p>Ads</p>
                <p>Supervision</p>
                <p>Login Activity</p>
                <p>Emails From Instagram</p>
                <p>Help</p>
                <p className="blue">Switch to Personal Account</p>
              </div>
            </div>

            <div>
              <div className="meta">
                <div>
                  <img
                    src="https://companieslogo.com/img/orig/META-4767da84.png?t=1654568366"
                    alt=""
                  />
                </div>
                <p className="black">Meta</p>
              </div>
              <p className="blue">
                <strong>Accounts Center</strong>
              </p>
              <p>
                Control settings for connected experiences across Instagram, the
                Facebook app and Messenger, including story and post sharing and
                logging in.
              </p>
            </div>
          </div>
          <div className="edit-profile-right">
            <div className="edit-pro-info tc">
              <div>
                <div>
                  <img
                    src={userData && userData.profilepic}
                    alt="pro-pic"
                    className="resize-img"
                  />
                </div>
                <div>
                  <p>{userData && userData.username}</p>
                  <p>{userData && userData.name}</p>
                </div>
              </div>
            </div>
            <div className="edit-name">
              <div>
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => {
                    featch(e);
                  }}
                />
              </div>
              <div></div>
              <div>
                <p>
                  Help people discover your account by using the name you're
                  known by: either your full name, nickname, or business name.
                </p>
                <br />
                <p>You can only change your name twice within 14 days.</p>
              </div>
            </div>
            <div className="edit-adj">
              <div>
                <p>UserName</p>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    featch(e);
                  }}
                  name="username"
                />
              </div>
              <div></div>
              <div>
                <p>
                  In most cases, you'll be able to change your username back to
                  akblogger30 for another 14 days. Learn more
                </p>
              </div>
            </div>

            <div className="edit-adj edit-email">
              <div>
                <p>BioData</p>
                <input
                  type="text"
                  placeholder="Bio"
                  onChange={(e) => {
                    featch(e);
                  }}
                  name="bioData"
                />
              </div>
            </div>

            <div className="edit-adj edit-email">
              <div>
                <p>Email Id</p>
                <input
                  type="email"
                  placeholder="email"
                  onChange={(e) => {
                    featch(e);
                  }}
                  name="email"
                />
              </div>
            </div>
            <div className="edit-adj edit-image">
              <div>
                <p>Profile Image </p>
                <input
                  type="text"
                  placeholder="url"
                  onChange={(e) => {
                    featch(e);
                  }}
                  name="image"
                />
              </div>
            </div>
            <div className="edit-adj tc">
              <div>
                <p>Show account suggestions on profiles</p>
                <div>
                  <input type="checkbox" className="eidit-checkbox" />
                  <p>
                    Choose whether people can see similar account suggestions on
                    your profile, and whether your account can be suggested on
                    other profiles.<b className="blue">[?]</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="edit-submit">
              <div>
                <button
                  onClick={(e) => {
                    editPro(e);
                  }}
                >
                  Submit
                </button>
              </div>
              <p>Temporarily deactivate my account</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EditProfile;
