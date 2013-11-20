/**
 * @class Cat
 * Represents a feline in the animal kingdom.
 * @extends Animal
 */
var Cat = Animal.extend({
  constructor: function(config){
    config = config||{};
    Cat.super.constructor.call(this);
    Object.defineProperties(this, {
      /**
       * @cfg {boolean} [big = false]
       * Whether or not the cat is a big cat. Defaults to `false`.
       */      
      big: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: this.config || false
      },
    });
  },
});