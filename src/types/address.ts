export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    let: number;
    lng: number;
  };
}
