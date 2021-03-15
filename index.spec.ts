import { hexToU8a, u8aToHex } from '@polkadot/util';

describe('ts-jest', () => {
  it('works', () => {
    const TEST = '0x12345678';

    expect(
      u8aToHex(hexToU8a(TEST))
    ).toEqual(TEST);
  });
});
