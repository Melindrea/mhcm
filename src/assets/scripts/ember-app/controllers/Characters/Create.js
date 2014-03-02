App.CharactersCreateController = Ember.ObjectController.extend({
    actions: {
        save: function() {
            'use strict';
            // just before saving, we set the creationDate
            this.get('model').set('creationDate', new Date());

            // create a record and save it to the store
            // var newCharacter = this.store.createRecord('character', this.get('model'));
            // newCharacter.save();

            // redirects to the character itself
            // this.transitionToRoute('character', newCharacter);
        },
        addIntimacy: function() {
            'use strict';
            var newIntimacy = this.store.createRecord('intimacy', {});
            this.get('model').get('intimacies').pushObject(newIntimacy);
        },
        removeIntimacy: function(intimacy) {
            'use strict';
            intimacy.deleteRecord();
        }
    },
    types: function() {
        'use strict';
        var characterType = this.get('model').get('characterType');
        if (App.characterTypes.indexOf(characterType) === -1) {
            return ['<choose type>'];
        }

        return App.types[characterType];
    }.property('model.characterType')
});
