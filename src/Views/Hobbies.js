import '../Assets/Css/Hobbies.css';

function Hobbies() {

    return (
        <div className="hobbies-container">
            <button className="art"> <a href="/art" className="hobbies-pages">
                Art</a>
            </button>
            <button className="photos">
                Photos
            </button>
            <button className="poems">
                Poems
            </button>
            <button className="riddles">
                Riddles
            </button>
            

        </div>
    )
}

export default Hobbies;