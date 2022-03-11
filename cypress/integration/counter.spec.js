let INIT_VALUE = 10;
const MAX_VALUE = 12;
const MIN_VALUE = 8;

describe('ui-counter', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.count-display').as('countValue');
  });

  it('1. 생성시 버튼과 초기값(10)을 렌더링 한다', () => {
    cy.get('.count-display').should('have.value', INIT_VALUE);
  });

  it('2. + 버튼 클릭시 1 증가한다.', () => {
    cy.get('.plus-button').click();
    cy.get('.count-display').should('have.value', INIT_VALUE + 1);
  });

  it('3. - 버튼 클릭시 1 감소한다.', () => {
    cy.get('.minus-button').click();
    cy.get('.count-display')
      .should('have.value', INIT_VALUE - 1)
      .and('be.disabled');
  });

  it('4. + 버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다. (Max 값이 12)', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('.plus-button').click();
    }
    cy.get('@countValue').should('have.value', MAX_VALUE);
  });

  it('5. 버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다. (Min 값이 8)', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('.minus-button').click();
    }
    cy.get('@countValue').should('have.value', MIN_VALUE).and('be.disabled');
  });
});
