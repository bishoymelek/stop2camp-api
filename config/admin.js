module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b35ec9d0c276518ed16bc8554a2561a'),
  },
});
