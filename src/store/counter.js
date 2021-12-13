import { action, observable } from "mobx";

class Counter {
  @observable num = 0;

  @action.bound
  increase() {
    this.num += 1;
  }
}

export default new Counter();