
import { publicRequest } from "../requestMethods";

import { 
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS, 
} from '../constants/productConstants';

export const listProducts =
  ({
    pageNumber = '',
    name = '',
    category = '',
    order = '',
    min = 0,
    max = 0,
    shown = 0,
  }) =>
  async (dispatch) => {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });
    try {
      const { data } = await publicRequest.get(
        `/products?pageNumber=${pageNumber}&name=${name}&category=${category}&min=${min}&max=${max}&order=${order}&shown=${shown}`
      );

      console.log(data);
      dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}; 

