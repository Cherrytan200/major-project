const User=require("../models/user.js");

module.exports.getSignup=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.postSignup=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        const newUser=new User({email,username});
        const registeredUser= await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcome to Wanderlust!");
            res.redirect("/listings");
        })
        
    }catch(e){
        req.flash('error',e.message);
        res.redirect("/signup");
    }
};


module.exports.getLogin=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.postLogin=async(req,res)=>{
    req.flash("success","Welcome to wanderlust you are logged in");
    let redirectUrl=res.locals.redirectUrl||"/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you are logged out!");
        res.redirect("/listings");
    });
};