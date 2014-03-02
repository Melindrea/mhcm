App.CharactersEditRoute = Ember.Route.extend({
    model: function(params) {
        'use strict';
        console.log(params);
        return this.store.find('character', params.characterId);
    },
    // in this case (the create route), we can reuse the character/edit template
    // associated with the charactersCreateController
    renderTemplate: function() {
        'use strict';
        this.render('characters.create', {
            controller: 'characterEdit'
        });
    }
});
