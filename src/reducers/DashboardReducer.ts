import { IAction } from "../utils/interfaces";
import { GET_SPENDING_ITEMS, GET_CATEGORIES, GET_USER, POST_SPENDING_ITEM, DELETE_ITEM, UPDATE_CATEGORY_TOTALS, POST_CATEGORY } from "../utils/constants";


export default function (state = _initialiseState(), action: IAction) {
  const {type, payload} = action;

  switch (type) {
    case GET_SPENDING_ITEMS:
      return {
        ...state,
        spending_items: payload
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload
      };
    case GET_USER:
      return {
        ...state,
        user_info: payload
      }; 
    case POST_SPENDING_ITEM:
      return {
        ...state,
        new_spending_item: payload
      }; 
    case POST_CATEGORY:
      return {
        ...state,
        new_category: payload
      }
    case DELETE_ITEM:
      return {
        ...state,
        delete_item: payload
      };  
    case UPDATE_CATEGORY_TOTALS:
      return {
        ...state,
        cat_totals: payload
      }       
    default:
      return state;
  }
}

function _initialiseState(): any {
  return {
    spending_items: {},
    categories: {},
    user_info: {},
    new_spending_item: {},
    new_category: {},
    cat_totals: []
  }
}