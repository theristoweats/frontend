import {createSlice} from "@reduxjs/toolkit";
// mapp -- - -- - -https://stackoverflow.com/questions/35628774/how-to-update-single-value-inside-specific-array-item-in-redux
// mapp2 -- - - - - - https://stackoverflow.com/questions/44789914/redux-find-object-in-state-array-by-its-key-and-update-its-another-key

const cartSlice = createSlice({ 
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total:0,
        error:false,
        loading:true,
        updateQuntityStatus:false
    },
    reducers:{
        addProductsStart:(state, action)=>{
            state.loading = true;
        },
        addProducts:(state, action)=>{
            state.quantity += 1; 
            // state.products.push(action.payload.items); 
            state.products[0].push(action.payload.items[0]);
            state.loading = false;
            // console.log(action.payload.items[0]);
            state.total += action.payload.items[0].price;
        },
        productsList:(state,action)=>{
            state.loading = false;
            console.log(action.payload.items); 
            state.products[0] = action.payload.items;
            console.log(action.payload.items);
            state.quantity = action.payload.quantity;
            state.total = action.payload.total;
        },
        cartDeleteItemStart:(state,action)=>{ 
            // state.loading = true; 
        },
        cartDeleteItem:(state,action)=>{ 
            state.loading = false;
            state.products[0].map(item => { 
                if (item._id === action.payload){
                    return state.total -= item.price;
                } 
            });
            state.products[0].splice(
                state.products[0].findIndex((item) => item._id === action.payload),
                1
            ); 
            
            state.quantity -= 1; 
        },
        cartItemIncDec:(state,action)=>{
            state.loading = false;
            state.updateQuntityStatus = false;
            if(action.payload.type === "dec"){
                state.products[0].map(item => { 
                    if (item._id === action.payload.itemId){
                        state.total -= item.price/item.quantity; 
                        item.price -= item.price/item.quantity;
                        item.quantity -= 1 
                    } 
                });
            }else if(action.payload.type === "inc"){
                state.products[0].map(item => { 
                    if (item._id === action.payload.itemId){
                        state.total += item.price/item.quantity; 
                        item.price += item.price/item.quantity;
                        item.quantity += 1 
                    } 
                });
            }
        },
        updateItemQuantityStart:(state,action) =>{
            state.updateQuntityStatus = true;
        },
        clearCart:(state,action)=>{
            state.products[0] = [];
            state.quantity = 0;
            state.total = 0;
        }
        
    }
});

export const {
    addProducts, 
    productsList, 
    addProductsStart, 
    cartDeleteItem, 
    cartDeleteItemStart, 
    cartItemIncDec,
    updateItemQuantityStart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;


