App.CharactersRoute = Ember.Route.extend({
    model: function() {
        'use strict';
        return this.store.find('character');
    }
});
