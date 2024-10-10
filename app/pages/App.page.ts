import { BasePage, Cart, ContactUs, Home, Login, SignUp } from "@page.object";

export class Application extends BasePage {
  readonly login: Login = new Login(this.page);
  readonly home: Home = new Home(this.page);
  readonly cart: Cart = new Cart(this.page);
  readonly contactUs: ContactUs = new ContactUs(this.page);
  readonly signUp: SignUp = new SignUp(this.page)
}
