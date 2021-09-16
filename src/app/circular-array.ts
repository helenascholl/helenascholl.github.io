export class CircularArray<T> {

  private readonly values: T[];

  constructor(values: T[] = []) {
    this.values = values;
  }

  public push(... items: T[]): void {
    this.values.push(... items);
  }

  public get(index: number): T {
    return this.values[(index % this.values.length + this.values.length) % this.values.length];
  }

  public get length(): number {
    return this.values.length;
  }

}
