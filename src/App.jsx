import { useEffect } from "react"
import { useDispatch } from "react-redux";


function App() {
    const dispatch = useDispatch()

    const checkUserLocalStorage = (data) =>{
        dispatch({
            type:"SET_USER_LOGIN",
            payload:{
                Username:data[0].Username,
                Id:data[0].id,
            }
        })
    }


    useEffect(()=>{
        let checkUserLocalStorageVariable = localStorage.getItem("current-user")
        console.log(checkUserLocalStorageVariable);
        if (checkUserLocalStorageVariable != null) {
            checkUserLocalStorage(checkUserLocalStorageVariable)
        }
    },[])
}

export default App
