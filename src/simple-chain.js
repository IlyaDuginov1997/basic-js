const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  configObj: [],

  getLength() {
    return this.configObj.length;
  },

  addLink(value) {
    this.configObj.push(value);
    return chainMaker;
  },

  removeLink(position) {
    const currentIndex = position - 1;

    if (this.configObj[currentIndex] === undefined) {
      this.configObj = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.configObj.splice(currentIndex, 1);
    return chainMaker;
  },

  reverseChain() {
    this.configObj.reverse();
    return chainMaker;
  },

  finishChain() {
    const newArr = this.configObj.map(el => `( ${el} )`).join('~~');
    this.configObj = [];
    return newArr;
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));

module.exports = {
  chainMaker
};
