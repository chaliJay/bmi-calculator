function BmiPreview({bmiFormData, bmi}){

    return(
        <> 
            <p>bmi detais go here</p>
            <p>Weight: {bmiFormData.weight}</p>
            <p>Height: {bmiFormData.height}</p>
            <p>Age: {bmiFormData.age}</p>
            <p>bmi: {bmi}</p>
        </>
        );
    };

export default BmiPreview;