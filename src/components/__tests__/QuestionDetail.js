import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe(`The Question Detail Component`, () => {
  describe(`The Container Element`, () => {
    describe(`mapsStateToProps`, () => {
      it("should map the state to props correctly", () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Space is big"
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);
        console.log(componentState);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });

  describe("The display emlement", () => {
    it(`Should not regress`, () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="The meaning of Life"
          body="42"
          answer_count={0}
          tags={[`philosophy`]}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
