import About from '../../pages/about';
import { mount } from 'cypress/react18';

describe('About.cy.tsx', () => {
  it('playground', () => {
    mount(<About/>)
    cy.get(["data-cy"=""])
  })
})