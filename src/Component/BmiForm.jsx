function BmiForm(){
    return(
        <form>
            <label>Enter Your Weight:
                <input type = "text"/>
            </label>

            <label>Enter Your Height:
                <input type = "text"/>
            </label>

            <label>Enter Your Age:
                <input type = "text"/>
            </label>

            <label>Gender:
                <input type = "text"/>

                <div>
                < select >
                    <option value = "option1">Male</option> 
                    <option value = "option2">Female</option>
                </select>
                </div>
            </label>

          

            <button>Submit</button>
        </form>
        
    );

}

export default BmiForm;