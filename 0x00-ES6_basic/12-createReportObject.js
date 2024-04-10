export default function createReportObject(employeesList) {

    const report = {
        allEmployees: { ...employeesList },
        getNumberOfDepartments(all) {
            return Object.keys(all).length;
        }
    }
    return report;
}
