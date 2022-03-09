import{verifyPass} from './verifier'

describe('password', ()=>{
    it('is 8 character it fails', () =>{
        const result = verifyPass('Ab345678')
        expect(result).toBe(false)
    })
    it('is 9 character it passes', () =>{
        const result = verifyPass('Ab3456789')
        expect(result).toBe(true)
    })
})
it('is null, it fails', () => {
    const result = verifyPass(null)
    expect(result).toBe(false)
})

it('is has no lower characters, it fails', () => {
    const result = verifyPass('AB3456789');
    expect(result).toBe(false)
})