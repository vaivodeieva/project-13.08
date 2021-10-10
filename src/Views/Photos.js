import '../Assets/Css/Photos.css';
import lightGallery from 'lightgallery';

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom';
import photo1 from '../Assets/Images/photos-bg.jpg';

function Photos() {

    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        licenseKey: 'your_license_key'
        
    });

    return (
        <div className="photos-container">
            <div id="lightgallery">
                <a href={photo1} data-lg-size="1600200-2400">
                    <img alt=".." src={photo1} />
                </a>
                <a href={photo1} data-lg-size="1024-800">
                    <img alt=".." src={photo1} />
                </a>
               
            </div>
        </div>
    )
}


export default Photos;