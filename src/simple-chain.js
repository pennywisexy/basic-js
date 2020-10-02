const CustomError = require("../extensions/custom-error");

  const chainMaker = {
    value: '',
    get a() {return this.value},
    set a(value) {return this.value = ''},
    getLength() {
      this.length = this.value.length
      return this.length;
    },
    addLink(value) {
      this.value = `${this.value}|||${value}`
      return this
    },
    removeLink(position) {
      if (position >= 0) {
        this.value =  this.value.split('|||')
        this.value = this.value.filter(a => a !== '')
        delete this.value[position-1]
        this.value = this.value.join('|||')
        return this
      }else throw new Error ('THROWN')
      
    },
    reverseChain() {
      this.value = this.value.split('|||').reverse().join('|||');
      return this;
    },
    finishChain() {
      this.value = this.value.split('|||').filter(a => a !== '');
      this.value = `( ${this.value.join(' )~~( ')} )`;
      let newValue = this.value;
      this.clear()
      return newValue.toString();
    },
    clear () {
      return this.value = ''
    }
  };

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())

module.exports = chainMaker;
