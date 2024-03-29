const data = [
	{
		id: 0,
		name: "Ayodhya",
		info: "Ayodhya is an ancient city in the Indian state of Uttar Pradesh, known for its historical and religious significance. It is believed to be the birthplace of Lord Rama and is a pilgrimage site for Hindus. The city has a rich cultural heritage and is known for its temples and ghats.",
		image: "https://e1.pxfuel.com/desktop-wallpaper/216/601/desktop-wallpaper-ram-mandir-bhoomi-pujan-a-look-at-proposed-model-of-grand-temple-in-ayodhya-ram-temple.jpg",
		price: "32,500",
	  },
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://cdn.thecodehelp.in/Agra.jpeg",
		price: "35,758",
	},
	{
		id: 2,
		name: "Jaipur",
		info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
		image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
		price: "82,560",
	},
	{
		id: 3,
		name: "Goa",
		info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
		image: "https://cdn.thecodehelp.in/Goa.jpeg",
		price: "29,695",
	},
	{
		id: 4,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
		price: "31,095",
	},
	{
		id: 5,
		name: "Darjeeling",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
		image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
		price: "78,595",
	},
	{
		id: 6,
		name: "Jaisalmer",
		info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
		image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
		price: "68,595",
	},
	{
		id: 7,
		name: "Kochi",
		info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
		image: "https://cdn.thecodehelp.in/Kochi.jpeg",
		price: "68,595",
	},
	{
		id: 8,
		name: "Shimla",
		info: "Shimla is the capital city of the Indian state of Himachal Pradesh, nestled in the Himalayan foothills. Known for its scenic beauty, pleasant climate, and colonial architecture, Shimla is a popular hill station and tourist destination.",
		image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "45,210",
	  },
	  {
		id: 9,
		name: "Mysuru",
		info: "Mysuru, also known as Mysore, is a city in the Indian state of Karnataka. Renowned for its grand palaces, historic architecture, and vibrant festivals, Mysuru attracts tourists with its rich cultural heritage and silk weaving industry.",
		image: "https://images.unsplash.com/photo-1580294647332-8a399cd9ed45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "38,750",
	  },
	  {
		id: 10,
		name: "Rishikesh",
		info: "Rishikesh is a city in Uttarakhand, India, situated on the banks of the Ganges River. Known as the 'Yoga Capital of the World,' Rishikesh is famous for its spiritual vibes, yoga retreats, and the iconic Laxman Jhula bridge.",
		image: "https://plus.unsplash.com/premium_photo-1697729439457-85d4b9d3a2cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "28,500",
	  },
	  {
		id: 11,
		name: "Ooty",
		info: "Ooty, also known as Udhagamandalam, is a popular hill station in Tamil Nadu, India. Surrounded by lush greenery, tea gardens, and beautiful landscapes, Ooty is a favorite destination for nature lovers and those seeking a peaceful retreat.",
		image: "https://images.unsplash.com/photo-1580979222901-12a0e56abf7d?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "42,800",
	  },
	  {
		id: 12,
		name: "Kolkata",
		info: "Kolkata, formerly known as Calcutta, is the capital of the Indian state of West Bengal. Known for its cultural festivals, historical landmarks, and vibrant markets, Kolkata is a city that beautifully blends tradition and modernity.",
		image: "https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "55,900",
	  },
	  {
		id: 13,
		name: "Ahmedabad",
		info: "Ahmedabad is the largest city in the Indian state of Gujarat. With a rich history, diverse culture, and a thriving textile industry, Ahmedabad offers a mix of historical sites, modern infrastructure, and delicious street food.",
		image: "https://en-media.thebetterindia.com/uploads/2022/08/Untitled-design-2022-08-27T121008.682-1661584220.jpg",
		price: "36,450",
	  },
	  {
		id: 14,
		name: "Amritsar",
		info: "Amritsar is a city in the northwestern Indian state of Punjab, known for its Golden Temple, a sacred Sikh shrine. The city also offers a rich culinary experience, with its famous street food and traditional Punjabi dishes.",
		image: "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "40,150",
	  },
	  {
		id: 15,
		name: "Hyderabad",
		info: "Hyderabad, the capital of Telangana, is a vibrant city known for its historic sites, including the Charminar and Golconda Fort. The city is also famous for its biryani and unique blend of traditional and modern culture.",
		image: "https://i.pinimg.com/originals/93/32/f8/9332f8a07ae4551efeec53325f0917c6.jpg",
		price: "48,700",
	  },
	  {
		id: 16,
		name: "Lucknow",
		info: "Lucknow is the capital city of the Indian state of Uttar Pradesh. Known for its rich history, cultural heritage, and exquisite Mughal architecture, Lucknow is a city that blends tradition with modernity.",
		image: "https://plus.unsplash.com/premium_photo-1697730410005-1d916de26345?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "34,900",
	  },
	  {
		id: 17,
		name: "Pune",
		info: "Pune, located in the state of Maharashtra, is known for its educational institutions, historical landmarks, and vibrant nightlife. The city is a hub for IT and manufacturing industries, making it a dynamic and cosmopolitan destination.",
		image: "https://images.unsplash.com/photo-1553064483-f10fe837615f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVuZSUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
		price: "46,500",
	  },
	  {
		id: 18,
		name: "Kodaikanal",
		info: "Kodaikanal is a hill station in the southern Indian state of Tamil Nadu. Nestled amidst the Western Ghats, Kodaikanal is known for its scenic beauty, pleasant climate, and outdoor activities, making it a popular tourist destination.",
		image: "https://images.unsplash.com/photo-1633931698758-f59cdaf042a2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "37,800",
	  },
	  {
		id: 19,
		name: "Aurangabad",
		info: "Aurangabad is a city in Maharashtra, known for its historical monuments, including the Ajanta and Ellora Caves. The city is a cultural and historical treasure, attracting tourists with its rich heritage and architectural wonders.",
		image: "https://media.istockphoto.com/id/514991038/photo/ellora-caves-in-india.jpg?s=612x612&w=0&k=20&c=mGpgTujahN8VUTQnKei3T40Lh3AOMK_XKM5727eOUwY=",
		price: "41,250",
	  },
	  
	  {
		id: 21,
		name: "Guwahati",
		info: "Guwahati is the largest city in the Indian state of Assam, situated on the banks of the Brahmaputra River. Known for its ancient temples, natural beauty, and vibrant culture, Guwahati is a gateway to the northeastern region of India.",
		image: "https://images.unsplash.com/photo-1550647581-71f8afffad65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "36,900",
	  },
	  {
		id: 22,
		name: "Bhopal",
		info: "Bhopal, the capital of Madhya Pradesh, is known for its picturesque lakes, historical monuments, and vibrant culture. The city reflects a blend of the old and the new, with a rich history and modern amenities.",
		image: "https://images.unsplash.com/photo-1608213189166-b099855aee3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: "39,500",
	  },
];

export default data;
