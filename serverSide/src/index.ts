import app from './app';
import connectDB from './db';
import dotenv from 'dotenv';
dotenv.config(
  {
    path: './.env'
  }
);
const PORT = process.env.PORT ;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
