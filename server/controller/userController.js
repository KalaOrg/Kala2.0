const db = require('../model/DB');

const userController = {};

userController.loginUser = async (req, res, next) => {
    try {
        const {login, password} = req.body;
        const query = 'SELECT * FROM users WHERE login = $1 AND password = $2';
        const resultUserData = await db.query(query,[login,password]);
        res.locals.result = {};
        if(resultUserData.rows.length){
            res.locals.result.STATUS = true;
            res.locals.result.user = resultUserData.rows[0];
        }else{
            res.locals.result.STATUS = false;
        }
        return next();
    }
    catch (err) {
        return next({
            log: `userController.loginUser: ERROR: ${err}`,
            message: {
              err: 'userController.loginUser: ERROR: Check server logs for details',
            },
          });
    }
};

userController.getUsers = async (req,res,next) =>{
    try{
        const query = 'SELECT * FROM users';
        const resultData = await db.query(query);
        res.locals.result = {};
        res.locals.result.STATUS = true;
        res.locals.result.userNames = [];
        resultData.rows.map(user=>res.locals.result.userNames.push({username:user.username, login:user.login}));
        next();
    }
    catch(err){
        return next({
            log: `userController.getUsers: ERROR: ${err}`,
            message: {
              err: 'userController.getUsers: ERROR: Check server logs for details',
            },
          });
    }
}

module.exports = userController;