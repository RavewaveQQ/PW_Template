export type Gender = "Mr." | "Mrs.";
export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
export type AddressInfoModel = {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2?: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
};
export type County =
  | "India"
  | "United States"
  | "Canada"
  | "Australia"
  | "Israel"
  | "New Zealand"
  | "Singapore";
