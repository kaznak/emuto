import binaryOperator from '../binaryOperator'

describe('binaryOperator generator', () => {
  it('generates correct code', () => {
    expect(
      binaryOperator({
        name: 'additive',
        value: [
          {
            name: 'input',
            value: '$'
          },
          { name: 'operand', value: '+' },
          {
            name: 'input',
            value: '$'
          },
          { name: 'operand', value: '-' },
          {
            name: 'input',
            value: '$'
          }
        ]
      })
    ).toEqual('input+input-input')
  })
})