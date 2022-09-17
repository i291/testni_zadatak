import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"
import UserRoute from "./routes/UserRoute.js";
import SequalizeStore from "connect-session-sequelize"
import AuthRoute from "./routes/AuthRoute.js"
import ProjectRoute from "./routes/ProjectRoute.js"
dotenv.config();
const app=express();
// (async()=>{
//     db.sync();

// })();
const sessionStore=SequalizeStore(session.Store);
const store=new sessionStore({
    db:db
})

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000',

}));
app.use(session({
    secret:process.env.SESS_SECRET,
    resave:false,
    saveUninitialized: true,
    store:store,
    cookie:{
        secure:'auto'
    }
}))
app.use(express.json());
app.use(UserRoute)
app.use(ProjectRoute)
app.use(AuthRoute);
// store.sync();
app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running")
});