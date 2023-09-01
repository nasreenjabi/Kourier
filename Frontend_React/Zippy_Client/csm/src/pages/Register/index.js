import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // used to navigate from one component to another
  const navigate = useNavigate();
 //storing input to state
 var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
 var pattern1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
 

  const registerPerson = () => {

    var hasLength = /.{8,}/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasUppercase = /[A-Z]/.test(password);
    var hasDigit = /\d/.test(password);
    var hasSpecialCharacter = /[!@#$%^&*()_+]/.test(password);

    if (name.length == 0) {
      toast.warning("Please enter name");
    
    }
    
    else if (phone.length == 0) {
      toast.warning("Please enter phone number");
    } else if (email.length == 0) {
      toast.warning("Please enter email");
    }
    else if (!pattern.test (email)) {
         toast.warning("Please Enter a valid E-mail Address")
    }
    else if (password.length == 0) {
      toast.warning("Please enter password");

    } else if (confirmPassword.length == 0) {
      toast.warning("Please confirm your password");
    } 
    

   
    
   else if (!hasLength) {
      toast.warning("Password must be at least 8 characters long.");
    } else if (!hasLowercase) {
      toast.warning("Password must contain at least one lowercase letter.");
    } else if (!hasUppercase) {
      toast.warning("Password must contain at least one uppercase letter.");
    } else if (!hasDigit) {
      toast.warning("Password must contain at least one digit.");
    } else if (!hasSpecialCharacter) {
      toast.warning("Password must contain at least one special character (!@#$%^&*()_+).");
    } 


    else if (password != confirmPassword) {
      toast.warning("Password does not match");
    } else {
      const body = {
        name,
        companyName,
        phone,
        email,
        password,
      };

      // url to call the api
      const url = `${URL}/user/register`;

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        console.log(body);
        // get the data from the response
        const result = response.data;
        console.log(result);
        if (result["status"] == "success") {
          toast.success("Successfully signed up new user");

          // navigate to the signin page
          navigate("/signin");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  return (
    <div>
      <div className="container col-8 col-xl-6 my-4 pt-2 pb-5 shadow bg-body rounded">
        <h4 className="heading">Register</h4>

        <div className="row mx-auto g-4">
          <div className="col-md-6">
            <label htmlFor="inputName4" className="form-label">
              Name*
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="inputName4"
              placeholder="Enter your name" // Add a placeholder here
            />
          </div>

          <div className="col-6">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <input
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="companyName"
              placeholder="Enter your email-Address"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email*
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter your email"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPhone4" className="form-label">
              Phone*
            </label>
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="number"
              min={0}
              className="form-control"
              id="inputPhone4"
              placeholder="Enter phone-number"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password*
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Enter-password" 
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="confirmPassword4" className="form-label">
              Confirm Password*
            </label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="confirmPassword4"
              placeholder="confirm-password"
            />
          </div>

          <div className="col d-flex justify-content-md-center">
            <button
              onClick={registerPerson}
              className="btn col-6 btn-outline-dark"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam pariatur
        maxime ea, quis corrupti modi nihil necessitatibus sequi laudantium
        voluptatum ipsum ut libero, sapiente cumque sit aliquid tempore dolorum?
        Dolorum consequatur velit id, quidem doloribus eius soluta atque
        reprehenderit excepturi magni dicta perferendis aliquam eligendi,
        perspiciatis fugiat, ex praesentium blanditiis sapiente minima.
        Repellat, veritatis velit! In, a officiis. Quia temporibus ipsa deserunt
        error aliquam molestiae, fugit commodi quas. Facilis cupiditate commodi
        ipsam doloribus fuga quisquam ex atque aperiam repellat numquam tempora
        mollitia beatae sit quia aliquam labore cumque, deleniti unde ducimus,
        aspernatur quaerat. Amet reiciendis nulla impedit, aspernatur rem alias!
      </div>
    </div>
  );
};

export default Register;
