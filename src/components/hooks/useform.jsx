
import { useState } from "react";

const useForm= (cb)=>{
    const [item,setItem]=useState({});


    const handleInputChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value  });
        console.log('7 items', item);
      };

 
     const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        cb(item);
        const itemObj= {};
        // console.log('15 items', itemObj);
        setItem(itemObj);
      };



return [handleInputChange,handleSubmit,item]

}
export default useForm;