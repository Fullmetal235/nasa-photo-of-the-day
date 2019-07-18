import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Description from './photoDescription.js'
import Title from './title.js'

function Card() {
    const [photo, setPhoto] = useState ("")
    const [describe, setDescribe] = useState("")
    const [copyright, setCopyright] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
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
            <img src={photo} alt = 'space photo'></img>
            <Description photoDescription={describe} copyright={copyright}/>
            </div>
}

export default Card