const HomeTest = require("./homeTest");

async function runHomePageTests() {
    const homeTest = new HomeTest();
    await homeTest.testSearch("About");
    await homeTest.testSearch("contact");

    await homeTest.testAdvancedSearch();
}

async function myTests() {
    await runHomePageTests();
}

myTests();