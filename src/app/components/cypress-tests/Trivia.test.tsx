import * as React from 'react'
import { mount, unmount } from '@cypress/react'
import App from '../../../App'
import Trivia from '../Trivia'

describe('Trivia', ()=>{
  beforeEach(()=>{
    mount(<App/>)
  })

  it('shows loader when loadingFact is pending or idle', () => {
    mount(<Trivia loadingFact='pending' triviaFact={undefined} />)
    cy.get('.dot-pulse')
    unmount().should('exist')
    mount(<Trivia loadingFact='idle' triviaFact={undefined} />)
    cy.get('.dot-pulse').should('exist')
    unmount()
    mount(<Trivia loadingFact='succeeded' triviaFact={undefined} />)
    cy.get('.dot-pulse').should('not.exist')
    unmount()
    mount(<Trivia loadingFact='rejected' triviaFact={undefined} />)
    cy.get('.dot-pulse').should('not.exist')
    unmount()
  })

  it('shows a fact when loadingFact',()=>{
    mount(<Trivia loadingFact='succeeded' triviaFact={'This is a test.'} />)
    cy.get('p').contains('test')
  })
})