function BmiPreview({bmiFormData}){
    return(
        <> 
            <p>bmi detais go here</p>
            <p>Weight: {bmiFormData.weight}</p>
            <p>Height: {bmiFormData.height}</p>
            <p>Age: {bmiFormData.age}</p>
        </>
        
    );
    

};

export default BmiPreview;