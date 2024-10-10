import { test as base } from "@playwright/test";
import { Application } from "@page.object";

type BaseFixture = {
  app: Application;
};

export const test = base.extend<BaseFixture>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
});
