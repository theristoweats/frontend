const {
  CART_LIST_REQUEST,
  CART_LIST_SUCCESS,
  CART_LIST_FAIL, 
  CART_ADD_REQUEST,
  CART_ADD_SUCCESS,
  CART_ADD_FAIL, 
  NEW_SESSION,
  CART_NEW_ITEM,
  LOAD_ITEMS_NUM,
} = require('../constants/cartConstants');


export const cartListReducer = (
  state = { loading: true, cartitems: [], quantity:0, total:0 },
  action
) => {
  switch (action.type) {
    case CART_LIST_REQUEST:
      return { loading: true };
    case CART_LIST_SUCCESS:
      return {
        loading: false,
        cartitems: action.payload.items,
        quantity: action.payload.quantity,
        total: action.payload.total,
        // totalItems: action.payload.products.length,

      };
    case CART_LIST_FAIL:
      return { loading: false, error: action.payload };
    case NEW_SESSION:
      return {...state, loading:true, cartitems:[]} 
      // return {total:new_total}
    default:
      return state;
  }
};


export const cartAddToCartReducer = (
  state = { loading: false, items: [] },
  action
) => {
  switch (action.type) {
    case CART_ADD_REQUEST:
      return { loading: true };
    case CART_ADD_SUCCESS:
      return {
        loading: false,
        cartitems: action.payload.products,
        quantity: action.payload.quantity,
        total: action.payload.total
      };
    case CART_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
 


export const itemsInCartReducer = (
  state = { quantity:0 },
  action
) => {
  switch (action.type) { 
    case LOAD_ITEMS_NUM:
      return 0;
    case CART_NEW_ITEM:
      return 0;
      
      // return {total:new_total}
    default:
      return state;
  }
};