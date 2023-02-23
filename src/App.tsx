import { HomePage } from './pages/home/Home.page'
import { EmployeesListPage } from './pages/employees-list/Employees-List.page'
import { Nav } from './components/Commons/Nav/Nav.component'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { SideBar } from './components/Commons/SideBar/SideBar.component'

function App() {
  return (
    <div>
      <EmployeesListPage />
    </div>
  )
}

export default App
