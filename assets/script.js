
    let dayEl = $('#currentDay');
    dayEl.text(moment().format('dddd, MMMM Do'));

$(document).ready(function() { 

    var savedEvents = ['','','','','','','','',''];

    console.log(savedEvents);

    // Function to change colours of each div depending on the time

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

    // Event listener once button is clicked to save input into local storage

    $('.saveBtn').on('click', function(){

        var descValue = $(this).siblings('.div-block').val();
        var descTime = $(this).siblings('.div-block').data('hour');

        localStorage.setItem(descTime, descValue);
        console.log('Save: '+ descValue + ' at ' + descTime + '.');

        getData();
    })

    // Return local storage and display in the text area

    function getData() {

        $('textarea').each(function() {
            console.log($(this).data('hour'));

            var localEvents = localStorage.getItem($(this).data('hour'));
            
            console.log(localEvents);
            $(this).val(localEvents);
        })

    }

    // Clear button function

    $('#clearbtn').on('click', function() {

        var confirm = window.confirm('Please confirm whether you want to clear your schedule:');

        if (confirm === true) {
            localStorage.clear();
            getData();
        }

    })

    getData();

    checkTime();

});
