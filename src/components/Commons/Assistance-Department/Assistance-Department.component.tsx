//Components


//Styles
import "./Assistance-Department.component.scss";

export const AssistanceDepartment = () => {
  return (
    <div className="assistance-department-container">
      <div className="assistance-department-title">
        <span>ASISTENCIA POR DEPARTAMENTO</span>
      </div>
      <div>
        <span className="assistance-department-presents-now">34</span>
        <span className="assistance-department-line-1"></span>
        <span className="assistance-department-presents-original">36</span>
        <span className="assistance-department-subtitle-presentes">Presentes</span>
        <span className="assistance-department-line-2"></span>
      </div>

      <div className="assistance-department-frame-1">
        <div className="assistance-department-dep-ironing">
          <span className="assistance-department-dep-ironing-quantity">8</span>
          <span className="assistance-department-dep-ironing-title">Dep. Planchado</span>
        </div>
        <div className="assistance-department-dep-packed">
          <span className="assistance-department-dep-packed-quantity">9</span>          
          <span className="assistance-department-dep-packed-title">Dep. Empacado</span>
        </div>
        <div className="assistance-department-dep-washed">
          <span className="assistance-department-dep-washed-quantity">5</span>
          <span className="assistance-department-dep-washed-title">Dep. Lavado</span>
        </div>
      </div>
      
    </div>
  )
}