"use client"
 
import { useEffect } from 'react'
import { hotjar } from 'react-hotjar'
import ReactGA from 'react-ga4'

function ClientScript() {

  // to initialize hotjar services
  const siteId = 3858905
  const hotjarVersion = 6

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js')
    hotjar.initialize(siteId, hotjarVersion)
    ReactGA.initialize('G-12KJ6CFEJ7')
  }, []);

  return null;
}

export default ClientScript