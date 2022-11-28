import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vieww = () => {

  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  });
  console.log(udata)

  const adddata = (e) => {
    const { name, value } = e.target;

    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    const res = await fetch("register",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname, email, mobile, password, cpassword
      })
    });
    const data = await res.json();
    // console.log(data);

    if (res.status === 422 || !data) {
      // alert("no data")
      toast.warn("invalid details", {
        position: "top-center",
      })
    } else {
      // alert("data successfully ");
      toast.success("data successfully added", {
        position: "top-center",
      })
      setUdata({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" });
    }
  }
  
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          {/* <img src="./blacklogoamazon.png" alt="amazonlogo" /> */}
        </div>
        <div className="sign_form">
          <form method='POST'>
            <h1>Data Diri</h1>
            <div classNamfe="orm_data">
              <label htmlFor="fname">Url Endpoint</label>
              <input type="text"
                onChange={adddata}
                value={udata.fname}
                name="fname" id="fname" />
            </div>
            <div className="form_data">
              <label htmlFor="">Nama</label>
              <input type="text"
                onChange={adddata}
                value={udata.email}
                name="email" id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="number">Tanggal Lahir</label>
              <input type="text"
                onChange={adddata}
                value={udata.mobile}
                name="mobile" id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="number">Usia</label>
              <input type="text"
                onChange={adddata}
                value={udata.mobile}
                name="mobile" id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="number">No Whatsapp</label>
              <input type="text"
                onChange={adddata}
                value={udata.mobile}
                name="mobile" id="mobile" />
            </div>
        
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}

export default Vieww