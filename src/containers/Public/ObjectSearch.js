
import React, {  useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions'

const ObjectDetection = (data) => {
    const dispatch = useDispatch()

    const [payload, setPayload] = useState({
        object:''
    })

    const handleSearch = () => {
        dispatch(actions.getObjectDetection(payload,data.data))         
    }
    
    

  return (
    <div
        
        className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
    >
        <div className='flex items-center justify-between' >
            <div
                className='text-sm font-semibold px-6'
            >
                <input value={payload.query} onChange={e => setPayload({...payload, object : e.target.value})} className=' outline-none text-gray-400 w-full pr-[12px] pl-[13px]' placeholder={'object detection'} />
            </div>
            
            <div
                className='text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3'
            >
                
                <div className='p-2 bg-rose-500 rounded-full text-white' onClick={handleSearch} >
                    <BiSearch size={18}  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ObjectDetection