import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import LoginForm from './User/LoginForm';
import NotFound from './NotFound';
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

function RoutesList({ loginUser, signupUser }) {


    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/companies' element={<CompanyList />} />
            <Route path='/jobs' element={<JobList />} />
            <Route path='/companies/:name' element={<CompanyDetail />} />
            <Route path="/login" element={<LoginForm loginUser={loginUser} />} />
            <Route path="/signup" element={<SignupForm signupUser={signupUser} />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;