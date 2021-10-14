import '../Assets/Css/Photos.css';

function Photos() {

    return (
        <div>

            <div class="gallery">
                <input type="radio" checked="checked" name="select" id="img-tab-1" />
                <label for="img-tab-1" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjV9&auto=format&fit=crop&w=2550&q=80)'}}></label>
                <img src="https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjc5NjV9&auto=format&fit=crop&w=2550&q=80" border="0" />

                <input type="radio" name="select" id="img-tab-2" />
                <label for="img-tab-2" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'}}></label>
                <img src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" border="0" />

                <input type="radio" name="select" id="img-tab-3" />
                <label for="img-tab-3" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558981285-501cd9af9426?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'}}></label>
                <img src="https://images.unsplash.com/photo-1558981285-501cd9af9426?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" border="0" />

                <input type="radio" name="select" id="img-tab-4" />
                <label for="img-tab-4" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'}}></label>
                <img src="https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" border="0" />

                <input type="radio" name="select" id="img-tab-5" />
                <label for="img-tab-5" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'}}></label>
                <img src="https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" border="0" />

                <input type="radio" name="select" id="img-tab-6" />
                <label for="img-tab-6" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=800&q=60)'}}></label>
                <img src="https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=800&q=60" border="0" />

                <input type="radio" name="select" id="img-tab-7" />
                <label for="img-tab-7" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'}}></label>
                <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=601.2.1&auto=format&fit=crop&w=800&q=60" border="0" />

                <input type="radio" name="select" id="img-tab-8" />
                <label for="img-tab-8" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1558980664-2506fca6bfc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60)'}}></label>
                <img src="https://images.unsplash.com/photo-1558980664-2506fca6bfc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" border="0" />
            </div>


        </div>
    )
}

export default Photos;