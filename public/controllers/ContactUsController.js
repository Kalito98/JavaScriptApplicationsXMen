import htmlRenderer from 'views/helpers/htmlRenderer';
import partialsHelper from 'views/helpers/partialsHelper';

//import itemsModel from 'models/itemsModel';

var ContactUsController = (function () {
    function contactUs() {
        partialsHelper
            .getPartialViewTemplate('contactUs')
            .then(function (template) {
                partialsHelper.addPartialToPage(template);
            });
    }

    return {
        contactUs
    };
}());

export default ContactUsController;