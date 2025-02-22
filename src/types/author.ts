export class AuthorEvent {
  constructor(
    public id: string,
    public date: string,
    public title: string,
    public type: "race" | "brevet" | "future",
    public description?: string,
  ) {}

  static fromJSON(json: any): AuthorEvent {
    return new AuthorEvent(json.id, json.date, json.title, json.type, json.description)
  }

  toJSON() {
    return {
      id: this.id,
      date: this.date,
      title: this.title,
      type: this.type,
      description: this.description,
    }
  }
}

export interface Author {
  name: string
  bio: string
  avatar: string
  links: {
    twitter?: string
    github?: string
    strava?: string
    bluesky?: string
  }
}

