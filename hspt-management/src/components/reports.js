import React from 'react'
import Table from './table'

export const Button = () => {
    return(
      <button>Edit</button>
    )
}

const Reports = () => {
    const [appointmentList] = React.useState({
        headingLabel:[
            { label:'Token', keyValue:'token' },
            { label:'Visit Date', keyValue:'visit_date' },
            { label:'Specialist', keyValue:'specialist' },
            { label:'Speciality', keyValue:'speciality' },
            { label:'Reports', keyValue:'reports' },
            { label:'Edit'}
    ],
        // , 'Specialist', 'Speciality', 'Reports'],
        patientAppointmentsList:[
          {
            token:'23011',
            visit_date:'22-01-2021',
            specialist:'Dr.Andrew',
            speciality:'Cardiology',
            reports:'Reports'
          },
          {
            token:'23012',
            visit_date:'23-05-2022',
            specialist:'Dr.Pete',
            speciality:'Nuerology',
            reports:'Reports'
          },
          {
            token:'23013',
            visit_date:'25-05-2022',
            specialist:'Dr.Samuel',
            speciality:'Surgery',
            reports:'Reports'
          },
          {
            token:'23014',
            visit_date:'28-05-2022',
            specialist:'Dr.Andrew',
            speciality:'Cardiology',
            reports:'Reports'
          },{
            token:'23015',
            visit_date:'30-05-2022',
            specialist:'Dr.Issac',
            speciality:'ENT',
            reports:'Reports'
          }
        ]
    })
  return (
    <div>
        <Table 
                label="Patient's Appointment Record" 
                head={appointmentList.headingLabel} 
                data={appointmentList.patientAppointmentsList}
        />
    </div>
  )
}

export default Reports