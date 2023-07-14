import Info from '../Components/Information'
import Weather from '../Components/Weather'
import Notes from '../Components/Notes'
import News from '../Components/News'
import Timer from '../Components/Timer'
import { useNavigate } from 'react-router-dom'
const Browse = ()=>{
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/Movies')
    }
    return (
        <div style={{height:"100vh",width:"100vw",background:"black",paddingLeft:"2vw",paddingTop:"2vh",boxSizing:"border-box"}}>
            <div style={{display:"flex",gap:"10px"}}>
                <div style={{display:'flex',flexDirection:"column",width:"80vw",height:"95vh",}}>
                    <div style={{display:'flex',}}>
                        <div style={{display:'flex',flexDirection:"column",left:'10px',}}>
                            <Info/>
                            <Weather/>
                        </div>
                        <div>
                            <Notes/>
                        </div>
                    </div>
                    <div>
                        <Timer/>
                    </div>
                </div>
                <div>
                    <News/>
                </div>
            </div>
            <button style={{position:"absolute",bottom:"2vh",right:"3vw",background:"green",border:"none",color:"white",padding:"6px",borderRadius:"12px",height:"40px",width:"150px",fontSize:"20px",}} onClick={handleClick}>Browse</button> 
        </div>
    )
}

export default Browse