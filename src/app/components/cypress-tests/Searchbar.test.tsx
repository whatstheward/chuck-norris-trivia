import * as React from 'react'
import { mount } from '@cypress/react'
import App from '../../../App'

describe('Searchbar', ()=>{
  beforeEach(()=>{
    mount(<App/>)
  })

  it('can change the value', ()=>{
    cy.get('input').type('roundhouse')
    cy.get('input[value="roundhouse"]')
  })

  it('cannot be submitted without a query string', () => {
    cy.get('button[type=submit]').should('be.disabled')
  })

  it('the query cannot be longer than 10 characters', () => {
    cy.get('input').type('onomatopoeia')
    cy.get('button[type=submit]').should('be.disabled')
    cy.get('.error').should('contain', 'Search parameter cannot exceed 10 characters.')
  })

})