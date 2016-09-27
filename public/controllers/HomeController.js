import htmlRenderer from 'views/helpers/htmlRenderer';
import partialsHelper from 'views/helpers/partialsHelper';

import itemsModel from 'models/itemsModel';

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
