import'../Assets/Css/Home.css';
import ieva from '../Assets/Images/ieva.jpg';

function Home() {
    return (
        <div className="container-home">

                <h1 className="myName text-center">
                IEVA VAIVODE
                </h1>
                <img className="home-picture" src={ieva}/>

                <p className="text-center greetings">
                    <span className="lv">Sveiki </span>/ Hello / Guten Tag / Здравствуйте !
                </p>
                <p className="text-center">
                    I'm a web developer with an art &amp; translations background. 
                    Now I translate ideas into the code to create artworks of code.
                </p>

                 <div className="text-center">
                 <button className="animated-phrase animation text-center btn-home">
                    GET INSPIRED
                </button>
                 </div>

               
           
            

        </div>
    )
}

export default Home;