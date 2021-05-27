const mainController= {
    home: (req,res)=>{
        res.render("main/home.ejs")
    },
    
    contact: (req,res)=>{
        res.render("main/contact.ejs")
    }
    
}

module.exports = mainController