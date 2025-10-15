export const validateModel = (model) => {
  const errors = []
  
  if (!model.path) {
    errors.push('Model path is required')
  }
  
  if (!model.type) {
    errors.push('Model type is required')
  }
  
  if (!['gltf', 'glb', 'obj'].includes(model.type)) {
    errors.push('Unsupported model type')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export const getModelScale = (modelType, defaultScale = '1 1 1') => {
  const scaleMap = {
    'gltf': '1 1 1',
    'glb': '1 1 1',
    'obj': '0.01 0.01 0.01' // OBJ files often need scaling
  }
  
  return scaleMap[modelType] || defaultScale
}

export const generateMarker = (patternUrl) => {
  // This would generate or load AR markers
  return {
    type: 'pattern',
    url: patternUrl,
    size: 1
  }
}