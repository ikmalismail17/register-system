const dashboardView = (req, res) => {
  res.render("dashboard", {
    user: req.user,
  });
};

const adminDashboard = (req, res) => {
  res.render("admindashboard", {
    admin: req.admin,
  });
};

module.exports = {
  dashboardView,
  adminDashboard,
};
