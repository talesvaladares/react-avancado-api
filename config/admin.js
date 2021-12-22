module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7d69acd002ebcaf2dacf5050ee22787a'),
  },
});
