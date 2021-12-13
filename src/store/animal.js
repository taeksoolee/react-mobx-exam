const { observable, action, computed, observe, reaction } = require("mobx");

class Animal {
  FETCH_URL = 'http://localhost:3003'

  @observable list = [];
  @observable pending = 0;

  @computed
  get firstAnimal() {
    return this.list[0];
  }

  @action.bound
  fetchList() {
    fetch(`${this.FETCH_URL}/animals`)
    .then((res) => (res.json()))
    .then((data) => {
      this.list = data;
      this.pending = 1;
    })
    .catch((err) => {
      console.log(err);
      this.pending = -1;
    })
  }
}

const animal = new Animal();

// observe(animal, (changed) => {
//   console.log('changed ::: ', changed);
// });

reaction(
  () => animal.list,
  () => {
    console.log('changed ::: ', animal.list);
  }
)

export default animal;