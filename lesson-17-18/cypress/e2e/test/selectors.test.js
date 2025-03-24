let textAreaId = '';

describe('Selectors tests', () => {
    beforeEach(() => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('[data-testid="comments-area"]')
          .invoke('attr', 'id')
          .then($id => {
            textAreaId = $id
            expect($id).to.equal('comments')
          })
        cy.get('[id="developer-name"]')
          .invoke('attr', 'data-testid')
          .as('inputDataTestValue')
    })

    it('Initial selectors work - 1', () => {
        cy.get('[data-testid="windows-radio"]')
          .should('not.be.checked')
          .click()
          .should('be.checked')
        cy.contains('fieldset p label', 'MacOS')
          .find('input')
          .should('not.be.checked')
          .click({force: true})
          .should('be.checked')

        cy.get('div[class*="col-2"]')
          .children('fieldset')
          .eq(0)
          .children('p')
          .eq(1)
          .find('input')
          .should('be.checked')

        cy.focused()  

        cy.get('[data-testid="windows-radio"]')
          .closest('p')
    })

    it('Initial selectors work - 2', () => {
        // cy.get('[data-testid="comments-area"]')
        //   .should('be.visible')
        //   .invoke('hide')
        //   .should('not.be.visible')
        cy.get('[data-testid="tried-testcafe-checkbox"]').click()
        const expectedText = 'This is some plain text '.repeat(4);
        cy.get(`[id=${textAreaId}]`)
          .type(expectedText)
          .should('have.value', expectedText)
        cy.get(`[id=${textAreaId}]`)
            .then($el => {
                console.log($el[0])
                expect($el[0].value).to.equal(expectedText)
            })
        cy.title().should('equal', 'TestCafe Example Page')
    })

        it('Initial selectors work - 3',  function () {
            cy.get(`[data-testid=${this.inputDataTestValue}]`)
              .as('inputSelector')
            cy.get('@inputDataTestValue').then((dataTest) => {
                cy.get(`[data-testid=${dataTest}]`)
                  .type('Andrii')
                  .should('have.value', 'Andrii')
            })


            cy.contains('fieldset legend', 'How would')
              .invoke('text')
              .then($text => {
                cy.log($text);
              })


            // // option 1
            // const arrIndexes = [0,1,2,3,4]
            // arrIndexes.forEach(ind => {
            //     cy.get('[class*="col-1"] fieldset p input')
            //       .eq(ind)
            //       .should('not.be.checked')
            //       .click()
            //       .should('be.checked')
            // })

            // option 2 - better
            cy.get('[class*="col-1"] fieldset p input')
              .each((value, index) => {
                index % 2 === 0 
                ? cy.get(value).click().should('be.checked') 
                : cy.get(value).should('not.be.checked')
              })


             cy.get('[class*="col-1"] fieldset p input')
               .click({multiple: true}) 
            
            cy.get('[class*="col-1"] fieldset:nth-of-type(2)')
              .within(() => {
                cy.get('input').click({multiple: true}) 
              })

        })

        it('Basic HOMEWORK login', () => {
            cy.visit('https://qauto.forstudy.space/', {
                auth: {
                    username: 'guest',
                    password: 'welcome2qauto'
                }
            })
        })
})

// const LOGIN_PAGE_SELECOTRS = {
//     emailInput: '[data-test="email-input"]',
// }

// cy.get(LOGIN_PAGE_SELECOTRS.emailInput).