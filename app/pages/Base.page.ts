import { Page } from "@playwright/test";
import { step } from "@step";

export abstract class BasePage {
  constructor(protected page: Page) {}
};

export abstract class Component extends BasePage {
  abstract expectLoaded(): Promise<void>;

  @step()
  async isLoaded():Promise<boolean> {
    try {
      await this.expectLoaded();
      return true
    } catch {
      return false;
    }
  }
};

export abstract class AppPage extends Component {
    public abstract pagePath: string;

    @step()
    async navigateTo(path?:string) {
        await this.page.goto(path ?? this.pagePath);
        await this.expectLoaded();
    }
};
