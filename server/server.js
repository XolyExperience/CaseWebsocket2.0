require("dotenv").config();
const cors = require("cors"); // Remove after devolpment, not used in deployed code
import { express } from "express";
const app = express();

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));
app.use(cors()); // Remove after devolpment, not used in deployed code

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
