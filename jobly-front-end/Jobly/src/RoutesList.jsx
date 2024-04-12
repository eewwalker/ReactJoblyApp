import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "./User/userContext";
import Homepage from "./Homepage";
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import LoginForm from './User/LoginForm';
import SignupForm from "./User/SignupForm";
import ProfileForm from "./User/ProfileForm";

/**
 * RoutesList component stores all routes
 *
 * Props: updateUser(), signupUser()
 * State: none
 *
 * App-> RoutesList -> {Homepage, CompanyList, JobList, CompanyDetail, LoginForm, SignupForm, ProfileForm, NotFound }
 */

function RoutesList({ loginUser, signupUser, updateUser }) {
    const { user } = useContext(userContext);


    return (
        <Routes>
            {user &&
                <Route>
                    < Route path='/' element={< Homepage />} />
                    < Route path='/companies' element={< CompanyList />} />
                    < Route path='/jobs' element={< JobList />} />
                    < Route path='/companies/:name' element={< CompanyDetail />} />
                    < Route path="/profile" element={< ProfileForm updateUser={updateUser} />} />
                    < Route path="/login" element={< LoginForm loginUser={loginUser} />} />
                    < Route path="/signup" element={< SignupForm signupUser={signupUser} />} />
                    < Route path='*' element={<Navigate to='/' />} />
                </Route>
            }
            {
                !user &&
                <Route>

                    <Route path='/' element={<Homepage />} />
                    <Route path="/login" element={<LoginForm loginUser={loginUser} />} />
                    <Route path="/signup" element={<SignupForm signupUser={signupUser} />} />
                    < Route path='*' element={<Navigate to='/' />} />
                </Route>
            }
        </Routes >


    );
}

export default RoutesList;