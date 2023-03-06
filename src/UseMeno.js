import {useState, useMemo, useRef} from 'react'

function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [storage, setStorage] = useState([])
    const nameRef = useRef()
    console.log('re-render')
    const handleAddItem = () => {
        setStorage([...storage, {
            name,
            price: +price // vì dữ liệu nhập vào là kiểu string nên cần phải convert sang kiểu number(có thể dùng hàm Number(price))
        }])
        nameRef.current.focus()
        setName('')
        setPrice('')
    }
    // vì mỗi lần input được nhập vào sẽ dẫn đến hàm tính tổng lại được gọi lại(không cần thiết) nên dùng useMemo để ngăn chặn việc thực thi lại hàm tính tổng
    const total = useMemo(() => {
        const result = storage.reduce((result, price) => {
            return result = price.price + result
        }, 0)
        return result
    },[storage])
    return( 
    <div>               
        <input 
            ref = {nameRef}
            value={name} 
            placeholder='Input name' 
            onChange={(e) => setName(e.target.value)}
        />
        <input 
            value={price} 
            placeholder='Input price' 
            onChange={(e) => setPrice(e.target.value)}
        />
        <p>total : {total} </p>
        <ul>
            {storage.map((item,index) => (
                <li key = {index}> {item.name} - {item.price}</li>
            ))}
        </ul>
        <button onClick={handleAddItem}>add</button>
    </div>
    )
}
export default UseMemo