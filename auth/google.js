var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: "",
    clientSecret: "",
    callbackURL: "http://127.0.0.1:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

module.exports = passport;
