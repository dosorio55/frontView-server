// import 'dotenv/config';

import mongoose from 'mongoose';

const DB_URL = 'mongodb+srv://dosorio55:violoncello7@profile-project.vsvhxvv.mongodb.net/profile?retryWrites=true&w=majority';

const connection = async () => {
    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connection;
        console.log(`Connected with db: ${name}, in host: ${host}`);
    } catch (error) {
        console.log("Error to connect with BD", error);
    }
};

export { DB_URL, connection }