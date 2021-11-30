import {useState, useEffect} from "react";
import api from "./api";

const Hooks = () => {
  const list = async () => {
    try{
      const {data} = await api.get("/list");
      return data.registros;
    } catch(e){
      console.log(e.message);
      alert(e.response.date.error[0]);
    }
  };
  const save = async () => {
    try{
      await api.get('/save/${number}');
    } catch(e){
      console.log(e.message);
      alert(e.response.date.error[0]);
    }
  };
  const reset = async () => {
    try{
      await api.get("/reset");
    } catch(e){
      console.log(e.message);
      alert(e.response.date.error[0]);
    }
  };
  return {list, save, reset};
};
export default Hooks;