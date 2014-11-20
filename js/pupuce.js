$(document).ready(function(){
	$('.list-app li').click(function(e){
	    if( $(this).find('>ul').hasClass('active') ){
	        $(this).children('ul').removeClass('active').children('li').slideUp();
	        e.stopPropagation();
	    }
	    else{
	        $(this).children('ul').addClass('active').children('li').slideDown();
	        e.stopPropagation();
	    }
	});

	$('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });



});
