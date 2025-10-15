import React, { useState } from 'react';
import PatientList from '../components/patients/PatientList';
import PatientForm from '../components/patients/PatientForm';

const PatientsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);

  const handleAddPatient = () => {
    setEditingPatient(null);
    setShowForm(true);
  };

  const handleEditPatient = (patient) => {
    setEditingPatient(patient);
    setShowForm(true);
  };

  const handleSavePatient = (patientData) => {
    console.log('Saving patient:', patientData);
    setShowForm(false);
    setEditingPatient(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingPatient(null);
  };

  if (showForm) {
    return (
      <PatientForm
        patient={editingPatient}
        onSave={handleSavePatient}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <PatientList
      onAddPatient={handleAddPatient}
      onEditPatient={handleEditPatient}
    />
  );
};

export default PatientsPage;