import Home from "./page";

describe("Calculator", () => {
  it("renders a calculator", () => {
    cy.visit("../app/page");
    // check if all components are rendered
    cy.get("result").should("exist");
    cy.get("num1").should("exist");
    cy.get("num2").should("exist");
    cy.get("add").should("exist");
    cy.get("subtract").should("exist");
    cy.get("multiply").should("exist");
    cy.get("divide").should("exist");
  });
});
