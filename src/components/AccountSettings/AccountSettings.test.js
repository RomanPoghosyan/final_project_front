import React from "react";
import AccountSettings from "./AccountSettings";
import renderer from 'react-test-renderer';
import withAuthRedirect from "../../hoc/withAuthRedirect";

describe('AccountSettings component', () => {
    it('Test - should return null', () => {
        const NewComponent = withAuthRedirect(AccountSettings);
        const tree = renderer.create(<NewComponent/>).toJSON();
        expect(tree).toBe(null);
    });
});