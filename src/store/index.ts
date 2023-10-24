import { defineStore } from "pinia";
import {ref} from 'vue'
export const useCounterStore=defineStore('counter',{
    state:()=>{
        return {count:0}
    },
    getters:{
        double:(state)=>state.count*2
    },
    actions:{
        increment(){
            return this.count++
        }
    }
})

export const useMsgStore=defineStore('msg',()=>{
    const msg=ref('geyao')
    function changeMsg(){
        msg.value+='world'
    }
    return {msg,changeMsg}
})