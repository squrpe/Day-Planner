
    let dayEl = $('#currentDay');
    dayEl.text(moment().format('dddd, MMMM Do'));

$(document).ready(function() { 

    var savedEvents = ['','','','','','','','',''];

    console.log(savedEvents);

    function checkTime(){

        var currentTime = parseInt(moment().format('HH'));

        $('.div-block').each(function() {

                var divTime = parseInt($(this).attr('data-hour'));

                console.log(divTime < currentTime);

                if (divTime < currentTime) {

                    $(this).removeClass('future past present');
                    $(this).addClass('past');

                } else if (divTime === currentTime) {

                    $(this).removeClass('future past present');
                    $(this).addClass('present');

                } else {

                    $(this).removeClass('future past present');
                    $(this).addClass('future');

                }
        })
        
    }

    $('.saveBtn').on('click', function(){

        console.log(savedEvents);

        var descValue = $(this).siblings('.div-block').val();
        var descTime = $(this).siblings('.div-block').data('hour');
        //var descTime = parseInt($(this).parent().attr('id'));

        savedEvents[descTime - 9] = descValue;

        localStorage.setItem('Saved Input', savedEvents);
        console.log('Save: '+ descValue + ' at ' + descTime + '.');
        console.log(savedEvents);
    })

    function getData() {

        if (localStorage.getItem('Saved Input') === null) {

        } else {
            savedEvents = localStorage.getItem('Saved Input').split(',');
        }

        console.log(savedEvents);

        //for (var i = 0; i < savedEvents.length; i++) {
            //var textContent = ? ;
            //textContent.val(savedEvents[i]);
        //}

        //savedEvents.forEach(hour => {
            //$('textarea.data(hour) .div-block').val(localstorage.getItem())
        //})

    }

    $('#clearbtn').on('click', function() {

        var confirm = window.confirm('Please confirm whether you want to clear your schedule.');

        if (confirm === true) {
            var savedEvents = ['','','','','','','','',''];
            localStorage.setItem('Saved Input', savedEvents);

            console.log(savedEvents);
            getData();
        }

    })

    getData();
    checkTime();

});
