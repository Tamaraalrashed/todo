import { useEffect, useState } from "react";
import axios from "axios";
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

const useAjax = () => {
  const [list, setList] = useState([]);
  const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

  const todoResults = async (method, url, item) => {
    try{
      const results = await axios({
      method: method,
      url: url,
      mode: "cors",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(item),
      data: item,
    });
  console.log('res', results);
    return results.data;
  }
  catch(err){
console.error(err)
  }
  };
  const getHandler = async () => {
    const response = await todoResults("get", todoAPI);
    setList(response.results);
    // console.log("response", response);

    return response;
  };

  // const postHandler = (item) => {
  //   fetch(todoAPI, {
  //     method: "post",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(item),
  //   })
  //     .then((response) => response.json())
  //     .then((savedItem) => {
  //       setList([...list, savedItem]);
  //     })
  //     .catch(console.error);
  // };

  const postHandler = async (item) => {
  const res=  await todoResults("post",todoAPI,item);
// console.log('res 47 ', res);
 setList([...list, res]);
  };

  const toggleComplete = (id) => {
    const item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete
      let url = `${todoAPI}/${item._id}`
      todoResults("put", url, item)
        .then((savedItem) => {
          setList(
            list.map((listItem) =>
              listItem._id === item._id ? savedItem : listItem
            )
          );
        })

        .catch(console.error);
    }
  };

  const putHandler=async (item)=>{

  let  url=`${todoAPI}/${item._id}`;
  console.log(item, '78');
 try{
   const res=await todoResults('put', url, item);
   console.log('res', res);
 const updatedList=list.map(element=>element._id===item._id?res:element);
 setList(updatedList);}
 catch(err){
   console.error(err)
 }

  };

  const deleteHandler = async (item) => {
    let url = `${todoAPI}/${item._id}`;
   await todoResults("delete", url, item);
   const deletedList=list.filter(element=>{
     return(element._id!==item._id)
   })
    setList(deletedList);
   
  };

  return [list, getHandler, postHandler, toggleComplete, deleteHandler,putHandler];
  // const axiosInstance = axios.create({
  //     method: "put",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(item),
  //     baseURL: todoAPI,
  //     timeout: 2000

  //   });
};
export default useAjax;
