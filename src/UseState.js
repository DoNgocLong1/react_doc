
import { useState } from "react";



function UseState() {
  //use useState to increase number
/*   const [counter, setCounter] = useState(1)
  console.log(counter)
  const handleIncrease = () => {
    setCounter(counter + 1) // useState 
    //useState with callback
    setCounter(prevNum => prevNum + 1)
    setCounter(prevNum => prevNum + 1)
    setCounter(prevNum => prevNum + 1) 
  }
  return (
    <div className="App" style = {{padding:32}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  ); */

  //useState to update value render
/*   const [info, setInfo] = useState({
    name: 'Do Ngoc Long',
    age: 18,
  })
  const handleUpdate = () => {
    setInfo({
        ...info,
        address:'Bac Ninh'
      })
    //set state with arrow function (using went want to handle logic before render)
     //setInfo(prev =>({
     //  ...prev,
     //   address:'Bac Ninh'
     // })) 
  }
  return (
    <div className="App" style = {{padding: 20}}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}> update</button>
    </div>
  ) */
/*   const gifts = [
    'CPU i9',
    'RAM 32GB RGB',
    'RGB keyboard'
  ]
  const [gift,setGift] = useState()
  let getGift = () => {
    const index = Math.floor(Math.random()*gifts.length)
    setGift(gifts[index])
    console.log(index)
  }
  return (
    <div className="Gift" style = {{padding: 20}}>
      <h1>{gift||'chua co phan thuong'}</h1>
      <button onClick={getGift}>Get gift</button>
    </div>
  ) */ 


  //two-way binding with input
/*   const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const handleRegistry = () =>{
    console.log({name,email})
  }
  return (
    <div style={{padding: 32}}>
      <input 
        value = {name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        value = {email}
        onChange = {e => setEmail(e.target.value)}
      />
      <button onClick={handleRegistry}>Registry</button>
    </div>
  ) */


  // two way binding with radio
/*   const courses = [
    {
      id: 1,
      name: 'HTML&CSS'
    },
    {
      id: 2,
      name: 'JS'
    },
    {
      id: 3,
      name: 'Reactjs'
    }
  ]
  const [checked, setChecked] = useState()
  const handleSubmit = () => {
    console.log({id :checked})
  }
  return (
    <div className="Courses" style = {{padding: 32}}>
      {courses.map(course => (
        <div key={course.id}>
          <input type = 'radio' 
          checked= {checked === course.id}
          onChange={() =>setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>submit</button>
    </div>
     ) */


     //two-way binding with check box
    /*  const courses = [
      {
        id: 1,
        name: 'HTML&CSS'
      },
      {
        id: 2,
        name: 'JS'
      },
      {
        id: 3,
        name: 'Reactjs'
      }
    ]
    const [checked, setChecked] = useState([])
    const handleSubmit = () => {
      console.log({id :checked})
    }
    const handleCheck = (id) =>{
      setChecked(prev => {
        const isChecked = checked.includes(id)
        if (isChecked) {
          return checked.filter(item => item !== id)
        }else {
          return [...prev, id]
        }
      })
     
    }
    return (
      <div className="Courses" style = {{padding: 32}}>
        {courses.map(course => (
          <div key={course.id}>
            <input type = 'checkbox' 
            checked= {checked.includes(course.id)}
            onChange={() =>handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>submit</button>
      </div>
      ) */

      // todolist
      const storageJobs = JSON.parse(localStorage.getItem('jobs'))
      const [job, setJob] = useState('')
      const [jobs, setJobs] = useState(storageJobs ?? []) // trong tr?????ng h???p storageJobs l?? m???ng r???ng 
      //th?? s??? tr??? v??? gi?? tr??? l?? null v?? th??? n??n ph???i d??ng to??n t??? ??(n???u l?? null ho???c undefined th??) ????? g??n tr??? l?? m???ng r???ng 
      //(ph???i x??? l?? t??c v??? n??y v?? h??m map kh??ng th??? d??ng v???i null)
      console.log(jobs)
      const handleSubmit = () => {
        setJobs(prev => {
          const newJobs = [...prev, job]
          const jsonJobs = JSON.stringify(newJobs)
          localStorage.setItem('jobs', jsonJobs)
          return newJobs
        })
        setJob('')
      }
      return (
        <div>
           <input 
          value = {job}
          onChange = {e => setJob(e.target.value)}
          />
          <button onClick={handleSubmit}>add</button>
          <ul>
            {jobs.map((job, index) => ( //h??m map kh??ng th??? ch???y khi jobs nh???n gi?? tr??? l?? null
              <li key = {index}>{job}</li>
            ))}
          </ul>
        </div>       
      )
}

export default UseState;