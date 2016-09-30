const templateLoader = (() => {
  const cache = {};
    function get(templateName) {
        return new Promise((resolve, reject) => {
          if(cache[templateName]){
            resolve(cache[templateName]);
          } else{
            $.get(`partials/templates/${templateName}.handlebars`)
                .done((res) => {
                    let template = Handlebars.compile(res);
                    cache[templateName] = template;
                    resolve(template);
                })
                .fail(reject)
              }
        })
    }
    return {
        get
    }
})();
export default templateLoader;
