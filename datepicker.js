
/*Jquery Plugin*/

(function( $ ) {
 
    $.fn.datetime = function( $date,$time ) {
 
        var date = document.getElementById('date');
	var time = document.getElementById('time');
	return date,time;
 	$("#showdatetime").printThis();
    };
 
}( jQuery ));