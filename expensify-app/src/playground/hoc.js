// Higher Order Component (HOC) = A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
    <div>
        <h1>info</h1>
        <p>aaaaa: {props.info}</p>
    </div>
);

const withAdminWarning = WrappedComponent => {
    return props => (
        <div>
            {props.isAdmin && <p>this is private info</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = WrappedComponent => {
    return props => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />    
            ) : (
                <p>please log in</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="wwwwwwwww" />, document.getElementById('app'));
ReactDOM.render(
    <AuthInfo isAuthenticated={true} info="aa" />,
    document.getElementById("app")
);
