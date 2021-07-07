import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Description from './PhotoDescription.js'
import Title from './Title.js'

function Card() {
    const [photo, setPhoto] = useState ("")
    const [describe, setDescribe] = useState("")
    const [copyright, setCopyright] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=8w1kySYmuxkXuOcL0BX9vw1dtQo7kaQg0hFJTPz4&date=2019-7-17')
        .then(response => {
           console.log(response.data) 
           const imgUrl = response.data.url
           const imgDesc = response.data.explanation
           const imgCopyright = response.data.copyright
           const imgTitle = response.data.title
           const imgDate = response.data.date
           setDate(imgDate)
           setTitle(imgTitle)
           setCopyright(imgCopyright)
           setDescribe(imgDesc)
            setPhoto(imgUrl)
        })
    }, [])

    return <div>
            <Title title={title} date ={date}/>
            <img src={photo} alt = 'space'></img>
            <Description photoDescription={describe} copyright={copyright}/>
            </div>
}

export default Card