
import './ContactPage.css';


const ContactPage = ({ user, setUser }) => {


  return (
    <>
      <div className='contact-main-div'>
        <div >
            <h4>Meet the Team</h4>
            <div id='manager-div'>
            <img src={require('../../utils/images/Yev.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/yev-kapustian/'>Yevhenii Kapustian</a> <br /> Project Manager </label>
            </div>
        </div>
        <div >
            <h4>UX Research and Design</h4>
            <div id='design-div'>
            <div>
            <img src={require('../../utils/images/mahita.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/mahita-parasa/'>Mahita Parasa</a> <br /> UX/UI Designer Lead</label></div>
            <div> <img src={require('../../utils/images/david.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/daveuxui/'>David Bieschke </a> <br /> UX/UI Designer</label></div>
            <div> <img src={require('../../utils/images/jinah.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/jinah-choi//'>Jinah Choi</a> <br /> UX/UI Designer </label></div>
            <div><img src={require('../../utils/images/dona.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/donadas/'>Dona Das</a> <br /> UX/UI Designer</label></div>
            <div><img src={require('../../utils/images/kay.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/kay-hickman22/'>Kay Hickman</a> <br /> UX/UI Designer </label></div>
            <div><img src={require('../../utils/images/may.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/maythin-khaing/'>May Khaing </a> <br /> UX/UI Designer</label></div>
            <div><img src={require('../../utils/images/megan.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/meganflett94/'>Megan Flett </a> <br /> UX/UI Designer</label></div>
            </div>        
        </div>
        <div>
            <h4>Software Enginner</h4>
            <div id='enginneer-div'>
            <div><img src={require('../../utils/images/nisha.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/nisha-yadav09/'>Nisha </a> <br /> Software Engineer Lead</label></div>
            <div><img src={require('../../utils/images/roman.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/roman-protoliuk-a5340a170/'>Roman Protulik </a> <br />Software Engineer</label></div>
            <div><img src={require('../../utils/images/michael.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/mcortezdev/'>Michael Cortez </a> <br /> Software Engineer</label></div>
            <div> <img src={require('../../utils/images/yi.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/msyili/'>Yi Li </a> <br /> Software Engineer</label></div>
            <div><img src={require('../../utils/images/trevor.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/trevor-faivre/'>Trevor Faivre </a> <br /> Software Engineer Lead</label></div>
            <div> <img src={require('../../utils/images/james.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/james-d-sullivan/'>James Sullivan</a> <br /> Software Engineer</label></div>
            </div>
        </div>
        <div>
            <h4>Data Science</h4>
            <div id='data-div'>
            <div><img src={require('../../utils/images/joshua.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/linjoshua/'>Joshua Lin </a> <br /> Data Scientist Lead</label></div>
            <div><img src={require('../../utils/images/sarah.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/sarah-sturgeon/'>Sarah Sturgeon </a> <br /> Data Scientist</label></div>
            <div><img src={require('../../utils/images/pic3.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/irukanwanochie/'> Iruka Nwanochie </a> <br />Data Analyst</label></div>
            <div><img src={require('../../utils/images/pic4.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/paulzeecheng/'>Paul Zee-Cheng </a> <br />Data Analyst</label></div>
            <div><img src={require('../../utils/images/morgan.png')} style={{height: '100px'}}></img>
            <label id='contact-label'><a href ='https://www.linkedin.com/in/morganhofmann/'>Morgan Hofmann </a> <br />Data Analyst</label></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
