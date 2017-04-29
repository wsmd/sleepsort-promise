import sort from '../src/sort';

jest.useFakeTimers();

describe('sort', () => {
  it('resolves immediately for one or zero items', () => {
    const callback = jest.fn();

    sort([1], callback);
    expect(callback).toHaveBeenCalledWith([1]);

    sort([], callback);
    expect(callback).toHaveBeenCalledWith([]);

    expect(setTimeout.mock.calls.length).toBe(0);
  })
})