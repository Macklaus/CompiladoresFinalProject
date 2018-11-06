export class Place {
  private id: string;
  private _name: string;
  private _description: string;
  private _userId: string;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this._name = name;
    this._description = description;
  }

  get _id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get description() {
    return this._description;
  }

  set description(newDescription: string) {
    this._description = newDescription;
  }

  get userId() {
    return this._userId;
  }

  set userId(userId: string) {
    this._userId = userId;
  }
}
