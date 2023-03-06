import {useReducer, useRef} from 'react'
// 1.Init State
const initState = {
    job: '',
    jobs: []
}
// 2.Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

//phải tạo các hàm xử lý trả về giá trị được nhập vào ở ô input 
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}
const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}
const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}
// 3.Reducer
const reducer = (state, action) => {
    let newState
    console.log('state ban dau ', state)
    switch(action.type) {
        case SET_JOB: 
             newState = {
                ...state, // lưu lại các state ban đầu
                job: action.payload
            }
            break
        case ADD_JOB: 
            newState = {
                ...state, // lưu lại các state ban đầu
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB: 
            const newJobs = [ ...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {           
                ...state, // lưu lại các state ban đầu
                jobs: newJobs
            }
        break
        default: throw new Error('Invalid action')
    }
    console.log('state moi ', newState )
    return newState
} 
// 4. dispath
function UseReducer() {
    const ref = useRef()
    const [state, dispath] = useReducer(reducer, initState)
    const { job, jobs} = state
    const handleSubmit = () => {
        dispath(addJob(job))
        dispath(setJob(''))
        ref.current.focus()
    }
    return (
        <div style = {{padding: 20}}>
            <input
                ref={ref}
                value={job}
                placeholder='enter todo'
                onChange={ (e) => {
                dispath(setJob(e.target.value))//không thể nhập trực tiếp dispath(SET_JOB(e.target.value)) vì SET_JOB không phải 1 hàm
                }}
            />
            <button onClick={handleSubmit}>add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key = {index}>
                    {job} 
                    <span onClick={() => dispath(deleteJob(index))}>
                        &times;
                    </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UseReducer;
