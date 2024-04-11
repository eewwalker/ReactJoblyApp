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

function CompanyDetail() {
    const [companyData, setCompanyData] = useState('');
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);

    const companyHandle = useParams();

    useEffect(function fetchCompany() {
        async function fetchCompanyData() {
            try {
                const resp = await JoblyApi.getCompany(companyHandle.name);
                setCompanyData(resp);
                setJobs(resp.jobs);
            }
            catch (err) {
                setError(err);
            }
        }
        fetchCompanyData();
    }, []);

    return (
        <div className="CompanyDetail col-md-8 offset-md-2">
            {!companyData && <div>Loading...</div>}
            {error ? error.map((e, idx) => <div key={idx}>{e}</div>) :
                <div>
                    <h4>{companyData.name}</h4>
                    <p>{companyData.description}</p>
                    <JobCardList jobs={jobs} />
                </div>
            }
        </div>
    );
}

export default CompanyDetail;