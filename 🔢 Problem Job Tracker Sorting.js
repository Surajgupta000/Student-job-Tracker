// 🔢 Problem: Job Tracker Sorting (Latest First)
// Author: Suraj
// Description: Sort job applications by their appliedDate so the latest applied job appears first.

const jobApplications = [
  { company: "Google", role: "SDE Intern", appliedDate: "2025-04-01" },
  { company: "Amazon", role: "Backend Intern", appliedDate: "2025-03-25" },
  { company: "Microsoft", role: "Frontend Intern", appliedDate: "2025-04-05" },
  { company: "Adobe", role: "UI/UX Intern", appliedDate: "2025-03-30" }
];

function sortByAppliedDate(jobs) {
  return jobs.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
}

const sortedJobs = sortByAppliedDate(jobApplications);

console.log("Sorted Job Applications (Latest First):");
console.log(sortedJobs);
