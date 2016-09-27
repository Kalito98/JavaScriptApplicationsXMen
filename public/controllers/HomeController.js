import htmlRenderer from 'public/views/helpers/htmlRenderer';
import partialsHelper from 'public/views/helpers/partialsHelper';

import itemsModel from 'public/models/itemsModel';

var HomeController = (function () {
    function index() {
        partialsHelper
            .getPartialViewTemplate('index')
            .then(function (template) {
                partialsHelper.addPartialToPage(template);
            });
    }

    return {
        index
    };
}());

export default HomeController;
