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
function onWeightChange(event){
  setFormData({...formData, weight:event.target.value})
}

function onHeightChange(event){
  setFormData({...formData, height:event.target.value})
}

function onAgeChange(event){
  setFormData({...formData, age:event.target.value})
}

return (
    <>
    
    <Header></Header>

    <BmiForm 
      formData = {formData}
      onWeightChange={onWeightChange}
      onHeightChange={onHeightChange}
      onAgeChange={onAgeChange}> 
    </BmiForm>

    <BmiPreview 
      bmiFormData = {formData}>
    </BmiPreview>

    <ClearButton
      clearButton = {formData}>
    </ClearButton>

    <Footer></Footer>

    </>
  )
}

export default App
