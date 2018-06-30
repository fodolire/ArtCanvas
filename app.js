
/*
window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/
$(function(){

  $('#myButton').submit(function makeSquares(square){
    var row = $('#myWidth').val();
    var col = $('#myHeight').val();
    for(var i=1; i<=row; i++){
        $('#myTable').append('<tr></tr>');
        for (var j = 1; j <=col; j++) {
          $('tr:last').append('<td></td>');
         // Set the class attribute of the <td> element to a value of 'cell'
         $('td').attr('class', 'cells');
        }
    }
    square.preventDefault();

    $('.cells').click(function(event){
        var printColor = $('#myPicker').val();
        $(event.target).css('background-color', printColor);
    });
  });
});
