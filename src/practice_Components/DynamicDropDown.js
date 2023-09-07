import React, { useEffect, useState } from 'react'

function DropDown() {

    const [add, setAdd] = useState('')
    const [dropDown, setDropDown] = useState(true)
    const [displayData, setDisplayData] = useState([])

    const addDatas = () =>{
        if(!add){
        }else{
            const datas = JSON.parse(localStorage.getItem('Datas')) || [];
            const storeData = {data:add};

            datas.push(storeData);
            localStorage.setItem("Datas", JSON.stringify(datas));
            for(let i=0; i<datas.length; i++){
                const Data = datas[i].data
            }
            setDisplayData(datas)
            setDropDown(true)
            setAdd('')
        }
    }

    useEffect(()=>{
        addDatas()
    },[])

  return (
    <div>
        {dropDown ? 
            <div className='input'>
                DROPDOWN
                <select>
                {displayData.length === 0 ?<option value="0">Add Values</option> :<option value="0">Select</option>}
                {displayData.map((x,i)=>(
                    <option key={i}>{x.data}</option>
                ))}
            </select>
            <button className='Add' onClick={()=>setDropDown(false)}>Add</button>
            </div>
            :
            <div className='input'>
                INPUT
                <input type='text' placeholder='Add Options' required value={add} onChange={(e)=>setAdd(e.target.value)}/>
                <button className='Add' onClick={addDatas} value="Reset">Add</button>
                <button className='clear' onClick={()=>setDropDown(true)}>Back</button>
            </div>
        }
    </div>
  )
}

export default DropDown