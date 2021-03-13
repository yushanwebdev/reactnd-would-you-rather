import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = props => {
    const { authUser } = props;
    
    if(!authUser) {
        return <Redirect to="/" />
    }

    return <Route {...props} />;
};

const mapStateToProps = ({ authUser }) => ({
    authUser
});

export default connect(mapStateToProps)(AuthRoute);