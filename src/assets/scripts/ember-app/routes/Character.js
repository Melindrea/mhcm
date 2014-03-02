App.CharacterRoute = Ember.Route.extend({
    model: function(params) {
        'use strict';
        // return this.store.find('character', params.character_id);
        return this.store.find('character', params.characterId);
    }
});
