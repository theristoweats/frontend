import { publicRequest } from "../requestMethods";
import {productsList, addProducts, addProductsStart, cartDeleteItem, cartDeleteItemStart, cartItemIncDec, updateItemQuantityStart}  from "../redux/cartRedux";

// export const listCartItems =
//   ({user_UUID}) =>
//   async (dispatch) => {
//     dispatch({
//       type: CART_LIST_REQUEST,
//     });
//     console.log(user_UUID);
//     try {
//       const { data } = await publicRequest.get(
//         `/cart/${user_UUID}`
//       );
//       dispatch({ type: CART_LIST_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: CART_LIST_FAIL, payload: error.message });
//     }
// }; 

  
export const addCartItem = ({
   product,
   quantity,
   user_UUID
}) => async(dispatch) => {
  // console.log(product);
  // console.log(quantity);
  // console.log(user_UUID);
  dispatch(addProductsStart({}));
  try {
    const { data } = await publicRequest.post(
      `/cart`, {product, quantity, user_UUID}
    );
    
    const productId = 0;
    const productTitle = 0;
    const productQuantity = 0;
    const productPrice = 0;
    const productImg = '';

    const productData = {
        "_id":productId,
        "img":productImg,
        "title":productTitle,
        "quantity":productQuantity,
        "price":productPrice,
    };
    console.log(data.items);
    // dispatch({ type: CART_ADD_SUCCESS, payload: data });
    dispatch(addProducts({items:data.items}));
  } catch (error) {
    // dispatch({ type: CART_ADD_FAIL, payload: error.message });
  }

};

export const newSessionCreate = () => async(dispatch) =>{
  console.log("hi");
  // dispatch({ type: NEW_SESSION});

};

export const listCartItems =
  ({user_UUID}) =>
  async (dispatch) => {
    // dispatch({
    //   type: CART_LIST_REQUEST,
    // });
    console.log(user_UUID);
    try {
      const { data } = await publicRequest.get(
        `/cart/${user_UUID}`
      ); 
      dispatch(productsList({items:data.items, quantity:data.quantity, total:data.total }));
      // console.log("fetch");
      // dispatch({ type: CART_LIST_SUCCESS, payload: data });
    } catch (error) {
      // dispatch({ type: CART_LIST_FAIL, payload: error.message });
    }
}; 


export const deleteCartItem =
  ({user_UUID, itemId}) =>
  async (dispatch) => { 
    dispatch(cartDeleteItemStart());
    try {
      const { data } = await publicRequest.delete(
        `/cart/${user_UUID}/${itemId}`
      ); 
      dispatch(cartDeleteItem(itemId));
      // console.log(itemId);
      // console.log("fetch");
      // dispatch({ type: CART_LIST_SUCCESS, payload: data });
    } catch (error) {
      // dispatch({ type: CART_LIST_FAIL, payload: error.message });
    }
}; 



export const incDecCartItem =
  ({user_UUID, itemId, type}) =>
  async (dispatch) => { 
    dispatch(updateItemQuantityStart());
    try {
      const { data } = await publicRequest.put(
        `/cart/${user_UUID}/${itemId}/${type}`
      ); 
      dispatch(cartItemIncDec({itemId, type}));
      // console.log(itemId);
      // console.log("fetch");
      // dispatch({ type: CART_LIST_SUCCESS, payload: data });
    } catch (error) {
      // dispatch({ type: CART_LIST_FAIL, payload: error.message });
    }
}; 