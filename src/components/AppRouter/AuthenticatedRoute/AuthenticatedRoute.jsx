import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../../contexts/AuthContext';


const AuthenticatedRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

AuthenticatedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthenticatedRoute;


