import { useEffect, useState } from "react";
import "./Component.css";

const AddPost = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("CurrentUserIn")));
  }, []);

  return (
    <div id="post">
      <div>
        <div className="post-top">
          <div>
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
          </div>
          <div>Create new post</div>
          <div>X</div>
        </div>
        <div className="post-mid">
          <input type="text" placeholder="Image Url" />
        </div>
        <div className="post-bot">
          <div>
            <div className="post-bot-top">
              <div>
                <div></div>
                <p>{userInfo && userInfo["currentUserName"]}</p>
              </div>
              <div>
                <input type="text" name="" placeholder="Write a caption ..." />
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
