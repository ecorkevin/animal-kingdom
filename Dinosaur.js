/**
 * @class Dinosaur
 * Represents the craziest animals to have ever existed in the Animal Kingdom.
 * @extends Animal
 */
var Dinosaur = Animal.extend({
  constructor: function(config){
    config = config||{};
    Dinosaur.super.constructor.call(this);
    Object.defineProperties(this, {
      /**
       * @cfg {boolean} [carnivore = true]
       * Whether or not the dinosaur eats meat. Defaults to `true`.
       */        
      carnivore: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: config.carnivore || true
      }
    });    
  }
});
