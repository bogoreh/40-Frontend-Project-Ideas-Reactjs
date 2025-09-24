export const calculateBMI = (height, weight, unit = 'metric') => {
  const h = parseFloat(height)
  const w = parseFloat(weight)

  if (unit === 'metric') {
    // BMI = weight(kg) / (height(m) * height(m))
    const heightInMeters = h / 100
    return w / (heightInMeters * heightInMeters)
  } else {
    // BMI = (weight(lbs) / (height(in) * height(in))) * 703
    return (w / (h * h)) * 703
  }
}

export const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight'
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight'
  } else {
    return 'Obesity'
  }
}