import AI from '../Images/AI1.png';
import AI1 from '../Images/AI1.1.png';
import AI2 from '../Images/AI2.png';
import Sqr from '../Images/anim_rotate.png';
import './Ai.css';

function Ai(){
    return(
        <div className='AI'>
                <h1>SuperCharge your browser<br/>with AI built right in</h1>
                <div className='AIs'>
                    <div className='con'>
                        <img  className='AI_img' src={AI}/>
                        <img className='AI_inside' src={AI1}/>
                    </div>
                    <div className='con1'>
                        <img  className='AI_img' src={AI2}/>
                        <img src={Sqr} className='sqr'style={{width:'138px'}}/>
                        <div className='running'></div>
                        <div className='circle'></div>
                    </div>
                </div>
            </div>
    )
}
export default Ai;