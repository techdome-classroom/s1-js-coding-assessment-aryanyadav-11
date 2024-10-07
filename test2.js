const assert = require("assert");
const decodeTheRing = require("./program2");

describe("Test cases for decodeTheRing function", function () {
  it(`should return true for strings "hello" and "h*llo"`, function () {
    const result = decodeTheRing("hello", "h*llo");
    assert.strictEqual(result, true);
  });

  it(`should return false for strings "secret" and "sec?"`, function () {
    const result = decodeTheRing("secret", "sec?");
    assert.strictEqual(result, false);
  });

  it(`should return false for strings "codeword" and "c*de"`, function () {
    const result = decodeTheRing("codeword", "c*de");
    assert.strictEqual(result, false);
  });
});

