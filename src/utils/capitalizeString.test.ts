import { capitalizeString } from "./capitalizeString";

describe('capitalizeString', () => {
  it('should capitalize each word in the string', () => {
    const input = 'luke skywalker';
    const expectedOutput = 'Luke Skywalker';

    expect(capitalizeString(input)).toBe(expectedOutput);
  });
});
