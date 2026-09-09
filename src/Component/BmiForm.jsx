function BmiForm({formData, onWeightChange, onHeightChange, onAgeChange, calculateBmi}){
    return(
        <form onSubmit={calculateBmi}>
            <label>Enter Your Weight:
                <input  type = "text"
                        value={formData.weight}
                        onChange={onWeightChange}/>
            </label>

            <label>Enter Your Height:
                <input  type = "text"
                        value={formData.height}
                        onChange = {onHeightChange}/>
            </label>

            <label>Enter Your Age:
                <input  type = "text"
                        value={formData.age}
                        onChange = {onAgeChange}/>
            </label>

            <label>Gender:
                <div>
                < select>
                    <option value = "option1">Male</option> 
                    <option value = "option2">Female</option>
                </select>
                </div>
            </label>

            <button type="submit">Submit</button>
        </form>
        
    );

}

export default BmiForm;