import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 


const fetchUser = createAsyncThunk("cart/fetchUser",async()=>{
    const response = await axios.get(('https://jsonplaceholder.typicode.com/todos/1'))
return response;
})



const INITIAL_STATE={
    cartList:[],
    cartCount:0,
    userDetail:[],
}

const cartSlice =createSlice({
    name:'cart',
    initialState:INITIAL_STATE,
    reducers:{
        addToCart:(state,action)=>{
           const itemExist= state.cartList.find(item =>item.id === action.payload.id);
            if(itemExist){
                state.cartList.forEach(item =>{
                    if(item?.id === action.payload.id){
                        item.count=1
                    }      
                  });
            }else{
            state.cartList.push({
                ...action.payload,
                count:1,
            });
        }
        },
        increment:(state,action)=>{
          const productID=action.payload  
          state.cartList.forEach(item =>{
            if(item?.id === productID){
                item.count++
            }      
          });
        },
        decrement:(state,action)=>{
            const productID=action.payload  
            state.cartList.forEach(item =>{
              if(item?.id === productID){
                  item.count--
              }         
            })
        }
    },
extraReducers:{
    [fetchUser.pending]:(state,action)=>{},
    [fetchUser.rejected]:(state,action)=>{},
    [fetchUser.fulfilled]:(state,action)=>{},
}
})

export const {increment,decrement,addToCart} =cartSlice.actions;

export default cartSlice.reducer
