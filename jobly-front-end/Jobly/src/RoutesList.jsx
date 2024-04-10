import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import NotFound from './NotFound';

/**
 * RoutesList component stores all routes
 *
 * Props: none
 * State: none
 *
 * App-> RoutesList -> {Homepage, CompanyList, JobList, CompanyDetail, NotFound }
 */

function RoutesList() {


    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/companies' element={<CompanyList />} />
            <Route path='/jobs' element={<JobList />} />
            <Route path='/companies/:name' element={<CompanyDetail />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;