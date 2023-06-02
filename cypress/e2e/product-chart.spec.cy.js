describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
})



/*

Where to test:
https://apex.oracle.com/pls/apex/r/danmende/qa-application/home

What are the credentials:
user:QA_USER
pass:qatest123

1. Access page with credentials attached. Credentials should not be hard-coded
2. Save values in chart in memory
3. Access table and change the quantity of order 10 to 20. Verify table data is updated and chart is updated
4. Access table and change the location of order 10 to Deli. Verify table data is updated and chart is updated.
5. Save your automation test to github and share your public git repo url
*/