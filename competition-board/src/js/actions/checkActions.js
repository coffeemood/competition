import axios from "axios"

const config = { 
    crossdomain: true,
    
}

export function fetchChecks() {
  return function(dispatch) {
    dispatch({type: "FETCH_CHECK"});
    axios.get("https://api.nodeping.com/api/1/checks?token=ZZQTRBFZ-UET5-40HY-8M8C-DO7PWOF3A2D4&customerid=201711022024OB8A4", config)
      .then((response) => {
        dispatch({type: "FETCH_CHECK_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_CHECK_REJECTED", payload: err})
      })
  }
}

