module.exports = {
    name: "Emma's Party Rentals",
    tagline: "Tents, Tables, Chairs & Yard Games for Every Occasion",
    serviceArea: "Serving Leesburg & Frederick and surrounding areas",
    socials: {
        instagram: "https://www.instagram.com/emmas_partyrentals/",
        facebook: "https://www.facebook.com/profile.php?id=61576791475267",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
