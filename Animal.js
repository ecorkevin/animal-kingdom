/**
 * @class Animal
 * Represents an animal in the Animal Kingdom.
 * @extends Class
 */
var Animal = Class.extend({
  constructor: function(config){
    config = config||{};
    Object.defineProperties(this,{
    /**
     * @cfg {Boolean} [rabid = true]
     * Whether or not the animal is Rabid. Defaults to `false`.
     */
      rabid: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: false
      },
    /**
     * @cfg {String} [legs = 4]
     * The number of legs an animal has.  Defaults to `4`.
     */      
      legs: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 4
      },
    /**
     * @cfg {String} [lives = 1]
     * The number of lives an animal has. Defaults to `1`.
     */      
      lives: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 1
      },
    /**
     * @cfg {string}
     * The sound the animal makes.
     */
      noise: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: config.noise
      },      
    });
  },
  /**
   * @method eat
   * Tell the animal to Eat
   * 
   * @param {string} food
   * The food to be consumed.
   */
  eat: function(food){
    food ? console.log('nom, nom... '+food+' is good!') : console.log("Can't eat nothing, right?");
  }
});