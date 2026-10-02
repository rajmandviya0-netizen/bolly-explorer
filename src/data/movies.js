// month: 1-12, day: 1-31 (0 = not sure)
// wiki: exact Wikipedia page name (optional, finds the right poster)
// poster: direct image link (optional, overrides everything)
// trailer: YouTube video ID (optional). The part after v= in the YouTube link.
//          Leave '' and the app shows a "Find trailer" button instead.
export const MOVIES = [
  // ================= 2026 =================
  { id: 31, title: 'Mirzapur', year: 2026, month: 9, day: 4, genres: ['Crime', 'Action'], stars: 'Pankaj Tripathi, Ali Fazal', trailer: '' },
  { id: 28, title: 'Awarapan 2', year: 2026, month: 8, day: 14, genres: ['Romance', 'Thriller'], stars: 'Emraan Hashmi', trailer: '' },
  { id: 27, title: 'Dhamaal 4', year: 2026, month: 7, day: 10, genres: ['Comedy'], stars: 'Ajay Devgn, Arshad Warsi, Riteish Deshmukh, Jaaved Jaaferi', trailer: '' },
  { id: 29, title: 'Welcome to the Jungle', year: 2026, month: 6, day: 26, genres: ['Comedy'], stars: 'Akshay Kumar', trailer: '' },
  { id: 30, title: 'Cocktail 2', year: 2026, month: 6, day: 19, genres: ['Romance', 'Comedy'], stars: 'Shahid Kapoor, Kriti Sanon', trailer: '' },
  { id: 26, title: 'Bhooth Bangla', wiki: 'Bhooth Bangla', year: 2026, month: 4, day: 17, genres: ['Horror', 'Comedy'], stars: 'Akshay Kumar, Tabu, Paresh Rawal', trailer: '' },
  { id: 25, title: 'Dhurandhar: The Revenge', wiki: 'Dhurandhar: The Revenge', year: 2026, month: 3, day: 19, genres: ['Action', 'Spy'], stars: 'Ranveer Singh', trailer: '' },
  { id: 24, title: "O' Romeo", year: 2026, month: 2, day: 13, genres: ['Romance', 'Crime'], stars: 'Shahid Kapoor', trailer: '' },
  { id: 23, title: 'Mardaani 3', year: 2026, month: 1, day: 30, genres: ['Crime', 'Thriller'], stars: 'Rani Mukerji', trailer: '' },
  { id: 22, title: 'Border 2', year: 2026, month: 1, day: 23, genres: ['War', 'Action'], stars: 'Sunny Deol, Varun Dhawan, Diljit Dosanjh', trailer: '' },

  // ================= 2025 : December =================
  { id: 73, title: 'Tu Meri Main Tera Main Tera Tu Meri', year: 2025, month: 12, day: 25, genres: ['Romance', 'Comedy'], stars: 'Kartik Aaryan, Ananya Panday', trailer: '' },
  { id: 72, title: 'Kis Kisko Pyaar Karoon 2', year: 2025, month: 12, day: 12, genres: ['Comedy'], stars: 'Kapil Sharma', trailer: '' },
  { id: 21, title: 'Dhurandhar', wiki: 'Dhurandhar', year: 2025, month: 12, day: 5, genres: ['Action', 'Spy'], stars: 'Ranveer Singh', trailer: '' },

  // ================= 2025 : November =================
  { id: 20, title: 'Tere Ishk Mein', year: 2025, month: 11, day: 28, genres: ['Romance', 'Drama'], stars: 'Dhanush, Kriti Sanon', trailer: '' },
  { id: 71, title: 'Gustaakh Ishq', year: 2025, month: 11, day: 28, genres: ['Romance', 'Drama'], stars: 'Naseeruddin Shah, Fatima Sana Shaikh, Vijay Varma', trailer: '' },
  { id: 69, title: '120 Bahadur', year: 2025, month: 11, day: 21, genres: ['War', 'Historical'], stars: 'Farhan Akhtar, Raashii Khanna', trailer: '' },
  { id: 70, title: 'Mastiii 4', year: 2025, month: 11, day: 21, genres: ['Comedy'], stars: 'Riteish Deshmukh, Vivek Oberoi, Aftab Shivdasani', trailer: '' },
  { id: 68, title: 'De De Pyaar De 2', year: 2025, month: 11, day: 14, genres: ['Romance', 'Comedy'], stars: 'Ajay Devgn, R. Madhavan, Rakul Preet Singh', trailer: '' },
  { id: 67, title: 'Haq', wiki: 'Haq (2025 film)', year: 2025, month: 11, day: 7, genres: ['Drama'], stars: 'Emraan Hashmi, Yami Gautam', trailer: '' },

  // ================= 2025 : October =================
  { id: 65, title: 'The Taj Story', year: 2025, month: 10, day: 31, genres: ['Drama'], stars: 'Paresh Rawal', trailer: '' },
  { id: 66, title: 'Single Salma', year: 2025, month: 10, day: 31, genres: ['Comedy'], stars: 'Huma Qureshi, Sunny Singh', trailer: '' },
  { id: 18, title: 'Thamma', year: 2025, month: 10, day: 21, genres: ['Horror', 'Comedy'], stars: 'Ayushmann Khurrana, Rashmika Mandanna', trailer: '' },
  { id: 19, title: 'Ek Deewane Ki Deewaniyat', year: 2025, month: 10, day: 21, genres: ['Romance', 'Drama'], stars: 'Harshvardhan Rane, Sonam Bajwa', trailer: '' },
  { id: 64, title: 'Sunny Sanskari Ki Tulsi Kumari', year: 2025, month: 10, day: 2, genres: ['Romance', 'Comedy'], stars: 'Varun Dhawan, Janhvi Kapoor, Sanya Malhotra', trailer: '' },

  // ================= 2025 : September =================
  { id: 17, title: 'Homebound', wiki: 'Homebound (2025 film)', year: 2025, month: 9, day: 26, genres: ['Drama'], stars: 'Ishaan Khatter, Vishal Jethwa, Janhvi Kapoor', trailer: '' },
  { id: 16, title: 'Jolly LLB 3', year: 2025, month: 9, day: 19, genres: ['Comedy', 'Drama'], stars: 'Akshay Kumar, Arshad Warsi', trailer: '' },
  { id: 63, title: 'Nishaanchi', year: 2025, month: 9, day: 19, genres: ['Crime', 'Drama'], stars: 'Aaishvary Thackeray, Vedika Pinto', trailer: '' },
  { id: 60, title: 'Ek Chatur Naar', year: 2025, month: 9, day: 12, genres: ['Comedy', 'Thriller'], stars: 'Divya Khosla Kumar, Neil Nitin Mukesh', trailer: '' },
  { id: 61, title: 'Love in Vietnam', year: 2025, month: 9, day: 12, genres: ['Romance', 'Drama'], stars: 'Shantanu Maheshwari, Avneet Kaur', trailer: '' },
  { id: 62, title: 'Jugnuma: The Fable', year: 2025, month: 9, day: 12, genres: ['Drama'], stars: 'Manoj Bajpayee, Deepak Dobriyal', trailer: '' },
  { id: 58, title: 'Baaghi 4', year: 2025, month: 9, day: 5, genres: ['Action'], stars: 'Tiger Shroff, Sanjay Dutt', trailer: '' },
  { id: 59, title: 'The Bengal Files', year: 2025, month: 9, day: 5, genres: ['Drama', 'Historical'], stars: 'Mithun Chakraborty, Anupam Kher', trailer: '' },

  // ================= 2025 : August =================
  { id: 15, title: 'Param Sundari', year: 2025, month: 8, day: 29, genres: ['Romance', 'Comedy'], stars: 'Sidharth Malhotra, Janhvi Kapoor', trailer: '' },
  { id: 14, title: 'War 2', year: 2025, month: 8, day: 14, genres: ['Action', 'Spy'], stars: 'Hrithik Roshan, Jr NTR, Kiara Advani', trailer: '' },
  { id: 57, title: 'Tehran', wiki: 'Tehran (2025 film)', year: 2025, month: 8, day: 14, genres: ['Action', 'Thriller'], stars: 'John Abraham, Manushi Chhillar', trailer: '' },
  { id: 56, title: 'Udaipur Files', year: 2025, month: 8, day: 8, genres: ['Drama'], stars: 'Vijay Raaz', trailer: '' },
  { id: 13, title: 'Dhadak 2', year: 2025, month: 8, day: 1, genres: ['Romance', 'Drama'], stars: 'Siddhant Chaturvedi, Triptii Dimri', trailer: '' },
  { id: 55, title: 'Son of Sardaar 2', year: 2025, month: 8, day: 1, genres: ['Comedy', 'Action'], stars: 'Ajay Devgn, Mrunal Thakur', trailer: '' },

  // ================= 2025 : July =================
  { id: 53, title: 'Mahavatar Narsimha', year: 2025, month: 7, day: 25, genres: ['Animation', 'Mythology'], stars: 'Animated film', trailer: '' },
  { id: 54, title: 'Sarzameen', year: 2025, month: 7, day: 25, genres: ['Thriller', 'Drama'], stars: 'Prithviraj Sukumaran, Kajol, Ibrahim Ali Khan', trailer: '' },
  { id: 12, title: 'Saiyaara', year: 2025, month: 7, day: 18, genres: ['Romance', 'Drama'], stars: 'Ahaan Panday, Aneet Padda', trailer: '' },
  { id: 51, title: 'Tanvi the Great', year: 2025, month: 7, day: 18, genres: ['Drama'], stars: 'Anupam Kher, Boman Irani', trailer: '' },
  { id: 52, title: 'Nikita Roy', year: 2025, month: 7, day: 18, genres: ['Thriller', 'Horror'], stars: 'Sonakshi Sinha, Arjun Rampal', trailer: '' },
  { id: 49, title: 'Maalik', wiki: 'Maalik (2025 film)', year: 2025, month: 7, day: 11, genres: ['Action', 'Crime'], stars: 'Rajkummar Rao, Manushi Chhillar', trailer: '' },
  { id: 50, title: 'Aankhon Ki Gustaakhiyan', year: 2025, month: 7, day: 11, genres: ['Romance', 'Drama'], stars: 'Vikrant Massey, Shanaya Kapoor', trailer: '' },
  { id: 11, title: 'Metro... In Dino', year: 2025, month: 7, day: 4, genres: ['Romance', 'Drama'], stars: 'Aditya Roy Kapur, Sara Ali Khan, Konkona Sen Sharma', trailer: '' },

  // ================= 2025 : June =================
  { id: 48, title: 'Maa', wiki: 'Maa (2025 film)', year: 2025, month: 6, day: 27, genres: ['Horror', 'Mythology'], stars: 'Kajol, Ronit Roy', trailer: '' },
  { id: 10, title: 'Sitaare Zameen Par', year: 2025, month: 6, day: 20, genres: ['Drama', 'Comedy'], stars: 'Aamir Khan, Genelia Deshmukh', trailer: '' },
  { id: 9, title: 'Housefull 5', year: 2025, month: 6, day: 6, genres: ['Comedy'], stars: 'Akshay Kumar, Riteish Deshmukh, Abhishek Bachchan', trailer: '' },

  // ================= 2025 : May =================
  { id: 46, title: 'Bhool Chuk Maaf', year: 2025, month: 5, day: 23, genres: ['Comedy', 'Romance'], stars: 'Rajkummar Rao, Wamiqa Gabbi', trailer: '' },
  { id: 47, title: 'Kapkapiii', year: 2025, month: 5, day: 23, genres: ['Horror', 'Comedy'], stars: 'Tusshar Kapoor, Shreyas Talpade', trailer: '' },
  { id: 8, title: 'Raid 2', year: 2025, month: 5, day: 1, genres: ['Crime', 'Thriller'], stars: 'Ajay Devgn, Riteish Deshmukh, Vaani Kapoor', trailer: '' },
  { id: 45, title: 'The Bhootnii', year: 2025, month: 5, day: 1, genres: ['Horror', 'Comedy'], stars: 'Sanjay Dutt, Mouni Roy', trailer: '' },

  // ================= 2025 : April =================
  { id: 42, title: 'Ground Zero', year: 2025, month: 4, day: 25, genres: ['Action', 'Thriller'], stars: 'Emraan Hashmi, Sai Tamhankar', trailer: '' },
  { id: 43, title: 'Jewel Thief', year: 2025, month: 4, day: 25, genres: ['Thriller', 'Crime'], stars: 'Saif Ali Khan, Jaideep Ahlawat', trailer: '' },
  { id: 44, title: 'Phule', year: 2025, month: 4, day: 25, genres: ['Biopic', 'Drama'], stars: 'Pratik Gandhi, Patralekhaa', trailer: '' },
  { id: 7, title: 'Kesari Chapter 2', year: 2025, month: 4, day: 18, genres: ['Historical', 'Drama'], stars: 'Akshay Kumar, R. Madhavan, Ananya Panday', trailer: '' },
  { id: 41, title: 'Chhorii 2', year: 2025, month: 4, day: 11, genres: ['Horror'], stars: 'Nushrratt Bharuccha, Soha Ali Khan', trailer: '' },
  { id: 6, title: 'Jaat', year: 2025, month: 4, day: 10, genres: ['Action'], stars: 'Sunny Deol, Randeep Hooda', trailer: '' },

  // ================= 2025 : March =================
  { id: 5, title: 'Sikandar', wiki: 'Sikandar (2025 film)', year: 2025, month: 3, day: 30, genres: ['Action'], stars: 'Salman Khan, Rashmika Mandanna', trailer: '' },
  { id: 40, title: 'The Diplomat', wiki: 'The Diplomat (2025 film)', year: 2025, month: 3, day: 14, genres: ['Thriller', 'Spy'], stars: 'John Abraham, Sadia Khateeb', trailer: '' },
  { id: 39, title: 'Nadaaniyan', year: 2025, month: 3, day: 7, genres: ['Romance'], stars: 'Ibrahim Ali Khan, Khushi Kapoor', trailer: '' },

  // ================= 2025 : February =================
  { id: 37, title: 'Superboys of Malegaon', year: 2025, month: 2, day: 28, genres: ['Comedy', 'Drama'], stars: 'Adarsh Gourav, Vineet Kumar Singh', trailer: '' },
  { id: 38, title: 'Crazxy', year: 2025, month: 2, day: 28, genres: ['Thriller'], stars: 'Sohum Shah', trailer: '' },
  { id: 36, title: 'Mere Husband Ki Biwi', year: 2025, month: 2, day: 21, genres: ['Romance', 'Comedy'], stars: 'Arjun Kapoor, Rakul Preet Singh, Bhumi Pednekar', trailer: '' },
  { id: 4, title: 'Chhaava', year: 2025, month: 2, day: 14, genres: ['Historical', 'Action'], stars: 'Vicky Kaushal, Rashmika Mandanna', trailer: '' },
  { id: 3, title: 'Loveyapa', year: 2025, month: 2, day: 7, genres: ['Romance', 'Comedy'], stars: 'Junaid Khan, Khushi Kapoor', trailer: '' },
  { id: 35, title: 'Badass Ravi Kumar', year: 2025, month: 2, day: 7, genres: ['Action', 'Comedy'], stars: 'Himesh Reshammiya, Prabhu Deva', trailer: '' },

  // ================= 2025 : January =================
  { id: 34, title: 'Deva', wiki: 'Deva (2025 film)', year: 2025, month: 1, day: 31, genres: ['Action', 'Thriller'], stars: 'Shahid Kapoor, Pooja Hegde', trailer: '' },
  { id: 1, title: 'Sky Force', year: 2025, month: 1, day: 24, genres: ['Action', 'War'], stars: 'Akshay Kumar, Veer Pahariya, Sara Ali Khan', trailer: '' },
  { id: 2, title: 'Emergency', year: 2025, month: 1, day: 17, genres: ['Drama', 'Biopic'], stars: 'Kangana Ranaut, Anupam Kher', trailer: '' },
  { id: 33, title: 'Azaad', wiki: 'Azaad (2025 film)', year: 2025, month: 1, day: 17, genres: ['Action', 'Adventure'], stars: 'Ajay Devgn, Aaman Devgan, Rasha Thadani', trailer: '' },
  { id: 32, title: 'Fateh', year: 2025, month: 1, day: 10, genres: ['Action', 'Thriller'], stars: 'Sonu Sood, Jacqueline Fernandez', trailer: '' },
];