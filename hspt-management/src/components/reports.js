import React from 'react'
import Table from './table'

export const Button = (props) => {
    return(
      <button onClick={ props.handleClick }>
        <svg fill="none" 
             viewBox="0 0 24 24" 
             stroke="#0f2c69" 
             strokeWidth={2} 
             width="20"
        >
          <path strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" 
          />
        </svg>
      </button>
    )
}

const handleClick = (data) => () => {
  console.log("Button Clicked",data)
}
const getContent = (rawData) => 
        rawData.map(item => (
          {...item, edit: <Button handleClick={handleClick(item)}/>}
        ))
      
const Reports = () => {
    const [appointmentList] = React.useState({
        headingLabel:[
            { label:'Token', keyValue:'token' },
            { label:'Visit Date', keyValue:'visit_date' },
            { label:'Specialist', keyValue:'specialist' },
            { label:'Speciality', keyValue:'speciality' },
            { label:'Reports', keyValue:'reports' },
            { label:'Edit', keyValue:'edit' }
    ],
        patientAppointmentsList:[
          {
            token:'23011',
            visit_date:'22-01-2021',
            specialist:'Dr.Andrew',
            speciality:'Cardiology',
            reports:'Reports',
          },
          {
            token:'23012',
            visit_date:'23-05-2022',
            specialist:'Dr.Pete',
            speciality:'Nuerology',
            reports:'Reports',
          },
          {
            token:'23013',
            visit_date:'25-05-2022',
            specialist:'Dr.Samuel',
            speciality:'Surgery',
            reports:'Reports',
          },
          {
            token:'23014',
            visit_date:'28-05-2022',
            specialist:'Dr.Andrew',
            speciality:'Cardiology',
            reports:'Reports',
          },{
            token:'23015',
            visit_date:'30-05-2022',
            specialist:'Dr.Issac',
            speciality:'ENT',
            reports:'Reports',
          }
        ]
    })
  return (
    <div>
        <Table 
                label="Patient's Appointment Record" 
                head={appointmentList.headingLabel} 
                data={getContent(appointmentList.patientAppointmentsList)}
        />
    </div>
  )
}

export default Reports