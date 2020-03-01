import renderer from 'react-test-renderer';
import React from "react";
import Welcome from "./Welcome";

describe("welcome", () => {
    test("Test - snapshot testing Welcome", () => {
        const component = renderer.create(<Welcome/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});