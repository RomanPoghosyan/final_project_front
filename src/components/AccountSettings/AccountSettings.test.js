import React from "react";
import renderer from "react-test-renderer";
import AccountSettings from "./AccountSettings";

test("safasfsa", () => {
    let isAuth = false;
    let component = renderer.create(<AccountSettings isAuth={isAuth}/>).toJSON();
    expect(component).toMatchSnapshot();
});

