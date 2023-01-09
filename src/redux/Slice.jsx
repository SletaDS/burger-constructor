import { createSlice } from "@reduxjs/toolkit";
const Slice=createSlice({
name:'todos',
initialState:{
    todos:{
            id: 1,
            title: 'make1',
            square: true,
            items:[{id: 1, title: 'main dishes',img:'#',price:2}, {id: 2, title: 'main dishes',img:'#',price:100}, {id: 3, title: 'main dishes',img:'#',price:100}, {
                id: 4,
                title: 'main dishes',img:'#',price:100
            }, {id: 5, title: 'main dishes',img:'#',price:200}, {id: 6, title: 'main dishes',img:'#',price:100}, {id: 7, title: 'main dishes',img:'#',price:100}, {
                id: 8,
                title: 'main dishes'
            }, {id: 9, title: 'main dishes',img:'#',price:100}, {id: 10, title: 'main dishes',img:'#',price:100}, {id: 11, title: 'main dishes',img:'#',price:100}, {
                id: 12,
                title:'main dishes',img:'#',price:100
            }]
        },
    spice:{
          
            id: 1,
            title: 'make1',
            square: true,
            items:[{id: 1, title: 'spice',img:'#',price:100}, {id: 2, title: 'spice',img:'#',price:100}, {id: 3, title: 'spice',img:'#',price:100}, {
                id: 4,
                title: 'spice',img:'#',price:100
            }, {id: 5, title: 'spice',img:'#',price:100}, {id: 6, title: 'spice',img:'#',price:100}, {id: 7, title: 'spice',img:'#',price:100}, {
                id: 8,
                title: 'spice'
            }, {id: 9, title: 'spice',img:'#',price:100}, {id: 10, title: 'spice',img:'#',price:100}, {id: 11, title: 'spice',img:'#',price:100}, {
                id: 12,
                title:'spice',img:'#',price:100
            }]
    },
    
  trash:[]
   
  
  
},
reducers:{
    addtrash(state,action){
        state.trash.push(action.payload)
    }

}})
export const {addtrash}=Slice.actions
export default Slice.reducer 