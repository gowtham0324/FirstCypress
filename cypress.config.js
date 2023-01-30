const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Ecommerce",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // on("task", {
      //   'readXlsx': readXlsx.read
      // });
    },

    env: {
      baseurl: "https://naveenautomationlabs.com/opencart/",
    },
  },
});
