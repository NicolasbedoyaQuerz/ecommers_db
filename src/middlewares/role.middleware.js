const hasRole = (...roles) => {


    return (req, res, next) => {
        const { role } = req.user;
        if(!roles.includes(role)) {
            next({ 
                status: 401,
                errorName: "Role Required",
                error: "User have not required role"
            })
        }
    }
}

module.exports = hasRole;