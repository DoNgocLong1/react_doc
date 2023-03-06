import {useState,useEffect} from 'react'
function Content() {

    //useEffect with non-initvalue 
 /*    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    })
    return (
        <div>
            {posts.map((post) => (
                <li key ={post.id}>{post.title}</li>
            ))}          
        </div>
    ) */


    //useEffect with [] is initvalue
   /*  const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [])
    return (
        <div>
            {posts.map((post) => (
                <li key ={post.id}>{post.title}</li>
            ))}          
        </div>
    ) */


    /* //useEffect with dependencies
    const tabs = ['posts', 'comments', 'albums']
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [scroll, setscroll] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
        console.log(type)
    }, [type])
    // listen DOM events
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200) {
                setscroll(true)
            } else {
                setscroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        // clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll)          
        }
    },[])
    return (
        <div>
            {tabs.map((tab) => (
                <button 
                key={tab}
                style = {type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                }:{}}                  
                    onClick={() => setType(tab)}
                >{tab}</button>
            ))}
            {posts.map((post) => (
                <li key ={post.id}>{post.title || post.body}</li>
            ))} 
            {scroll && <button
                style = {{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
            }}
            >
                 scroll to top 
                 </button>}         
        </div>
    )  */


    // ứng dụng hàm clean up tạo chức năng chọn avatar
 /*    const [avatar, setAvatar] = useState()
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handleChangeAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
        //reset lại giá trị của a ảnh
        e.target.value = null
    }
    return (
        <div>
            <input 
                type = 'file'
                onChange = {handleChangeAvatar}
            />
            {avatar && (
                <img src = {avatar.preview} alt = '' width = '80%' />
            )}
        </div>
    ) */


    // fake chat app
    const lessons = [
        {
            id: 1,
            name: 'ReactJS'
        },
        {
            id: 2,
            name: 'SPA/MPA là gì'
        },
        {
            id: 3,
            name: 'Arrow Function'
        }
    ]
    const [lessonId, setLessonId] = useState(1)
    useEffect( () => {
        const handleComment = ({detail}) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    },[lessonId])
    return (
        <div>
            <ul>
            {lessons.map((lesson) => (
                <li 
                    key ={lesson.id} 
                    style = {{color :lessonId === lesson.id ? 'red' : '#333'}}
                    onClick = {() => setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
            </ul>          
        </div>        
    )
}

export default Content