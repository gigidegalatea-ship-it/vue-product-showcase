describe("Página principal", () => {
  it("muestra el título Product Showcase", () => {
    cy.visit("/");
    cy.contains("h1", "Product Showcase").should("be.visible");
  });
});
