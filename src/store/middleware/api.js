import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch })  => (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess } =
            action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        
            const response = await axios.request({
                baseURL: "https://jsonplaceholder.typicode.com",url,method,data
            
            });
           
            dispatch(actions.apiCallSuccess(response.data));
            
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data });
       
    };

export default api;
