import "./Component.css";
import Sidebar from "./Sidebar";

function Homepage() {
  return (
    <div id="homePage">
      {/* <div className="home-sidenav">
        <div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="home-side-links">
            <div>
              <i className="fa-solid fa-house"></i>
              <p>Home</p>
            </div>
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
              <p>Search</p>
            </div>
            <div>
              <i class="fa-regular fa-compass"></i>
              <p>Explore</p>
            </div>
            <div>
              <i class="fa-solid fa-camera-retro"></i>
              <p>Reels</p>
            </div>
            <div>
              <i class="fa-solid fa-location-arrow"></i>
              <p>Messages</p>
            </div>
            <div>
              <i class="fa-regular fa-heart"></i>
              <p>Notification</p>
            </div>
            <div>
              <i class="fa-solid fa-plus"></i>
              <p>Create</p>
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </div>

        <div>
          <i class="fa-solid fa-bars"></i>
          <p>More</p>
        </div>
      </div> */}
      <Sidebar />
      <div className="home-content">
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div></div>
      </div>
      <div className="home-suggestions">
        <div className="home-suggestions-top"></div>
        <div className="home-suggestions-mid">
          <div>
            <p>Suggestions for you</p>
            <p>See All</p>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>abc1234</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>abc1234</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>abc1234</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
          <div className="home-profiles">
            <div></div>
            <div>
              <h5>abc1234</h5>
              <p>Followed by _faizanm_, parag.gurav2000 + 3 more</p>
            </div>
            <div>Follow</div>
          </div>
        </div>
        <div className="home-suggestions-bot">
          <div>
            <p>About</p>
            <p>Help</p>
            <p>Press</p>
            <p>API</p> 
            <p>Jobs</p> 
            <p>Privacy</p>
            <p>Terms</p>
            <p>Locations</p> 
            <p>Language</p>
            <p>English</p> 
            <p>Meta</p> 
            <p>Verified</p> 
          </div>
          <div>
          © 2023 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
