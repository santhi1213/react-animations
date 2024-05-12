import Im from '../Logos/images.jpg';
import chrom from '../Images/chrome.png';
import './update.css'
    
function Update(){
    return(
        <div className='updates'>
                <h1 className='title'>Discover the latest<br/>Updates from Chrome</h1>
                <div className= 'containers'>
                    <div className='container'>
                        <p className='upda'>UPDATES</p>
                        <h1 style={{marginLeft:'20px'}}>Automatic Updates</h1>
                        <p>There's a new Chrome release every four weeks, making it easy to have the newest features and a faster, safer web browser.<br/><br/><a href= '#' className='a'>Learn about Automatic updates</a></p>
                        <img className='chr' src={Im}/>
                    </div>
                    <div className='container1'>
                        <p className='latest'>LATEST</p>
                        <h1 style={{marginLeft:'20px'}}>New From Chrome</h1>
                        <p>Chrome regularly updates with tools and features that make it faster and easier to use.<br/><br/><a href= '#' className='a'>Learn what's new on chrome.</a></p>
                        <img className='chrom' src={chrom}/>
                    </div>
                </div>
            </div>
    )
}
export default Update;