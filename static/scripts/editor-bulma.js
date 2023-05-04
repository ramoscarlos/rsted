function inputTextChanged() {
    var input_text = $('#txtInput').val();

    $.ajax({
        'url': script_root + '/srv/rst2html/',
        'data': {
            'rst': input_text,
        },
        'type': 'POST',
        'success': function (response) {
            // Lyrics.
            $('#divOutput').html(response);
        }
    });
}

$(function() {
    $('#txtInput').keyup(inputTextChanged);

    var has_content = ($('#txtInput').val().length) > 0

    if (has_content) {
        // If we have content, we send it to the server.
        inputTextChanged()
    }
});