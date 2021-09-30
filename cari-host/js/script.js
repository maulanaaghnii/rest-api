function searchImage() {
    $('#image-list').html('');

    $.ajax({
        url: 'https://pixabay.com/api/',
        type: 'get',
        datatype: 'json',
        data: {
            'key': '22250618-af78d2f43cacd97c9cdc9528d',
            'q': $('#search-input').val()
        },
        success: function (result) {
            console.log(result);
            if (result.totalHits >= 1) {

                let images = result.hits;
                $.each(images, function (i, data) {

                    $('#image-list').append(`
                    <div class="col-md-4">
                    
                   
                        <div class="card bg-dark text-white">
                        
                        <img src="`+ data.largeImageURL + `" class="card-img" alt="...">
                            <div class="card-img-overlay">
                            
                            
                            <p class="card-text">`+ data.user + `</p>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                    `)

                });

                $('#search-input').val('');

            } else {
                $('#image-list').html(`

                <div class="col ">
                <h1 class="text-center"> Oops, images does not exist </h1>
                </div>
                `

                );
            }
        }
    });
};


$('#search-button').on('click', function () {

    searchImage();

});


$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchImage();
    }
});