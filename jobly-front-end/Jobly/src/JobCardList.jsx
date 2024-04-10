import JobCard from "./JobCard";

/**
 * JobCardList component renders info about Jobs
 *
 * Props: jobs: [list of jobs from company]
 * State: none
 *
 * App-> RoutesList -> {CompanyDetail, JobList} -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {

    return (
        <div className="JobCardList">
            {jobs.map(j => <JobCard key={j.id} jobData={j} />)}

        </div>
    );
}


export default JobCardList;