export interface IClient {
  id: string;
  name: string;
  email: string;
  tel: number;
  password: string;
  dateCreated: Date;
  contacts: string /*modifiquei aqui*/;
}
export interface IClientCreate {
  name: string;
  email: string;
  tel: number;
  password: string;
  // contacts?: string /*modifiquei aqui*/;
}

export interface IClientLogin {
  email: string;
  password: string;
}
