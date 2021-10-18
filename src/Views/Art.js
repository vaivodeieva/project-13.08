import '../Assets/Css/Art.css';
import $ from 'jquery';

function Art() {

    $(document).ready(function(){
        $("img").click(function(){
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='"+t+"' className='modal-img'>");
        $("#myModal").modal();
      });
      
      $("video").click(function(){
        var v = $("video > source");
        var t = v.attr("src");
        $(".modal-body").html("<video className='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
        $("#myModal").modal();  
      });
      });

    return (
        
        <div>

<h1>Responsive Image Gallery</h1><hr/>
<div id="gallery" className="container-fluid">  
  <img src="https://source.unsplash.com/1600x1200?female,portrait" className="img-responsive"/>
  <img src="https://source.unsplash.com/1024x768?female,portrait" className="img-responsive"/>
   <img src="https://source.unsplash.com/1366x768?female,portrait" className="img-responsive"/>
  <video className="vid" controls>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </source>
  </video>
  <img src="https://source.unsplash.com/1920x1080?female,portrait" className="img-responsive"/>
  <img src="https://source.unsplash.com/640x360?female,portrait" className="img-responsive"/>
<img src="https://source.unsplash.com/320x640?female,portrait" className="img-responsive"/>
  <img src="https://source.unsplash.com/1200x1600?female,portrait" className="card img-responsive"/>
  <img src="https://source.unsplash.com/800x600?female,portrait" className="img-responsive"/>
  <img src="https://source.unsplash.com/600x800?female,portrait" className="img-responsive"/>
  <img src="https://source.unsplash.com/400x600?female,portrait" className="img-responsive"/>
  <img src="https://source.unsplash.com/600x400?female,portrait" className="img-responsive"/>
<img src="https://source.unsplash.com/1100x1600?female,portrait" className="img-responsive"/>
<img src="https://source.unsplash.com/1600x1100?female,portrait" className="img-responsive"/>
<img src="https://source.unsplash.com/992x768?female,portrait" className="img-responsive"/>
<img src="https://source.unsplash.com/768x992?female,portrait" className="img-responsive"/>

</div>

<div id="myModal" className="modal fade" role="dialog">
  <div className="modal-dialog">

  
    <div className="modal-content">
      <div className="modal-body">
      </div>
    </div>

  </div>
</div>

        </div>
    )
}

export default Art;