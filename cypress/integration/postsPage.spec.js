/*eslint-disable*/
describe("Posts page", () => {
  // beforeEach(() => {
  //   cy.server();
  //   cy.route("/users/2", "fx:user");
  //   cy.route("/posts?userId=2", "fx:posts").as("loadPosts");
  //   cy.visit("/");
  // });

  it("opens properly", () => {
     cy.get(".page-title").should("contain","Posts");
  });

  // it("filters results when typing in search box", () => {
  //   cy.get("[data-test=list-item]").should("have.length", 10);
  //   cy.get('[data-test=list-filter]').type("et ea", { delay: 100 });
  //   cy.get("[data-test=list-item]").should("have.length",1);
  // });

  // it("opens add post page when clicking 'Add Post' button", () => {
  //   cy.get('[data-test=add-post]').click()
  //   cy.url().should('include', '/posts/new')
  //   cy.get('.page-title').should("contain", "Create Post")
  // });

  // it("Creates a new post", () => {
  //   cy.get('[data-test=add-post]').click()
  //   cy.get('[data-test=post-title]').type("New Post",{delay: 100})
  //   cy.get('[data-test=post-body]').type("New Post body", { delay: 100 })
  //   cy.get('[data-test=save-btn]').click()
  //   cy.url().should('eq', 'http://localhost:3000/')
  // });

  // it("Displays an error when submitting without title", () => {
  //   cy.get('[data-test=add-post]').click()
  //   cy.get('[data-test=post-body]').type("New Post body", { delay: 100 })
  //   cy.get('[data-test=save-btn]').click()
  //   cy.contains("title is required.").should("be.visible")
  // });

  // it("Displays an error when submitting without body", () => {
  //   cy.get('[data-test=add-post]').click()
  //   cy.get('[data-test=post-title]').type("New Post", { delay: 100 })
  //   cy.get('[data-test=save-btn]').click()
  //   cy.contains("body is required.").should("be.visible")
  // });

  // it("Opens edit post page", () => {
  //   cy.wait("@loadPosts");
  //   cy.get('[data-test=list-item]').first().click()
  //   cy.get('.page-title').should("contain", "Update Post")
  // });

  // it("loads post data in edit mode", () => {
  //   cy.route("posts/*", "fx:post")
  //   cy.wait("@loadPosts");
  //   cy.get('[data-test=list-item]').first().click()
  //   cy.get('[data-test=post-title]').should("have.value", "test title")
  //   cy.get('[data-test=post-body]').should("have.value", "test body")
  // });

  // it.only("Updates post data", () => {
  //   cy.route("posts/*", "fx:post")
  //   cy.wait("@loadPosts");
  //   cy.get('[data-test=list-item]').first().click()
  //   cy.get('[data-test=save-btn]').click()
  //   cy.contains("Post Updated").should("be.visible")
  //   cy.url().should('eq', 'http://localhost:3000/')
  // });
});
