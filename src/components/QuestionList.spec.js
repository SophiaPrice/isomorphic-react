describe("The question list", () => {
  beforeEach(() => {
    console.log("Before each...");
  });

  beforeAll(() => {
    console.log("Before all..;");
  });

  afterEach(() => {
    console.log("After each...");
  });

  afterAll(() => {
    console.log("After all..");
  });

  it.only("Should display a list of items", () => {
    expect(40 + 2).toEqual(42);
  });

  it("Should not display a single item", () => {
    expect(2 + 2).toEqual(4);
  });

  it.skip("Should not display single items", () => {
    expect(2 + 3).toEqual(4);
  });
});
