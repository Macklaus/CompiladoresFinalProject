export class Place {
  private _id: string;
  private _name: string;
  private _description: string;

  constructor(id: string, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
  }

  get Id() {
    return this._id;
  }

  get Name() {
    return this._name;
  }

  set Name(newName: string) {
    this._name = newName;
  }

  get Description() {
    return this._description;
  }

  set Description(newDescription: string) {
    this._description = newDescription;
  }
}
