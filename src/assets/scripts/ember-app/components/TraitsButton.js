App.TraitsButtonComponent = Ember.Component.extend({
    tagName: 'button',
    classNameBindings: ['isFilled'],
    value: 0,
    trait: null,

    // Events
    click: function() {
        'use strict';
        this.set('trait', this.get('value'));
    },

    // Properties
    isFilled: function() {
        'use strict';
        return (this.get('trait') >= this.get('value'));
    }.property('trait', 'value')
});
