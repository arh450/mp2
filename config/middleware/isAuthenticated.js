const authMiddleware = (req, res, next) => {
    
    if (req.isAuthenticated()) {
      return next();
    }
  
  };
  
  module.exports = authMiddleware;