import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert  from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

function App() {
  const [alert,setAlert]=useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const data = await fetch('http://localhost:3000/razorpay', { method: 'POST' }).then((t) =>
      t.json()
    )

    console.log(data)

    const options = {
      key: document.domain === 'localhost' ? 'rzp_test_cwrzaBPaihmAnw' : 'PRODUCTION_KEY',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Payment',
      description: 'Thank you for nothing. Please give us some money',
      image: 'http://localhost:3000/logo.svg',
      // handler: function (response) {
      //   alert(response.razorpay_payment_id)
      //   alert(response.razorpay_order_id)
      //   alert(response.razorpay_signature)
      // },
      prefill: {
        name: 'Ishita',
        email: 'sdfdsjfh2@ndsfdf.com',
        phone_number: '9899999999'
      }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  return (<BrowserRouter>
    <Navbar showAlert={showAlert}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
    <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
      <Route path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
    
      <Route path="/" element={<Home showAlert={showAlert} displayRazorpay={displayRazorpay}/>}></Route>
      
      
     
    </Routes>
    </div>
  </BrowserRouter>
    /* <div className="App">
      <Home displayRazorpay={displayRazorpay} />
    </div> */
  );
}

export default App;




















