module.exports = (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Fact Hub API is running',
    environment: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
};
