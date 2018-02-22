$(document).ready(function() {

    var $deleteButton =  $('.album-button');




    $deleteButton.click(function deleteAlbum() {

        var id = ($(this).attr('id')).substring(4);

        $.ajax({
            url: '/' + id,
            type: 'DELETE',
            success: $(this).parent().remove()
        });
    })
});