import { useState, useEffect } from 'react'

export const useAR = () => {
  const [isARSupported, setIsARSupported] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [supportedTypes, setSupportedTypes] = useState([])

  useEffect(() => {
    const checkARSupport = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Check for WebXR support
        if (navigator.xr) {
          // Check for immersive-ar support
          const arSupported = await navigator.xr.isSessionSupported('immersive-ar')
          setIsARSupported(arSupported)
          
          // Check for other XR session types
          const sessionTypes = []
          if (arSupported) sessionTypes.push('immersive-ar')
          
          if (await navigator.xr.isSessionSupported('immersive-vr')) {
            sessionTypes.push('immersive-vr')
          }
          
          if (await navigator.xr.isSessionSupported('inline')) {
            sessionTypes.push('inline')
          }
          
          setSupportedTypes(sessionTypes)
        } else {
          // Fallback for browsers without WebXR but with AR.js
          const hasGetUserMedia = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
          const hasCanvas = !!window.HTMLCanvasElement
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
          
          // Basic AR.js support check
          const basicARSupport = hasGetUserMedia && hasCanvas
          setIsARSupported(basicARSupport)
          
          if (basicARSupport) {
            setSupportedTypes(isMobile ? ['marker-based'] : ['marker-based', 'location-based'])
          }
        }

      } catch (err) {
        console.error('AR support check failed:', err)
        setError(err.message)
        setIsARSupported(false)
      } finally {
        setIsLoading(false)
      }
    }

    // Add a small delay to ensure all resources are loaded
    const timer = setTimeout(() => {
      checkARSupport()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Function to request AR session
  const requestARSession = async () => {
    if (!isARSupported) {
      throw new Error('AR is not supported on this device')
    }

    try {
      if (navigator.xr) {
        const session = await navigator.xr.requestSession('immersive-ar', {
          requiredFeatures: ['hit-test', 'dom-overlay'],
          optionalFeatures: ['light-estimation']
        })
        return session
      }
      // For non-WebXR AR (AR.js), we don't need to request a session
      return null
    } catch (err) {
      setError(`Failed to start AR session: ${err.message}`)
      throw err
    }
  }

  // Function to check camera permissions
  const checkCameraPermissions = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        // Stop the stream immediately since we just wanted to check permissions
        stream.getTracks().forEach(track => track.stop())
        return true
      }
      return false
    } catch (err) {
      console.error('Camera permission denied:', err)
      return false
    }
  }

  // Function to get device capabilities
  const getDeviceCapabilities = () => {
    return {
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent),
      isAndroid: /Android/i.test(navigator.userAgent),
      hasGyroscope: 'DeviceOrientationEvent' in window,
      hasAccelerometer: 'DeviceMotionEvent' in window,
      userAgent: navigator.userAgent
    }
  }

  return {
    // State
    isARSupported,
    isLoading,
    error,
    supportedTypes,
    
    // Methods
    requestARSession,
    checkCameraPermissions,
    getDeviceCapabilities,
    
    // Utility getters
    canUseImmersiveAR: supportedTypes.includes('immersive-ar'),
    canUseMarkerAR: supportedTypes.includes('marker-based'),
    canUseLocationAR: supportedTypes.includes('location-based')
  }
}