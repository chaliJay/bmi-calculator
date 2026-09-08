import Header from  './Component/Header';
import Footer from './Component/Footer';
import BmiForm from './Component/BmiForm';
import BmiPreview from './Component/BmiPreview';
import { useState } from 'react';

function App() {
 const [formData, setFormData] = useState({
                                  height: 0,
                                  weight: 0,
                                  age: 0,
                                  gender: ""});
  return (
    <>
    
    <Header></Header>
    <BmiForm>
      bmiFormData = {formData}
    </BmiForm>
    <BmiPreview>
      bmiFormData = {formData}
    </BmiPreview>
    <Footer></Footer>

    </>
  )
}

export default App
