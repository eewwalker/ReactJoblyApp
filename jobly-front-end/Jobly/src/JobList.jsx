import { useEffect, useState } from "react";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import SearchInput from './SearchInput';

/**JobList: Renders jobs
 *
 * Props: none
 *
 * State:
 * -jobs: []
 * -serachInput: "Search Query"
 *
 * App => RoutesList => JobList => JobCardList => Jobs
 */

function JobList() {
    const [jobs, setJobs] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    useEffect(function fetchJobsFromDB() {
        setJobs(null);
        async function fetchJobs() {
            const resp = await JoblyApi.getJobs(searchInput);
            setJobs(resp);
        }
        fetchJobs();

    }, [searchInput]);

    /** sets SearchInput state to data from child component */
    function handleJobSearch(searchQuery) {
        setSearchInput(searchQuery);
    }

    const title = searchInput.length !== 0 ? `Search Results for "${searchInput}"` : `All Jobs`;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            {!jobs ? <div>Loading...</div> :
                <div>
                    <SearchInput handleSubmit={handleJobSearch} />
                    <h1 className="CompanyList-title text-center">{title}</h1>
                    {jobs.length
                        ?
                        <JobCardList jobs={jobs} />
                        :
                        <p className="text-center">Sorry No Results Were Found</p>}
                </div>
            }
        </div>
    );

}

export default JobList;