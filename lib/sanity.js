import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'lpt4hhb6',
  dataset: 'production',
  apiVersion: '2021-00-20', // use current UTC date - see "specifying API version"!
  token:
    'sk7DnzeT3QgL7OXuT3qPrM4DoZHfVqD8qVMbdIkWOWORyp6GRKoXY5C1ZLgHCRzv3UcPrKIRX7vapTzpdHc4f6p66FAxprlDvsIWX4B6Svikso1kc6UAQYlBwmfRLwhOSKDPjWXNwQ3V1ctqW7yxzeOqF0zv16hAVyyKmwOzgYqN18Y3xGxi', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})
