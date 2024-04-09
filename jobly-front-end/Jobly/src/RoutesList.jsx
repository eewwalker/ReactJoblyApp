import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CompanyList from './CompanyList';
import JobList from './JobList';
import CompanyDetail from './CompanyDetail';
import NotFound from './NotFound';


function RoutesList() {


    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/companies' element={<CompanyList />} />
            <Route path='/jobs' element={<JobList />} />
            <Route path='/company/:name' element={<CompanyDetail />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default RoutesList;