import React, { useState } from 'react'
import {omit} from 'lodash'


const useForm = (callback) => {
    

    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        // If length of errors is 0 and length of values is not zero (values are not empty) then it will call the callback function else it will alert the user.
        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            alert("There is an Error!");
        }
    }
    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});
    
    
    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'title':
                if(value.length <= 0){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        title:'Event title cannot be empty'
                    })
                }else{
                    // set the error state empty or remove the error for title input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "title");
                    setErrors(newObj);
                    
                }
                break;
        
                case 'location':
                if(value.length <= 0){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        location:'Event location cannot be empty'
                    })
                }else{
                    // set the error state empty or remove the error for location input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "location");
                    setErrors(newObj);
                    
                }
                break;

                case 'price':
                if(value.length <= 0){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        price:'Event price cannot be empty'
                    })
                }else{
                    // set the error state empty or remove the error for price input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "price");
                    setErrors(newObj);
                    
                }
                break;

                case 'datetime':
                if(value == null){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        datetime:'Event date cannot be empty'
                    })
                }else{
                    // set the error state empty or remove the error for datetime input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "datetime");
                    setErrors(newObj);
                    
                }
                break;

                case 'image':
                if(value == null){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        image:'Event image cannot be empty'
                    })
                }else{
                    // set the error state empty or remove the error for image input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "image");
                    setErrors(newObj);
                    
                }
                break;

                case 'description':
                if(value.length <= 0){
                    // we will set the error state

                    setErrors({
                        ...errors,
                        description:'Event description cannot be empty'
                    })
                }else{
                    // set the error state empty or remove the error for description input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "description");
                    setErrors(newObj);
                    
                }
                break;
            
            default:
                break;
        }
    }



  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;
        
        validate(event,name,val);

        //Let's set these values in state
        setValues({
            ...values,
            [name]:val,
        })

    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm