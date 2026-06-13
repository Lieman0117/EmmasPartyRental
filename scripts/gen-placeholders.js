const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const OUT = path.join(__dirname, "..", "src", "assets", "images");
const PORTFOLIO_OUT = path.join(OUT, "portfolio");

if (!fs.existsSync(PORTFOLIO_OUT)) fs.mkdirSync(PORTFOLIO_OUT, { recursive: true });

const PINK = "#c2185b";
const GOLD = "#cda344";
const CREAM = "#fdf6ec";
const CHARCOAL = "#2b2222";

function svgPlaceholder({ width, height, bg, label, sub }) {
	const fontSize = Math.round(Math.min(width, height) / 12);
	const subSize = Math.round(fontSize * 0.45);
	return `
	<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
		<rect width="100%" height="100%" fill="${bg}"/>
		<rect x="2" y="2" width="${width - 4}" height="${height - 4}" fill="none" stroke="${CREAM}" stroke-width="4" stroke-dasharray="20,16" opacity="0.6"/>
		<text x="50%" y="46%" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="${CREAM}" text-anchor="middle" dominant-baseline="middle">${label}</text>
		<text x="50%" y="58%" font-family="Arial, sans-serif" font-size="${subSize}" fill="${CREAM}" text-anchor="middle" dominant-baseline="middle" opacity="0.85">${sub}</text>
	</svg>`;
}

const images = [
	{ file: "landing.jpg", width: 2048, height: 2048, bg: PINK, label: "Emma's Party Rentals", sub: "Hero Photo Placeholder" },
	{ file: "cabinets.jpg", width: 2000, height: 2000, bg: GOLD, label: "Tent Setup", sub: "Photo Placeholder" },
	{ file: "construction.jpg", width: 1600, height: 1600, bg: PINK, label: "Tables &amp; Chairs", sub: "Photo Placeholder" },
	{ file: "services-tents.jpg", width: 1600, height: 1600, bg: PINK, label: "Tents", sub: "Photo Placeholder" },
	{ file: "services-tables.jpg", width: 1600, height: 1600, bg: GOLD, label: "Tables &amp; Chairs", sub: "Photo Placeholder" },
	{ file: "services-yard-games.jpg", width: 1600, height: 1600, bg: CHARCOAL, label: "Yard Games", sub: "Photo Placeholder" },
];

const portfolioLabels = [
	"Tent Setup", "Table &amp; Chairs", "Yard Games",
	"Backyard Party", "Wedding Tent", "Cornhole Set",
	"Event Setup", "Outdoor Seating", "Lawn Games",
];

portfolioLabels.forEach((label, i) => {
	images.push({
		file: `portfolio/port${i + 1}.jpg`,
		width: 1200,
		height: 1200,
		bg: i % 2 === 0 ? PINK : GOLD,
		label: "Gallery Photo",
		sub: `${label} Placeholder`,
	});
});

(async () => {
	for (const img of images) {
		const svg = svgPlaceholder(img);
		const dest = path.join(OUT, img.file);
		await sharp(Buffer.from(svg)).jpeg({ quality: 80 }).toFile(dest);
		console.log("Created", dest);
	}
})();
