export class Room {
  id: number;
  name: string;
  description: string;
  capacity: number;
  crowd: number;
  beamer: boolean;
  type: string;

  constructor(id?: number, name?: string, capacity?: number, crowd?: number, type?: string, description?: string, beamer?: boolean) {
    if (id) {
      this.id = id;
    } else {
      this.id = -1;
    }
    if (name) {
      this.name = name;
    } else {
      this.name = '';
    }
    if (description) {
      this.description = description;
    } else {
      this.description = '';
    }
    if (capacity) {
      this.capacity = capacity;
    } else {
      this.capacity = 0;
    }
    if (crowd) {
      this.crowd = crowd;
    } else {
      this.crowd = 0;
    }
    if (beamer) {
      this.beamer = beamer;
    } else {
      this.beamer = false;
    }
    if (type) {
      this.type = type;
    } else {
      this.type = '';
    }
  }
}
