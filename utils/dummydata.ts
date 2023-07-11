const colorCodes = [
	"#FF0000",
	"#00FF00",
	"#0000FF",
	"#FFFF00",
	"#FF00FF",
	"#00FFFF",
	"#FFA500",
	"#800080",
	"#FFC0CB",
	"#000000",
];

const randomDate = new Date(
	Date.now() - Math.floor(Math.random() * 86400000 * 30)
); // Random date within the last 30 days
const formattedDate = randomDate.toISOString().split("T")[0]; // Format date as "YYYY-MM-DD"

export const dummyData = Array.from({ length: 10 }, (_, index) => ({
	order: (index + 1).toString().padStart(2, "0"),
	title:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	status: colorCodes[Math.floor(Math.random() * colorCodes.length)],
	created_at: formattedDate,
	views_count: Math.floor(Math.random() * 100),
}));
