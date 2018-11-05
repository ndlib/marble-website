/*
  This file provides some basic options to customize the display of the site.
  Further customization of colors, fonts, and other css styles can be done in
  src/Configurations/theme.css
*/
import institutionLogoImage from 'Configurations/Logos/dept-nd-white@2x.png'
import siteLogoImage from 'Configurations/Logos/default_site_logo.png'

// Logos
export const INSTITUTION_LOGO = institutionLogoImage
export const INSTITUTION_LOGO_ALT_TEXT = 'University of Notre Dame'
export const INSTITUTION_LOGO_WIDTH = 'auto'
export const INSTITUTION_LOGO_HEIGHT = '50px'

// If switching logo to a new image don't forget to modify the
// dimensions for --site-logo-width and --site-logo-height in
// customizations.css
export const SITE_LOGO = siteLogoImage
export const SITE_LOGO_ALT_TEXT = 'Digital Repository Collection'

// Links
export const INSTITUTION_HOME_PAGE = 'https://nd.edu'
