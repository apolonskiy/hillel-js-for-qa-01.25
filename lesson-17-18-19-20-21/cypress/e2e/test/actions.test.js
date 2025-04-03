import {LandingPage, ProfilePage, GaragePage} from '../../support/poms'
const landingPage = new LandingPage();
const profilePage = new ProfilePage();
const garagePage = new GaragePage();

describe('Multi page checks', () => {
  beforeEach(() => {
    cy.visit('')
  })
  // it('Click on link which leads to other page', () => {
 
  //   cy.origin('https://www.linkedin.com', () => {
  //     cy.get('a[href*="linkedin"]').invoke('removeAttr', 'target');
  //     cy.get('a[href*="linkedin"]').click()
  //     cy.url().should('not.equal', 'https://qauto.forstudy.space')
  //   })

  //   // cy
  //   //   .puppeteer('switchToTabAndGetContent')
  //   //   .should('contain', 'https://www.linkedin.com')
  // })

  // it('linked in navi', () => {
  //   cy.visit('https://www.linkedin.com');
  // })

  it('Drag n Drop check with native Cypress and extension', () => {
    cy.visit('https://devexpress.github.io/testcafe/example/');
    cy.get('[data-testid="tried-testcafe-checkbox"]').click()

    cy.get('[id="slider"]').invoke('css', 'width')
      .then(str => {
        cy.get('[id="slider"] span')
          .trigger('mousedown', { which: 1, pageX: 0, pageY: 0 })
          .trigger('mousemove', { which: 1, pageX: parseInt(str) / 10 * 5, pageY: 0 })
          .trigger('mouseup')
      })
    cy.get('[id="slider"] span').drag('[class="slider-value"]:nth-of-type(4)')
  })

  const selector = {
    signInButton: {selector: 'button', textContent: 'Sign In'}
  }
  it('Login and upload image to profile', () => {
    cy.window().then(win => {
      expect(win.scrollY).to.equal(0)
        
    })
    landingPage.headerAboutButton.click()
    cy.wait(1000)
    cy.window().then(win => {
      expect(win.scrollY).to.be.greaterThan(0)
    })

    // cy.contains(selector.signInButton.selector, selector.signInButton.textContent).click()
    // cy.get('form input[name="email"]').type('hillel-1@aaa.com');
    // cy.get('form input[name="password"]').type('testHillel1!');
    // cy.contains('button', 'Login').click()
    ///----------
    // cy.login('hillel-1@aaa.com', 'testHillel1!')
    //-------

    landingPage.executeLogin(Cypress.env('defaultUserEmail'), Cypress.env('defaultUserPassword'))
    profilePage.selectProfile();
    profilePage.updateProfileImage('./cypress/fixtures/images/profile-image.jpeg')
  })

    
  it('Login and catch response', function () {
    cy.intercept('POST', '/api/auth/signin').as('signInRequest');
    landingPage.executeLogin(Cypress.env('defaultUserEmail'), Cypress.env('defaultUserPassword'))
    cy.wait('@signInRequest').then(interceptedRequest => {
      cy.wrap(interceptedRequest.response).as('signInResponse');
      cy.wrap(interceptedRequest.response.headers['set-cookie'][0]).as('sidCookie');
    });
    cy.get('@signInResponse').its('body.data.userId').should('equal', 163923);
    cy.contains('button[class*="btn-primary"]', 'Add car').then($btn => {
      console.log('this.sidCookiethis.sidCookiethis.sidCookiethis.sidCookie>>>>>>',this.sidCookie)
    })
  })

  it('Login stubbing with invalid response', function () {
    cy.intercept('POST', '/api/auth/signin', {body: {"status":"error","message":"Wrong email or password"}, statusCode: 400}).as('signInRequest');
    landingPage.executeLogin(Cypress.env('defaultUserEmail'), Cypress.env('defaultUserPassword'))
    cy.wait('@signInRequest')
    landingPage.selectors.signInFormWorngCredsAlert().should('be.visible');
  })  

  it('Login and stub getCars response', function () {
    cy.intercept('GET', '/api/cars', {fixture: 'threeCarsResponse'}).as('getCars');
    landingPage.executeLogin(Cypress.env('defaultUserEmail'), Cypress.env('defaultUserPassword'))
    cy.wait('@getCars')
    cy.get('li app-car').should('have.length', 3)
  })

  it('Login and modify getCars request headers to invalidate call', function () {
    cy.intercept('GET', '/api/cars', (req => {
      req.headers.cookie = 'sid=invalid';
    })).as('getCars');
    landingPage.executeLogin(Cypress.env('defaultUserEmail'), Cypress.env('defaultUserPassword'))
    cy.wait('@getCars').then(carsResp => {
      console.log(carsResp);
    })
    cy.contains('div[class*="alert"] p','Not authenticated').should('be.visible');
  })
})

