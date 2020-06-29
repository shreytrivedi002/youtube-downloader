$(document).ready(function() {
    $("#search").click(function() {



        let url = $('#id_url').val();
        let VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        var ids = url.match(VID_REGEX)[1]

        if ($('#id_url').val() == '') {
            alert('Blank is Not Allowed!!! ')
        } else {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://free-mp3-mp4-youtube.p.rapidapi.com/" + ids + "/MP4/spinner/2196f3/100/box-button/2196f3/tiny-button/Download/FFFFFF/yes/FFFFFF/none",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-mp3-mp4-youtube.p.rapidapi.com",
                    "x-rapidapi-key": "b63f72b597msh2c594d45b718fc6p15ea4cjsnb6e5d5d7ec75"
                }
            }


            $('#spin').html('<div class="spinner-border" style="width: 3rem; height: 3rem;color: green;position: absolute;" role="status"></div><div class="spinner-grow" style="width: 3rem; height: 3rem;color: yellowgreen;position: relative;" role="status"></div>');
            $.ajax(settings).done(function(response) {
                if (response['message'] == 'OK') {
                    $('#thumb').attr('src', response['thumbnail']);
                    $('#btn').attr('href', response['url']);
                    $('#vid').html(response['video_id']);
                    $('#id_url').val('');
                    $('#msg').removeAttr('hidden');



                } else {
                    $('#msg').html("<div id='vid' style='color:red;'></div>");
                    $('#vid').html(' This May have happened because You Entered a Wrong or Incorrect Link... Retry..');
                    $('#id_url').val('')
                    $('#msg').removeAttr('hidden');

                }
                console.log(response);
            });
        }
    });
});


// $(document).ready(function() {
//     $("#search2").click(function() {


//         let url = $('#id_url').val();
//         let VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
//         var ids = url.match(VID_REGEX)[1]


//         if ($('#id_url').val() == '') {
//             alert('Blank is Not Allowed!!! ')
//         } else {

//             var settings = {
//                 "async": true,
//                 "crossDomain": true,
//                 "url": "https://free-mp3-mp4-youtube.p.rapidapi.com/" + ids + "/MP3/spinner/2196f3/100/box-button/2196f3/tiny-button/Download/FFFFFF/yes/FFFFFF/none",
//                 "method": "GET",
//                 "headers": {
//                     "x-rapidapi-host": "free-mp3-mp4-youtube.p.rapidapi.com",
//                     "x-rapidapi-key": "b63f72b597msh2c594d45b718fc6p15ea4cjsnb6e5d5d7ec75"
//                 }
//             }


//             $('#show').html('<div class="spinner-border" style="width: 3rem; height: 3rem;color: green;position: absolute;" role="status"></div><div class="spinner-grow" style="width: 3rem; height: 3rem;color: yellowgreen;position: relative;" role="status"></div>');
//             $.ajax(settings).done(function(response) {
//                 if (response['message'] == 'OK') {
//                     $('#thumb').attr('src', response['thumbnail']);
//                     $('#btn').attr('href', response['url']);
//                     $('#vid').html(response['video_id']);
//                     $('#id_url').val('')

//                 } else {
//                     $('#show').html("<div id='vid' style='color:red;'></div>")
//                     $('#vid').html(response['error'] + ' This May have happened because You Entered a Wrong PNR Code... Retry..');
//                     $('#pnr').val('')

//                 }
//                 console.log(response);
//             });
//         }
//     });
// });



$(document).ready(function() {
    $("#change").click(function() {
        $('#he').html('mp3');
        $('.the').html('mp3');
        $('#search').attr('id', 'search2');

    });
});

$(document).ready(function() {
    $("#change2").click(function() {
        $('#he').html('mp4');
        $('.the').html('mp4');
        $('#search2').attr('id', 'search');


    });
});