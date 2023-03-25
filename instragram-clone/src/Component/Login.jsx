import "./Component.css";
import Footer from "./Footer";

function Login() {
  return (
    <div id="login">
      <div>
        <div className="login-top">
          <div className="login-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
              alt="logo"
            />
          </div>
          <div className="login-form">
            <form>
              <input type="email" name="" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" name="" value="Log in" />
            </form>
          </div>
          <div className="login-or">
            <fieldset>
              <legend>OR</legend>
            </fieldset>
          </div>
          <div className="login-password">
            <p>
              <i class="fa-brands fa-square-facebook"></i> Log in With Facebook
            </p>
            <p>Forgot Password</p>
          </div>
        </div>
        <div className="login-mid">
          <p>
            Don't have an account? <b>Sign up</b>
          </p>
        </div>
        <div className="login-bot">
          <p>Get the app.</p>
          <div>
            <div>
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="store" />
            </div>
            <div>
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="store" />
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}
export default Login;
