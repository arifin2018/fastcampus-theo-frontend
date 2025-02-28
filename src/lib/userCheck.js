import { useEffect } from "react"
import { useDispatch } from "react-redux"

export function UserCheck() {
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
        if (checkUserLocalStorageVariable != null) {
            checkUserLocalStorage(JSON.parse(checkUserLocalStorageVariable))
        }
    },[])
}