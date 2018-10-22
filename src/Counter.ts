
export default class Counter {

  private num = 0;

  public increment() {
    this.num = this.num + 1;
  }

  public get Num() {
    return this.num;
  }

}
