import Header from  './Component/Header';
import Footer from './Component/Footer';
import BmiForm from './Component/BmiForm';
import BmiPreview from './Component/BmiPreview';
import { useState } from 'react';

function App() {
 const [formData, setFormData] = useState({
                                  height: "",
                                  weight: "",
                                  age: "",
                                  gender: ""});
function onWeightChange(event){
  setFormData({...formData, weight:event.target.value})
}

function onHeightChange(event){
  setFormData({...formData, height:event.target.value})
}
  return (
    <>
    
    <Header></Header>

    <BmiForm 
      formData = {formData}
      onWeightChange={onWeightChange}
      onHeightChange={onHeightChange}> 
    </BmiForm>

    <BmiPreview 
      bmiFormData = {formData}>
    </BmiPreview>

    <Footer></Footer>

    </>
  )
}

export default App
