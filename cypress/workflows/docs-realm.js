describe('Realm App Flow', () => {
  it('Establish a session and navigate to a Realm instance without active applications', () => {
    cy.viewportPreset('full-hd')

    // Retrieve auth.json fixture from fixtures folder
    cy.fixture('auth').then((auth) => {
      const { name, pass } = auth.realmUI.userNoApplications;
      cy.login(name, pass)
    })
    // Allow authentication flow to finish login process
    cy.wait(5000)
    
    // 20 seconds to check that our navigation to cloud resolves.
    cy.location('href', {timeout:20000})
      .should('include', 'cloud-qa')  

    cy.get('a[href*="realm-qa"', {timeout:10000}).wait(3000).click()

    // Check that our navigation resolves within 20 seconds.
    // This is an absurdly long amount of time, and can likely be lowered to 5 seconds.
    cy.location('href', {timeout:20000})
      .should('include','realm-qa')

    cy.get('.template-card-container', {timeout:20000})
    cy.wait(2000).screenshot('realm-create-new-app')

  
  })

  it('Establish a session and navigate to a Realm instance with active applications', () => {
    cy.viewportPreset('full-hd')

    // Retrieve auth.json fixture from fixtures folder
    cy.fixture('auth').then((auth) => {
      const { name, pass } = auth.realmUI.userWithApplications;
      cy.login(name, pass)
    })
    // Allow authentication flow to finish login process
    cy.wait(5000)
    
    // 20 seconds to check that our navigation to cloud resolves.
    cy.location('href', {timeout:20000})
      .should('include', 'cloud-qa')  

    cy.get('a[href*="realm-qa"', {timeout:10000}).wait(3000).click()

    // Check that our navigation resolves within 20 seconds.
    // This is an absurdly long amount of time, and can likely be lowered to 5 seconds.
    cy.location('href', {timeout:20000})
      .should('include','realm-qa')

    cy.get('.app-card', {timeout:20000})
    cy.wait(2000).screenshot('realm-with-existing-applications')

  
  })
})
