const mongoose = require("mongoose");

// MongoDB connection URL
const mongo_url = "mongodb://127.0.0.1:27017/nie_trainer_node_db?directConnection=true&serverSelectionTimeoutMS=2000";

// Connect to MongoDB
const connectToMongo = async () => {
  mongoose.Promise = global.Promise;

  try {
    await mongoose.connect(mongo_url);
    console.log("Connected to database");
    
    // Doctor schema definition
    const doctorSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      specialization: {
        type: String,
        required: true
      },
      experience: {
        type: Number,  // years of experience
        required: true
      },
      contact: {
        type: String
      }
    });

    // Create a model based on the schema
    const Doctor = mongoose.model('Doctor', doctorSchema);

    // Insert 5 doctor records with Indian data
    const doctors = [
      { name: "Dr. Rajesh Kumar", specialization: "Cardiologist", experience: 10, contact: "9876543210" },
      { name: "Dr. Priya Sharma", specialization: "Dermatologist", experience: 8, contact: "9955443322" },
      { name: "Dr. Vikram Singh", specialization: "Orthopedic", experience: 15, contact: "9444556677" },
      { name: "Dr. Anjali Verma", specialization: "Pediatrician", experience: 12, contact: "9034321098" },
      { name: "Dr. Aishwarya Reddy", specialization: "Neurologist", experience: 6, contact: "9999888777" }
    ];

    // Insert data
    await Doctor.create(doctors);
    console.log("5 doctor records inserted successfully");

  } catch (error) {
    console.log("Cannot connect to database", error);
    process.exit();
  }
};

connectToMongo();