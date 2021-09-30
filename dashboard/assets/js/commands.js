$('.categories li')[0].classList.add('active');



$('.categories li').on('click', function() {
    $('.categories li').removeClass('active');
    
    const selected = $(this);
    selected.addClass('active');
    
    $('.commands li').hide();
    $(`commands .${selected[0].id}`).show();

});