import '../Assets/Css/Photos.css';
import lightGallery from 'lightgallery';

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

function Photos() {

    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        licenseKey: 'your_license_key'
        
    });

    return (
        <div className="photos-container">
            <div id="lightgallery">
                <a href="img/img1.jpg" data-lg-size="1600-2400">
                    <img alt=".." src="img/thumb1.jpg" />
                </a>
                <a href="img/img2.jpg" data-lg-size="1024-800">
                    <img alt=".." src="img/thumb2.jpg" />
                </a>
               
            </div>
        </div>
    )
}


export default Photos;