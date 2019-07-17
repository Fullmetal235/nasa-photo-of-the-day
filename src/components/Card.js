import React, {useState, useEffect} from 'react'
import axios from 'axios'

 function Card() {
    const [photo, setPhoto] = useState

     useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
        .then(response => {
           console.log(response.data) 
        })
    }, )

     return( <img></img>
     )}

 export default Card 