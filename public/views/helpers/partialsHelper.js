var partialsHelper = (function () {
    function getPartialViewTemplate(partialName) {
        var promise = new Promise(function (resolve, reject) {
            $.get('public/views/partials/' + partialName + '.html')
                .then(function (partial) {
                    resolve(partial);
                }, function (err) {
                    reject(err);
                });
        });

        return promise;
    }

    function addPartialToPage(renderedPartialHtml) {
        $('#main').html(renderedPartialHtml);
    }

    function addToPage(renderedPartialHtml) {
        $('#loginControls').html(renderedPartialHtml);
    }

    return {
        getPartialViewTemplate,
        addPartialToPage,
        addToPage
    };
}());

export default partialsHelper;