import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { URL } from "../../config";
import axios from "axios";

const Shipment = () => {
  const userId = sessionStorage["userId"];

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPinCode] = useState("");

  const createShipment = () => {
    console.log(1);
    const body = {
      userId,
      name,
      companyName,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      country,
      pincode,
    };

    console.log(body);

    const url = `${URL}/shipment/createShipment`;

    // make api call using axios
    axios.post(url, body).then((response) => {
      // get the server result
      const result = response.data;
      const shipmentId = result.data.insertedId;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("Sender details added successfully");
        console.log(shipmentId);
        sessionStorage["shipmentId"] = shipmentId;
        console.log(shipmentId);
        navigate("/userHome/receiverAddress");
      }
    });
  };
  return (
    <div className="container my-4 py-4">
      <div className="row">
        <div className="col mx-auto col-md-6">
          <h4 className="mb-3 text-center">From</h4>
          <div className="row g-3 px-3">
            <div>
              <label htmlFor="name" className="col-form-label-sm">
                Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="form-control"
                id="name"
                placeholder="First Name and Last Name"
                required
              />
              <div className="invalid-feedback">Valid name is required.</div>
            </div>

            <div>
              <label htmlFor="companyName" className="col-form-label-sm">
                Company Name
              </label>
              <input
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                type="text"
                className="form-control"
                id="companyName"
                placeholder="Company Name"
                required
              />
              <div className="invalid-feedback">
                Valid company name is required.
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="col-form-label-sm">
                Phone*
              </label>
              <input
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="number"
                min={0}
                className="form-control"
                id="phone"
              />
            </div>

            <div>
              <label htmlFor="address" className="col-form-label-sm">
                Address
              </label>
              <input
                onChange={(e) => {
                  setAddress1(e.target.value);
                }}
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div className="invalid-feedback">Please enter address.</div>
            </div>

            <div>
              <label htmlFor="address2" className="col-form-label-sm">
                Address 2
              </label>
              <input
                onChange={(e) => {
                  setAddress2(e.target.value);
                }}
                type="text"
                className="form-control"
                id="address2"
                placeholder="Flat No / Apartment"
              />
            </div>

            <div>
              <label htmlFor="country" className="col-form-label-sm">
                Country
              </label>
              <select
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                className="form-select"
                id="country"
                required
              >
                <option>Choose...</option>
                <option>India</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="pin" className="col-form-label-sm">
                pin code
              </label>
              <input
                onChange={(e) => {
                  setPinCode(e.target.value);
                }}
                type="text"
                className="form-control"
                id="pin"
                placeholder=""
                required
              />
              <div className="invalid-feedback">pin code required.</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="city" className="col-form-label-sm">
                city
              </label>
              <input
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                type="text"
                className="form-control"
                id="city"
                placeholder=""
                required
              />
              <div className="invalid-feedback">city required.</div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="col-form-label-sm">
                State
              </label>
              <select
                onChange={(e) => {
                  setState(e.target.value);
                }}
                className="form-select"
                id="state"
                required
              >
                <option>Choose...</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div>
              <label htmlFor="email" className="col-form-label-sm">
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col d-flex justify-content-md-center">
              <button
                onClick={createShipment}
                className="btn col-6 btn-outline-dark"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
