import Header from  './Component/Header';
import Footer from './Component/Footer';
import BmiForm from './Component/BmiForm';
import { useState } from 'react';

function App() {

  const [weight, setWeight] = useState(""); // in cm
  const [hight, setHight] = useState("");  // in  kg
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  let cat = "";
  if (bmiValue < 18.5) cat = "Under Weight";
  else if (bmiValue < 25) cat = "Normal Weight"
  else if (bmiValue < 30) cat = "Over Weight"
  else cat = "Obese"
  

  return (
    <>
    
    <Header></Header>
    <BmiForm></BmiForm>
    <Footer></Footer>

    </>
  )
}

export default App
