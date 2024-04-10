import { useParams } from "react-router-dom";
import JoblyApi from "./app";
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
    const [companyData, setCompanyData] = useState(null);
    const companyHandle = useParams();

    useEffect(function fetchCompany() {
        async function fetchCompanyData() {
            const resp = await JoblyApi.getCompany(companyHandle.name);
            console.log('resp', resp);
            setCompanyData(resp);
        }
        fetchCompanyData();
    }, []);


    return (
        <div className="CompanyDetail">
            <h1>Company Detail</h1>
            <h1>{companyData.title}</h1>
            <h2>{companyData.description}</h2>
            <JobCardList jobs={companyData.jobs} />
        </div>
    );
}

export default CompanyDetail;