

/**
 * Error component renders error messages
 *
 * Props: error: [error msg...]
 * State: none
 *
 * App-> RoutesList -> {SignupForm, LoginForm} -> Error
 */

function Error({ error }) {
    return (
        <div className="Error">
            <div className="alert alert-danger" roll="alert" >
                <p className="mb-0 small">{error}</p>
            </div>
        </div>
    );
}

export default Error;