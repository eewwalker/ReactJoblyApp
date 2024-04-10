import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
/**
 * CompanyDetail component renders info about Company
 *
 * Props: none
 *
 * State:
 * -companyData
 * -jobs [list of jobs from company]
 *
 * App-> RoutesList -> CompanyDetail
 */
//implement loading
function CompanyDetail() {
    const [companyData, setCompanyData] = useState('');
    const [jobs, setJobs] = useState([]);
    const companyHandle = useParams();

    useEffect(function fetchCompany() {
        async function fetchCompanyData() {
            try {

                const resp = await JoblyApi.getCompany(companyHandle.name);
                setCompanyData(resp);
                setJobs(resp.jobs);
            } catch (err) {
                console.log(err[0]);
                return (
                    <div><p>No Company Found: {err[0]}</p></div>
                );

            }
        }
        fetchCompanyData();
    }, []);

    //Be explicit in the check to see if you have valid companyData. Catch the error...State for errors?
    return (
        <div className="CompanyDetail col-md-8 offset-md-2">

            <h4>{companyData.name}</h4>
            <p>{companyData.description}</p>
            <JobCardList jobs={jobs} />

        </div>
    );
}

export default CompanyDetail;