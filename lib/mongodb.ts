// Import the Mongoose library, which helps us interact with MongoDB in a structured way
import mongoose, { Mongoose } from 'mongoose';

// Declare a global variable to cache the database connection
// This prevents creating multiple connections during development or hot reloads
declare global {
  var mongoose: {
    conn: Mongoose | null; // The actual database connection object
    promise: Promise<Mongoose> | null; // A promise that resolves to the connection
  };
}

// Get the MongoDB connection URL from environment variables
// The '!' tells TypeScript that we're sure this variable exists (we check below)
const MONGODB_URI: string = process.env.MONGODB_URL!;

// Check if the MongoDB URI is provided; if not, throw an error
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Initialize the cached connection object from the global variable
// If it doesn't exist, create a new one with null values
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Function to connect to the database
// This function ensures we only connect once and reuse the connection
async function dbConnect(): Promise<Mongoose> {
  // If we already have a connection, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If there's no ongoing connection promise, create one
  if (!cached.promise) {
    // Options for the connection (these help with performance in serverless environments)
    const opts = {
      bufferCommands: false, // Disable mongoose buffering
    };

    // Start the connection and store the promise
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  // Wait for the connection to complete
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    // If connection fails, reset the promise so we can try again
    cached.promise = null;
    throw e; // Re-throw the error so the caller knows it failed
  }

  // Return the successful connection
  return cached.conn;
}

// Export the connection function so it can be used in other parts of the app
export default dbConnect;