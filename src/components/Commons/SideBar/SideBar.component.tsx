//import './SideBar.component.scss'
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export const SideBar = () => {
    return (
        <div className="sidebar">
            <h1>Sidebar</h1>
            <ul>
                {/*<CustomLink to ="/">home</CustomLink>
                <CustomLink to ="/clients-list">Lista de clientes</CustomLink>
                <CustomLink to ="/autorizations">Autorizaciones</CustomLink>
                <CustomLink to ="/irregular-report">Reporte de Irregularidades</CustomLink>
                <CustomLink to ="/employees-list">Lista de Empleados</CustomLink>*/}
            </ul>
        </div>
    )
}

/*function CustomLink({ to, children, ...props}:any){
    console.log(to + " | " + children  )
    //const resolvedPath = useResolvedPath(to)
    //const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return (
        <li>
            <Link to={to} {...props}> {children} </Link>
        </li>
    )
}*/