;(function() {
    var finalDate = [12, 12, 2014];

    var diningDollars;
    var swipes;
    var pantherFunds;

    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    switch (month) {
      case 8:
        daysleft = (31-day) + 30 + 31 + 30 + 12;
        break;

      case 9:
        daysleft = (30-day) + 31 + 30 + 12;
        break;

      case 10:
        daysleft = (31-day) + 30 + 12;
        break;

      case 11:
        daysleft = (30-day) + 12;
        break;

      case 12:
        daysleft = (12-day);
        break;

      default:
        daysleft = 0;
    }

    var weeklyDiningDollars = diningDollars/(daysLeft/7);
    var weeklySwipes = swipes/(daysLeft/7);
    var weeklypPantherFunds = pantherFunds/(daysLeft/7);

    var dailyDiningDollars = diningDollars/(daysLeft);
    var dailySwipes = swipes/(daysLeft);
    var dailyPantherFunds = pantherFunds/(daysLeft);
})();
