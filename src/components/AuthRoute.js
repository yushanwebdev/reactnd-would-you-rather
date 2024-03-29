import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = props => {
    const { authUser, location } = props;

    if(!authUser) {
        return <Redirect to={{
            pathname: "/",
            state: { prevLoc: location.pathname }
        }} />
    }

    return <Route {...props} />;
};

function mapStateToProps({ authUser }) {
    return {
        authUser
    }
}

export default connect(mapStateToProps)(AuthRoute);