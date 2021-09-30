$('#search-button').on('click', function(){
// $('#host-info').html('');
    $.ajax({

        url: 'https://www.who-hosts-this.com/API/Host',
        type: 'get',
        datatype: 'json',
        data: {

            'key' : '7920d41ce56ce3e11c64e5fd07e0f5b29f8dc930a9e293f8d830038f6be54621570ada',
            'url' : $('#search-input').val()

        },

        success: function(result){
            // console.log(result);
            if (result.result.msg == "Success" ){
                // console.log(result); 
                let webb = result.results;
                // console.log(isp_name);
                $.each(webb, function(i, data) {
                    $('#host-info').append(`

                    <div class="col-md-4">
                    <div class="card mb-3" >
                    <div class="card-body">
                      <h5 class="card-title">`+data.isp_name+`</h5>
                      <p class="card-text">IP Address : `+data.ip+` </p>
                      <p class="card-text">Type : `+data.type+`</p>
                      <p class="card-text">ISP ID : `+data.isp_id+`</p>
                      <p class="card-text">ISP Name : `+data.isp_name+`</p>
                      <a href="`+data.isp_name+`" class="btn btn-primary">Go To Site</a>
                    </div>
                    </div>
                    </div>
                    
                    `)

                });
                $('#search-input').val('');
                
            }else{
                $('#host-info').html(`
                
                <div class="col">
                    <h3 class="text-center"> Oops. . . Invalid URL, make sure type correct URL ! </h3>
                </div>
                
                
                `)
            }
        }

    });

});