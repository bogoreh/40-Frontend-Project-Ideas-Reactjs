export const patients = [
  {
    id: 1,
    name: 'John Smith',
    age: 45,
    gender: 'Male',
    contact: '+1-555-0123',
    email: 'john.smith@email.com',
    medicalHistory: 'Hypertension, Diabetes',
    lastVisit: '2024-01-15',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    age: 32,
    gender: 'Female',
    contact: '+1-555-0124',
    email: 'sarah.j@email.com',
    medicalHistory: 'Asthma',
    lastVisit: '2024-01-10',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Michael Brown',
    age: 68,
    gender: 'Male',
    contact: '+1-555-0125',
    email: 'm.brown@email.com',
    medicalHistory: 'Heart Disease, Arthritis',
    lastVisit: '2024-01-08',
    status: 'Active'
  }
];

export const appointments = [
  {
    id: 1,
    patientId: 1,
    patientName: 'John Smith',
    date: '2024-01-20',
    time: '10:00 AM',
    type: 'Consultation',
    status: 'Scheduled',
    doctor: 'Dr. Wilson'
  },
  {
    id: 2,
    patientId: 2,
    patientName: 'Sarah Johnson',
    date: '2024-01-20',
    time: '11:30 AM',
    type: 'Follow-up',
    status: 'Scheduled',
    doctor: 'Dr. Wilson'
  },
  {
    id: 3,
    patientId: 3,
    patientName: 'Michael Brown',
    date: '2024-01-19',
    time: '2:15 PM',
    type: 'Check-up',
    status: 'Completed',
    doctor: 'Dr. Wilson'
  }
];

export const stats = {
  totalPatients: 1247,
  todayAppointments: 8,
  pendingTasks: 12,
  availableStaff: 23
};