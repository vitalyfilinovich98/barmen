$(document).ready(function () {
   
    let tabsitem=$('.tabs-item');
    
    tabsitem.on('click', function(event) {
        event.preventDefault();
       let activeContetnt=$(this).attr('href');
        console.log(activeContetnt);
        $('.visible').toggleClass('visible');
        $(activeContetnt).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active')
    });

});