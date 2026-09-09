import Header from  './Component/Header';
import Footer from './Component/Footer';
import BmiForm from './Component/BmiForm';
import BmiPreview from './Component/BmiPreview';
import ClearButton from './Component/ClearButton';
import { useState } from 'react';

function App() {
 const [formData, setFormData] = useState({
                                  height: "",
                                  weight: "",
                                  age: "",
                                  gender: ""});

  const[bmi, setBmi] = useState("");

  function onWeightChange(event){
    setFormData({...formData, weight:event.target.value})
  }

  function onHeightChange(event){
    setFormData({...formData, height:event.target.value})
  }

  function onAgeChange(event){
    setFormData({...formData, age:event.target.value})
  }

  function clearHandler(){
    setFormData({height:"",weight:"", age:""})
  }

  function calculateBmi(event){
    event.preventDefault();
    setBmi(formData.weight/(formData.height*formData.height))
  }


return (
    <>
    
    <Header></Header>

    <BmiForm 
      formData = {formData}
      onWeightChange={onWeightChange}
      onHeightChange={onHeightChange}
      onAgeChange={onAgeChange}
      calculateBmi = {calculateBmi}> 
    </BmiForm>

    <BmiPreview 
      bmiFormData = {formData}
      bmi = {bmi}>       
    </BmiPreview>

    <ClearButton
      clearHandler = {clearHandler}>
    </ClearButton>

    <Footer></Footer>

    </>
  )
}

export default App
