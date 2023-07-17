import { classNames } from './classNames'

describe('classNames', () => {
    test('only first arg passed', () => {
        expect(classNames('testClass')).toBe('testClass')
    })

    test('additional args passed', () => {
        expect(classNames('testClass', {}, ['class1', 'class2'])).toBe('testClass class1 class2')
    })

    test('mods and additional args passed', () => {
        const mainClass = 'testClass'; const mods = { hovered: true, none: false }
        const additionalClasses = ['class2', 'class1']
        const expectedClasses = [mainClass, ...Object.entries(mods)
            .filter(([_, val]) => Boolean(val)).map(([cls]) => cls), ...additionalClasses]

        expect(classNames(mainClass, mods, additionalClasses).split(' ')).toEqual(expectedClasses)
    })
})
