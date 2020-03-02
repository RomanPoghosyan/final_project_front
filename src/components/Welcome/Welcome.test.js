import React from "react";
import renderer from "react-test-renderer";
import Welcome from "./Welcome";
import createShallow from "@material-ui/core/test-utils/createShallow";
import {unwrap} from "@material-ui/core/test-utils";
import shallow from "enzyme/src/shallow";


const WelcomeNaked = unwrap(Welcome)
test("sfadsfasd", () => {
    let component = shallow(<WelcomeNaked/>).toJSON();
    expect(component).toMatchSnapshot();
});