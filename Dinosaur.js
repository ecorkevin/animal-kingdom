/**
 * @class Trex
 * Represents the craziest carnivore in the Animal Kingdom.
 * @extends Animal
 */
var Trex = Animal.extend({
  constructor: function(config){
    config = config||{};
    Trex.super.constructor.call(this);
  }
});