describe('API pre - post condition tests', () => {
  beforeEach(() => {
    cy.visit('')
  })

  afterEach(function () {
    cy.get('@createdCarId').then(createdCarId => {
      // cy.get('@sidCookie').then(sidCookie => { // not mandatory to get cookies if you are logged in, sent automatically https://docs.cypress.io/api/commands/request#Cookies
      cy.request({
        url: `/api/cars/${createdCarId}`,
        method: 'DELETE',
        // headers: {
        //   cookie: sidCookie,
        // }
      }).then(resp => {
        expect(resp.body.data.carId).to.equal(createdCarId)
      })
    })
    // })
  })

  it('Login and modify getCars request headers to invalidate call', function () {
    cy.intercept('POST', '/api/auth/signin').as('signInRequest');
    landingPage.executeLogin(Cypress.env('defaultUserEmail'), Cypress.env('defaultUserPassword'))
    cy.wait('@signInRequest').then(interceptedRequest => {
      cy.wrap(interceptedRequest.response.headers['set-cookie'][0]).as('sidCookie');
    });
    cy.intercept('POST', '/api/cars').as('createCarResponse');
    garagePage.createCar({
      carBrand: 'BMW',
      carModel: 'X5',
      mileage: 14500
    });
    cy.wait('@createCarResponse').then(resp => {
      cy.wrap(resp.response.body.data.id).as('createdCarId');
    })
    garagePage.selectors.genricCarElement().eq(0)
      .should('contain.text', 'BMW')
      .should('contain.text', 'X5')
  })

  it('Login via API and proceed from there', function () {
    cy.request({
      method: 'POST',
      url: '/api/auth/signin',
      body: {
        email: Cypress.env('defaultUserEmail'),
        password: Cypress.env('defaultUserPassword'),
        remember: false
      }
    }).then(resp => {
      console.log(resp.headers['set-cookie'][0]);
      console.log(resp.headers['set-cookie'][0].split('=')[1].split(';').shift());
      cy.setCookie('sid', resp.headers['set-cookie'][0].split('=')[1].split(';').shift())
    })
    cy.wait(1000)
    cy.visit(garagePage.pageUrl);
    cy.intercept('POST', '/api/cars').as('createCarResponse');
    garagePage.createCar({
      carBrand: 'BMW',
      carModel: 'X5',
      mileage: 14500
    });
    cy.wait('@createCarResponse').then(resp => {
      cy.wrap(resp.response.body.data.id).as('createdCarId');
    })
    garagePage.selectors.genricCarElement().eq(0)
      .should('contain.text', 'BMW')
      .should('contain.text', 'X5')
  })


  it('Login via API NPM package and proceed from there', function () {
    cy.api({
      method: 'POST',
      url: '/api/auth/signin',
      body: {
        email: Cypress.env('defaultUserEmail'),
        password: Cypress.env('defaultUserPassword'),
        remember: false
      }
    }).then(resp => {
      console.log(resp.headers['set-cookie'][0]);
      console.log(resp.headers['set-cookie'][0].split('=')[1].split(';').shift());
      cy.setCookie('sid', resp.headers['set-cookie'][0].split('=')[1].split(';').shift())
      expect(resp.headers['set-cookie'][0].split('=')[1].split(';').shift()).to.not.be.undefined
    })

    cy.visit(garagePage.pageUrl);
    cy.intercept('POST', '/api/cars').as('createCarResponse');
    garagePage.createCar({
      carBrand: 'BMW',
      carModel: 'X5',
      mileage: 14500
    });
    cy.wait('@createCarResponse').then(resp => {
      cy.wrap(resp.response.body.data.id).as('createdCarId');
    })
    garagePage.selectors.genricCarElement().eq(0)
      .should('contain.text', 'BMW')
      .should('contain.text', 'X5')
  })
})

