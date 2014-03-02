App.CharacterController = Ember.ObjectController.extend({
    deleteMode: false,
    actions: {
        edit: function() {
            'use strict';
            this.transitionToRoute('characters.edit', this.get('model'));
        },
        delete: function() {
            'use strict';
            this.toggleProperty('deleteMode');
        },
        cancelDelete: function() {
            'use strict';
            // set deleteMode back to false
            this.set('deleteMode', false);
        },
        confirmDelete: function() {
            'use strict';
            this.get('model').deleteRecord();
            this.get('model').save();
            // then transition to the users route
            this.transitionToRoute('characters');
        }
    }
});
