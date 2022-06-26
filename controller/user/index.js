import Router from "express";
import { catchAsyncAction } from "../../helpers";
import { User } from "../../models";
const router = Router();
// import User from '../../models/users';

router.get('/', (req,res) => {

    const data = [
       {
            "name" : "mahesh",
            "password" : "password1",
            "profession" : "teacher",
            "id": 1
         },
         {
            "name" : "suresh",
            "password" : "password2",
            "profession" : "librarian",
            "id": 2
         },
          {
            "name" : "ramesh",
            "password" : "password3",
            "profession" : "clerk",
            "id": 3
         }
    ]
    res.send(data)
})

router.post('/signup', catchAsyncAction(async (req, res) => {
    let data  = req.body;
    console.log("data",data)
    res.send("resolved")
    // User
}));

export const userController = router;