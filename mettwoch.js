exports.daysToMettwoch = function(req, res) {

    var dayOfWeek = new Date().getDay();
    var daysToMettwoch = 0;

    switch (dayOfWeek) {
        case 0:
            daysToMettwoch = 3;
            break;
        case 1:
            daysToMettwoch = 2;
            break;
        case 2:
            daysToMettwoch = 1;
            break;
        case 3:
            daysToMettwoch = 0;
            break;
        case 4:
            daysToMettwoch = 6;
            break;
        case 5:
            daysToMettwoch = 5;
            break;
        case 6:
            daysToMettwoch = 4;
            break;
        default:
            daysToMettwoch = null;
            break;
    }

    res.json({
        days: daysToMettwoch
    });

};

exports.optionsDaysToMettwoch = function(req, res)  {

    var daysToMettwochOptions = {

    }

    res.send(daysToMettwochOptions);

};