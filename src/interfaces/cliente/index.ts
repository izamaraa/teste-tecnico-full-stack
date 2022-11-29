export interface IClient {
  id: string;
  name: string;
  email: string;
  tel: number;
  password: string;
  dateCreated: Date;
}
export interface IClientCreate {
  name: string;
  email: string;
  tel: number;
  password: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}
