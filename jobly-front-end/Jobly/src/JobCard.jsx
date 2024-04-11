/**
 * JobCard component renders info about Job
 *
 * Props: jobData
 * State: none
 *
 * App-> RoutesList -> {CompanyDetail, JobList} -> JobCardList -> JobCard
 */

function JobCard({ jobData }) {
    return (
        <div className="JobCard card m-2">
            <div className="card-body">
                <h6 className="card-title">{jobData.title}
                </h6>
                <p>Salary: {jobData.salary}</p>
                <p>Equity: {jobData.equity}</p>
            </div>

        </div>
    );
}

export default JobCard;