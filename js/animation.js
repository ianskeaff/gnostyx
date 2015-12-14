$(document).ready(function(){


var $win = $(window);
var $gear = $('.blk-cog');
var $gear2 = $('.blk-cog2');


$win.on('scroll', function() {
	// console.log($win.scrollTop());
	$gear.css('transform', 'rotate(' + $win.scrollTop() / 2 + 'deg)');


$gear2.css('transform', 'rotate(' + $win.scrollTop() / -2 + 'deg)');



});
});
