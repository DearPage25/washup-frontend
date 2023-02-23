//Components
import { AssistanceDepartment } from "../../components/Commons/Assistance-Department/Assistance-Department.component";
import { EmployeesList } from "../../components/Employees-List/Employees-List.component";


//Styles
import "./Employees-List.page.scss"

export const EmployeesListPage = () => {
  return (
      <>
        <div className="employees-list-page-container">
          <AssistanceDepartment />
          <EmployeesList />
        </div>
      </>
  );
}