App.TraitsAbilitiesComponent = Ember.Component.extend({
    character: null,
    characterType: null,
    abilities: function() {
        'use strict';
        if (this.get('characterType') === 'Solar') {
            // Thingy
            // return this.render('components/traits-abilities');
        }
        return this.get('characterType');
    }.property('characterType')
});
