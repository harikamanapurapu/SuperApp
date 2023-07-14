import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Components/Category.css'
import action from '../Components/assets/action.png'
import drama from '../Components/assets/drama.png'
import romance from '../Components/assets/romance.png'
import thriller from '../Components/assets/Thriller.png'
import western from '../Components/assets/western.png'
import horror from '../Components/assets/horror.png'
import fantasy from '../Components/assets/fantasy.png'
import music from '../Components/assets/music.png'
import fiction from '../Components/assets/fiction.png'
import errorImg from '../Components/assets/error.png'

function Category(){
    
    const [selectedCategory,setSelectedCategory]=useState([])
    const [error,setError]=useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const navigate =useNavigate()

    useEffect(() => {
        const storedGenres = JSON.parse(localStorage.getItem('selectedGenres'));
        if (storedGenres) {
          setSelectedCategory(storedGenres);
        }
      }, []);

    useEffect(() => {
        // Update local storage when selectedGenres state changes
        localStorage.setItem('selectedGenres', JSON.stringify(selectedCategory));
      }, [selectedCategory]);

    function clickHandler(){
        if(selectedCategory.length<3){
            setError(true)
        }
        else{
            setError(false)
            navigate('/Browse')
        }
    }

    const handleCategory=(Category)=>{
        setSelectedCategory((prevCategory)=>([...prevCategory,Category]))
        
    }
    const handleRemove=(index)=>{
        setSelectedCategory((prevCategory) => {
            const updatedCategory = [...prevCategory];
            updatedCategory.splice(index, 1);
            return updatedCategory;
          });
        setIsVisible(false)
    }

    return(
        <div className="main">
            <div className="container">
                <div className="left">
                    <h1 className="header">Super app</h1>
                    <p className="select-category">Choose your Entertainment Category</p>
                    <ul className="categoryList">
                        {selectedCategory.map((Categ,index)=>( 
                            <li className="selected-categories" key={index}>
                                isVisible && (
                                <button id="actionBtn" className="action-btn"><span className="Content">{Categ} <span className="cross" onClick={()=>handleRemove(index)}> &times;</span></span></button>)
                            </li>))
                        }
                    </ul>
                    {error && <div className="msg"><img src={errorImg} alt="img" className="exclamatoryMark"></img><span className="errorMsg">Minimum 3 Categories required</span></div>}
                </div>
                < div className="right">
                    <button className="Button action" onClick={()=>{handleCategory("Action")}} ><p className="para">Action</p><img src={action} alt="action"className="Action"/></button>
                    <button className="Button drama" onClick={()=>{handleCategory("Drama")}}><p className="para">Drama</p><img src={drama} alt="Drama" className="Action"></img></button>
                    <button className="Button romance" onClick={()=>{handleCategory("Romance")}} ><p className="para">Romance</p><img src={romance} alt="Romance" className="Action"></img></button>
                    <button className="Button thriller" onClick={()=>{handleCategory("Thriller")}}><p className="para">Thriller</p><img src={thriller} alt="Thriller" className="Action"></img></button>
                    <button className="Button western" onClick={()=>{handleCategory("Western")}} ><p className="para">Western</p><img src={western}alt="Western" className="Action"></img></button>
                    <button className="Button horror" onClick={()=>{handleCategory("Horror")}} ><p className="para">Horror</p><img src={horror} alt="Horror" className="Action"></img></button>
                    <button className="Button fantasy" onClick={()=>{handleCategory("Fantasy")}} ><p className="para">Fantasy</p><img src={fantasy} alt="Fantasy" className="Action"></img></button>
                    <button className="Button music" onClick={()=>{handleCategory("Music")}} ><p className="para">Music</p><img src={music} alt="Music" className="Action"></img></button>
                    <button className="Button fiction" onClick={()=>{handleCategory("Fiction")}}><p className="para">Fiction</p><img src={fiction} alt="Fiction" className="Action"></img></button>
                </div>
            </div>
            <div className="button-container">
                <button className="next"onClick={clickHandler} >Next Page</button>
            </div>
        </div>
        
    )
}

export default Category