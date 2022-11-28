import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './signup.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sign_in = () => {

    const [logdata, setData] = useState({
        email: "",
        password: ""
    });
    console.log(logdata)
    const adddata = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    };

    const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = logdata;

        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status == 400 || !data) {
            console.log("invalid details");
            toast.warn("invalid details", {
            position: "top-center",
      })
        } else {
            console.log("data valid");
            toast.success("user valid", {
            position: "top-center",
      })
            setData({ ...logdata, email: "", password: "" });
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
                        <div className="form_data">
                            <label htmlFor="">Url Endpoint</label>
                            <input type='text'
                                onChange={adddata}
                                value={logdata.email}
                                name='email' id='email' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Nama</label>
                            <input type='password'
                                onChange={adddata}
                                value={logdata.password}
                                name='password' placeholder="At least 6 charackter" id='password' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Tanggal Lahir</label>
                            <input type='text'name='tanggal lahir' id='tanggal lahir' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Usia</label>
                            <input type='text'name='tanggal lahir' id='tanggal lahir' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">No Whatsapp</label>
                            <input type='text'name='tanggal lahir' id='tanggal lahir' />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Asal Kota</label>
                            <input type='select'name='tanggal lahir' id='tanggal lahir' />
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
export default Sign_in;
