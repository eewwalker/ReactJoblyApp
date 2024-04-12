

/**
 * Alert component renders error messages
 *
 * Props: message: [error msg...], type (type of error)
 * State: none
 *
 * App-> RoutesList -> {SignupForm, LoginForm} -> Alert
 */

function Alert({ message, type }) {
    return (
        <div className="Alert">
            <div className={`alert alert-${type}`} roll="alert" >
                <p className="mb-0 small">{message}</p>
            </div>
        </div >
    );
}

export default Alert;