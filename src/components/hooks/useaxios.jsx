import { useState } from "react";
import axios from "axios";
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'


const useAjax= (cb)=>{


    const [list, setList]=useState([]);
    const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
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