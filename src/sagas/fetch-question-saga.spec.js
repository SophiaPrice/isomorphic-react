import { handleFetchQuestion } from "./fetch-question-saga";

describe("Fetch questions saga", () => {
  it("should fetch the questions", async () => {
    const gen = handleFetchQuestion({ quetsion_id: 42 });
    const { value } = await gen.next();
  });
});
