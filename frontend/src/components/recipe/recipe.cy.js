import Recipe from "./recipe";
import React from "react";


describe("Recipe", () => {
    it("should render correctly", () => {
        const component = shallow(<Recipe />);
        expect(component).toMatchSnapshot();
    });
});