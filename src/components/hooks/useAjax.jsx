
import  { useEffect, useState } from 'react';
import axios from "axios";
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


const useAjax= ()=>{


    const [list, setList]=useState([]);
    const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

    const todoResults= async(method,url,item)=>{
        const results= await axios({
method:method,
url:url,
mode:'cors',
headers:{'Content-Type': 'application/json'},
body: JSON.stringify(item),
data: JSON.stringify(item),
        })
        return results.data;
    }
    const getHandler=async()=>{
      
       const response= await todoResults('get',todoAPI)
       setList(response.results);
       console.log('response', response);

       
       return response;   
   
    };

    
    const postHandler=(item)=>{
      
    todoResults('post')
    setList([...list,item]);
    
     }; 



     const toggleComplete = id => {

      const item = list.filter(i => i._id === id)[0] || {};

      if (item._id) {

          item.complete = !item.complete;
          let  url=`${todoAPI}/${item._id}`;
          todoResults('put', url, item)
          .then(savedItem => {
            setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem)); })
          
          .catch(console.error);
      }
  };





    // const putHandler=(item)=>{
    
    //     item.complete = !item.complete;
    //   let  url=`${todoAPI}/${item._id}`;
        // todoResults('put', url, item);

    // };

    const deleteHandler=(item)=>{
    
      let  url=`${todoAPI}/${item._id}`;
        todoResults('delete', url, item);

    };

    return [list,getHandler,postHandler,toggleComplete, deleteHandler];
    // const axiosInstance = axios.create({
    //     method: "put",
    //     mode: "cors",
    //     cache: "no-cache",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(item),
    //     baseURL: todoAPI,
    //     timeout: 2000
      
    //   });

}
export default useAjax;