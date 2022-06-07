const date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

hours.forEach((hour) => {
    const row = $('<div>');
    const time = $('<div>');
    const text = $('<textarea>');
    const save = $('<button>');

    row.addClass('row time-block');
    time.addClass('hour col-1');
    text.addClass('description col-10');
    save.addClass('saveBtn far fa-save col-1');

    row.attr('id', hour);
    
    if (hour > 12) {
        time.text(`${hour - 12} pm`);
    } else if (hour === 12) {
        time.text(`${hour} pm`)
    } else {
        time.text(`${hour} am`);
    }

    row.append(time, text, save);
    $('.container').append(row);
})

const currentHour = moment().hours();

$('.time-block').each(function() {
    const rowHour = parseInt($(this).attr('id'));
    if (rowHour > currentHour) {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    } 
    else if (rowHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
        $(this).removeClass('future');
    } else {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
    }
})