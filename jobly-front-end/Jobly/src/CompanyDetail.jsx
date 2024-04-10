import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
/**
 * CompanyDetail component renders info about Company
 *
 * Props: none
 * State: none
 *
 * App-> RoutesList -> CompanyDetail
 */

function CompanyDetail() {
    const [companyData, setCompanyData] = useState('');
    const [jobs, setJobs] = useState([]);
    const companyHandle = useParams();

    useEffect(function fetchCompany() {
        async function fetchCompanyData() {
            const resp = await JoblyApi.getCompany(companyHandle.name);
            setCompanyData(resp);
            setJobs(resp.jobs);
        }
        fetchCompanyData();
    }, []);

    return (
        <div className="CompanyDetail col-md-8 offset-md-2">
            <h4>{companyData.name}</h4>
            <p>{companyData.description}</p>
            <JobCardList jobs={jobs} />
        </div>
    );
}

export default CompanyDetail;