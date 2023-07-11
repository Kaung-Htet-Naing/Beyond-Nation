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

export const dummyData = Array.from({ length: 10 }, (_, index) => ({
	order: (index + 1).toString().padStart(2, "0"),
	title:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
	status: colorCodes[Math.floor(Math.random() * colorCodes.length)],
	created_at: "2023-06-19",
	views_count: Math.floor(Math.random() * 100),
}));
