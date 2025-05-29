async function analyzeHygieneData() {
  let response = await fetch(
    "https://ratings.food.gov.uk/api/open-data-files/FHRS529en-GB.json"
  );
  let data = await response.json();
  const business = data.FHRSEstablishment.EstablishmentCollection;
  const totalBusiness = business.length;
  console.log(business);
  const RequiredData = {};
  const requiredRating = business.filter((b) => !isNaN(b.RatingValue));
  const totalData = requiredRating.length;
  requiredRatings = parseFloat(
    requiredRating.reduce((acc, curr) => acc + parseInt(curr.RatingValue), 0) /
      totalData
  ).toFixed(4);

  const ratingDistribution = {};
  business.forEach((est) => {
    const rating = est.RatingValue;
    ratingDistribution[rating] = (ratingDistribution[rating] || 0) + 1;
  });

  const businessCountType = business.reduce((acc, curr) => {
    const type = curr.BusinessType;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  const businessTypeSelect = Object.entries(businessCountType)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([type, count]) => ({ type: type, count: count }));
  // console.log(businessTypeSelect
  const topRatedBusinesses = business
    .filter((est) => est.RatingDate && est.RatingValue == 5)
    .sort(
      (a, b) =>
        new Date(b.RatingDate).getTime() - new Date(a.RatingDate).getTime()
    )
    .slice(0, 10)
    .map((est) => ({
      name: est.BusinessName,
      address: `${est.AddressLine1}, ${est.AddressLine2}${
        est.AddressLine3
          ? est.AddressLine4
            ? `, ${est.AddressLine3}, ${est.AddressLine4} `
            : `, ${est.AddressLine3}`
          : ""
      }`,
      rating: est.RatingValue,
      ratingDate: est.RatingDate,
      authority: est.LocalAuthorityName,
    }));

  RequiredData.totalBusiness = totalBusiness;
  RequiredData.averageRating = requiredRatings;
  RequiredData.ratingDistribution = ratingDistribution;
  RequiredData.topBusinessType = businessTypeSelect;
  RequiredData.topRatedBusinesses=topRatedBusinesses;

  console.log(RequiredData);
}
analyzeHygieneData();
