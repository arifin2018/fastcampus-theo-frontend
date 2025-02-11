import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { RxMinus,RxPlus } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

const Counter = () =>{
    const [countInput,setCountInput] = useState(0)

    const numberSelector = useSelector(state => state.counter)

    const dispatch = useDispatch()

    const IncrementCountInput = () => {
        dispatch({
            type:"INCREMENT_NUMBER_VALUE"
        })
    }

    const DecrementCountInput = () => {
        dispatch({
            type:"DECREMENT_NUMBER_VALUE"
        })
    }

    return <>
    <div>
        <p className="flex items-center ">
            Count:{countInput} - {numberSelector.number}
        </p>
        <div className="flex item-center gap-4">
            <Button onClick={DecrementCountInput} className="icon" >
                <RxMinus className="h-6 w-6"/>
            </Button>
            <Button onClick={IncrementCountInput} className="icon">
                <RxPlus className="h-6 w-6"/>
            </Button>

            <div className="flex gap-2 mt-8">
                <Input type="number" onChange={(e)=>setCountInput(e.target.value)}></Input>
                <Button>Submit</Button>
            </div>
        </div>

    </div>
    </>
}

export default Counter