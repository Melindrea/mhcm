var showdown = new Showdown.converter();

Ember.Handlebars.helper('markdown', function(input) {
    'use strict';
    if (input) {
        return new Handlebars.SafeString(showdown.makeHtml(input));
    }
    return '';
});

Ember.Handlebars.helper('since', function(date) {
    'use strict';
    return moment(date).fromNow();
});
