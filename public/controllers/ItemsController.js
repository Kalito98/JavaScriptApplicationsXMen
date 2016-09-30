import htmlRenderer from 'views/helpers/htmlRenderer';
import partialsHelper from 'views/helpers/partialsHelper';

import itemsModel from 'models/itemsModel';

var ItemsController = (function () {
    function titles() {
        itemsModel.getAll()
            .then(function (items) {
                var data = items;
                partialsHelper
                    .getPartialViewTemplate('items/titles')
                    .then(function (template) {
                        var htmlParsed = htmlRenderer.renderArray(template, data);
                        partialsHelper.addPartialToPage(htmlParsed);
                    });
            });
    }

    function details(context) {
        itemsModel.getById(context.params['id'])
            .then(function (item) {
                partialsHelper
                    .getPartialViewTemplate('items/details')
                    .then(function (template) {
                        var htmlParsed = htmlRenderer.render(template, item.attributes);
                        partialsHelper.addPartialToPage(htmlParsed);
                    });
            });
    }

    return {
        titles,
        details
    };
}());

export default ItemsController;