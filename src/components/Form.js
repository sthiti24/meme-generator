import React from "react"
import {saveAs} from 'file-saver'
import axios from 'axios'
export default function Form(props)
{
    let [meme,setMeme] = React.useState({
        leftText:"",
        rightText:"",
        memeImg:props.img})

    let [allMemes,setAllMemes] = React.useState([])

    React.useEffect(()=>
    {
        let fetchData = async()=>{
            try{
                  let apiData = (await axios.get('https://api.imgflip.com/get_memes')).data
                  let temp = apiData.data.memes
                  setAllMemes(temp)
                  console.log(apiData)
                  console.log(apiData.data)
                  console.log(apiData.data.memes)
                  
            }
            catch(err){
                console.error(err)
            }
        }
        fetchData()
        
    },[])

    
    console.log("state",allMemes)
    function changeMeme()
    {
        let r = Math.floor(Math.random()*(allMemes.length))
        let source = allMemes[r].url
        setMeme((prevMeme)=>({
            ...prevMeme,
            memeImg:source
        }))
    }

    function handleChange(event){
        setMeme((prevMeme)=>
        ({
            ...prevMeme,
            [event.target.name] : event.target.value
        }))
    }

   
    return(
        <main className="page">
          <form className="form">
            <input type="text" name="leftText" className="leftText" onChange={handleChange} value={meme.leftText} placeholder="Top text"/>
            <input type="text" name="rightText" className="rightText"onChange={handleChange} value={meme.rightText} placeholder="Bottom text"/>
            </form>
            <button onClick={changeMeme}>Get a new meme image</button>
            <div className="meme">
              <img src = {meme.memeImg} alt="" className="memeImg" />
              <h4 className="top-text">{meme.leftText}</h4>
              <h4 className="bottom-text">{meme.rightText}</h4>
            </div>
            <button onClick={()=>{saveAs(meme.memeImg,"new meme")}}>Download Meme</button>
        </main>
    )
}