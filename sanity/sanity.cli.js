// Import the createClient function from @sanity/client
import {createClient} from '@sanity/client';

// Define your Sanity client configuration
export const client = createClient({
  projectId: '4dksaxwy',
  dataset: 'production',
  apiVersion: '2024-03-23', // Specify the API version you are using
  useCdn: true, // Set to true if you want to use the Content Delivery Network (CDN)
});




