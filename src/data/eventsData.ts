export interface EventGalleryImage {
  src: string;
  alt: string;
}

export interface EventData {
  slug: string;
  title: string;
  pageTitle: string;
  badge: string;
  subtitle: string;
  date: string;
  sortDate: string; // ISO string for sorting (e.g. 2026-09-12T12:00)
  monthYear: string; // e.g. "September 2026"
  time: string;
  venue: string;
  description: string;
  paragraphs: string[];
  images?: EventGalleryImage[];
}

export const allEvents: EventData[] = [
  {
    slug: 'farewell-mca-2026',
    title: 'A Memorable Farewell for MCA Fourth-Semester Students',
    pageTitle: 'MCA Farewell 2026',
    badge: 'MCA · Farewell & Internship Felicitation 2026',
    subtitle: 'A Memorable Farewell Programme for MCA Fourth-Semester Students',
    date: '12th Sep 2026',
    sortDate: '2026-09-12T12:00',
    monthYear: 'September 2026',
    time: '12:00 PM',
    venue: 'H.N. Multimedia Hall',
    description: 'A memorable farewell programme for MCA fourth-semester students with distribution of internship certificates, graced by distinguished industry leaders, alumni, and college management.',
    paragraphs: [
      'A memorable farewell programme for the MCA fourth-semester students was held on Saturday, 12 September 2026, from 12:00 noon onwards at the H.N. Multimedia Hall, The National College, Basavanagudi. The programme also included the distribution of internship certificates to the outgoing students.',
      'The event was graced by distinguished chief guests: Mr. Mahantesh K. A., CEO and Managing Director, TeleIndia Networks Pvt. Ltd.; Er. T. N. Sudhakara Reddy, Governing Council Member and Executive Director, BESCOM; and Mr. Praneesh Narimetia Matha, Founder, Rachaitha Labs, Bengaluru. Sri V. Venkatasiva Reddy, Hon. Secretary, NES of Karnataka, and Sri V. Manjunath, Hon. Associate Vice President, NES of Karnataka, were also present on the dais. Dr. Ramesh P. L., Principal; Prof. Alakananda K. P., Vice Principal and MCA Coordinator; and Prof. Sangeetha B. K., Head of the Department of Computer Science, attended the programme.',
      'The programme commenced with the college prayer, followed by an invocation by Ms. Swetha, an MCA student. The distinguished chief guests were felicitated on the occasion. In his address, Mr. Mahantesh K. A. spoke about the attention and skills expected from students in the present era and highlighted recent technological developments, cloud storage, and emerging career opportunities.',
      'Er. T. N. Sudhakara Reddy encouraged the students to remain disciplined, responsible, and committed, emphasising the importance of becoming valuable assets to their institution and society. Mr. Praneesh Narimetia Matha addressed the students on Artificial Intelligence, its applications, and the opportunities it offers in the current job market.',
      'The programme was further enriched by the presence of college alumnus Mr. Keerthi Kumar, who had facilitated two internship opportunities for the students. Ms. Sejal, Mr. Pavan Kumar, and Ms. Bhanu Priya shared their experiences and feedback about the internship programme and their learning journey.',
      'Prof. Alakananda K. P., MCA Coordinator, highlighted that all the students had been provided with internship opportunities through the college. She explained that the internships enabled students to gain valuable hands-on experience in real-world workplaces and expressed appreciation to the companies and organisations that supported the students.',
      'Sri V. Venkatasiva Reddy, Hon. Secretary, NES of Karnataka, delivered the presidential address and shared his valuable thoughts and wishes with the students. The programme concluded with the vote of thanks delivered by Ms. Pooja. A farewell celebration followed by lunch was arranged for the students, making the occasion a memorable and meaningful experience as they completed their MCA journey.'
    ],
  },
  {
    slug: 'animation-block-inauguration-2026',
    title: 'Inauguration of New Animation Block',
    pageTitle: 'Animation Block Inauguration',
    badge: 'Infrastructure · Animation Department 2026',
    subtitle: 'Inauguration of the Newly Constructed Four-Storey Animation Department Building',
    date: '02nd Sep 2026',
    sortDate: '2026-09-02T15:00',
    monthYear: 'September 2026',
    time: '3:00 PM',
    venue: 'Animation Department Block',
    description: 'Inauguration of the newly constructed four-storey Animation Department Building equipped with modern technology to support creative learning in digital media, art, and storytelling.',
    paragraphs: [
      'The National College, Basavanagudi, Bengaluru, inaugurated its newly constructed four-storey Animation Department Building on 2 September 2026. The inauguration marked an important milestone in the development of the Department of Animation and reflected the institution’s commitment to strengthening creative and technology-oriented education.',
      'The new building provides a dedicated, state-of-the-art space equipped to support comprehensive learning in 2D/3D animation, VFX, digital media, interactive art, and storytelling. It offers students opportunities to explore their creative boundaries, develop high-demand practical skills, and work hands-on with contemporary industry technologies.',
      'The inauguration was a momentous occasion for the college and the Animation Department, symbolising its continued growth, expansion, and enduring commitment to fostering future leaders in multimedia and digital arts.'
    ],
  },
  {
    slug: 'talents-day-2026',
    title: 'Talents Day',
    pageTitle: 'Talents Day 2026',
    badge: 'Cultural Activities · Student Talent Showcase 2026',
    subtitle: 'Annual Talent Day Celebration at The National College, Basavanagudi',
    date: '27th Aug 2026',
    sortDate: '2026-08-27T10:00',
    monthYear: 'August 2026',
    time: '10:00 AM',
    venue: 'The National College Campus',
    description: 'Platform for students to showcase creativity, skills, and confidence across singing, dancing, instrumental performance, Rangoli, Mehendi, and artistic competitions.',
    paragraphs: [
      'The National College, Basavanagudi, organised Talent Day to provide students with a vibrant platform to showcase their creativity, skills, confidence, and individuality.',
      'The programme included a rich variety of stage events such as solo singing, instrumental performance, solo dancing, group dancing, and group singing. Students participated enthusiastically and displayed their artistic talents with dedication and confidence before an appreciative audience of peers and faculty.',
      'Along with the stage events, exciting outdoor and creative activities such as Rangoli, Mehendi, sketch art, and craft competitions were conducted across the college premises.',
      'The active participation of students and the constant encouragement and support of the college management contributed to the grand success of the programme. The event created an atmosphere of infectious enthusiasm, healthy competition, and joyous celebration, inspiring students to explore and nurture their artistic capabilities.'
    ],
  },
  {
    slug: 'independence-day-2026',
    title: '80th Independence Day Celebration',
    pageTitle: '80th Independence Day 2026',
    badge: 'National Festival · Patriotic Celebration 2026',
    subtitle: '80th Independence Day of India Celebrated with Patriotic Spirit and Enthusiasm',
    date: '15th Aug 2026',
    sortDate: '2026-08-15T08:30',
    monthYear: 'August 2026',
    time: '8:30 AM',
    venue: 'College Quadrangle',
    description: 'The 80th Independence Day of India was celebrated with great patriotic spirit and enthusiasm at The National College, Basavanagudi. Organised by NES of Karnataka (R.) with ceremonial flag hoisting, national anthem, and student tributes.',
    paragraphs: [
      'The 80th Independence Day of India was celebrated with great patriotic spirit and enthusiasm at The National College, Basavanagudi, on 15 August 2026. The programme was organised by the National Education Society of Karnataka (R.) as a celebration of the nation’s freedom and the enduring values of unity, democracy, and responsible citizenship.',
      'The celebration commenced with the ceremonial hoisting of the National Flag, followed by the National Anthem. The gathering included the management of NES of Karnataka, principal, faculty members, non-teaching staff, and students of the institution.',
      'The programme highlighted the historical significance of Independence Day and paid heartfelt tribute to the sacrifices of the freedom fighters who dedicated their lives to the nation. The speakers reminded the students of their fundamental responsibility towards the country and encouraged them to uphold the ideals of freedom, equality, unity, and social consciousness.',
      'The students participated enthusiastically in the celebration with patriotic songs and presentations, adding colour and spirit to the occasion. The programme provided an opportunity for everyone to reflect on the journey of independent India and the role of young citizens in building a progressive and self-reliant nation.',
      'The celebration concluded with a vote of thanks, expressing sincere gratitude to the management, principal, faculty members, staff, and students for their active participation and support in making the Independence Day celebration meaningful and memorable.'
    ],
  },
  {
    slug: 'nss-inauguration-2026',
    title: 'NSS Inauguration Ceremony',
    pageTitle: 'NSS Inauguration 2026',
    badge: 'Social Service · NSS Unit 2026-27',
    subtitle: 'Inauguration of National Service Scheme (NSS) Unit Activities for 2026-27',
    date: '11th Jul 2026',
    sortDate: '2026-07-11T14:30',
    monthYear: 'July 2026',
    time: '2:30 PM',
    venue: 'H.N. Hall',
    description: 'The National Service Scheme (NSS) inauguration ceremony was held at H.N. Hall, presided over by Dr. Sri V. Venkata Shiva Reddy with Sri B.S. Arun Kumar, Dr. Govinde Gowda, and Dr. Hariprasad G.V.',
    paragraphs: [
      'On July 11, 2026, at 2:30 PM, The National Service Scheme (NSS) inauguration ceremony was held at H.N. Hall. The event was presided over by Dr. Sri V. Venkata Shiva Reddy, while Sri B.S. Arun Kumar addressed the gathering with valuable advice for the students.',
      'Dr. Govinde Gowda, NSS Coordinator of City University, inaugurated the program by lighting the ceremonial lamp and elaborated on the primary objectives and motto of the NSS.',
      'Additionally, Dr. Hariprasad G.V, Deputy Director of the Department of State Educational Research and Training, Bengaluru, formally inaugurated the event by planting a sapling. He spoke on the importance of Community service, Time management, and the Lifelong benefits of joining NSS.',
      'Principal P.L. Ramesh, Vice Principal Alakananda, and Dr. Anita Heggodu gracefully hosted and coordinated the event for the volunteers. The program concluded with the distribution of university certificates to senior NSS students.'
    ],
  },
  {
    slug: 'musical-night-2026',
    title: 'Musical Night Concert',
    pageTitle: 'Musical Night Concert 2026',
    badge: 'Live Concert · College Day 2026',
    subtitle: 'Live Musical Night Featuring Playback Singer Shreenidhi G. Shastry',
    date: '19th May 2026',
    sortDate: '2026-05-19T16:00',
    monthYear: 'May 2026',
    time: '4:00 PM',
    venue: 'College Quadrangle',
    description: 'As part of the College Day Celebration, live performance by playback and reality-show singer Shreenidhi G. Shastry (Top 10 contestant of Indian Idol Season 16 and winner of Sa Re Ga Ma Pa Kannada 2020), supported by Advaith Hyundai and Advaith Kia.',
    paragraphs: [
      'As part of the College Day Celebration, The National College, Autonomous, Basavanagudi, organized a Live Musical Night featuring playback and reality-show singer Shreenidhi G. Shastry, a Top 10 contestant of Indian Idol Season 16 and winner of Sa Re Ga Ma Pa Kannada 2020.',
      'The performance was held on 19-05-2026 at the college quadrangle from 4:00 PM onwards, and was enthusiastically received by students, staff, and parents in attendance.',
      'The musical evening featured a spellbinding lineup of classic and contemporary melodies, creating an electrifying and festive atmosphere across the campus quadrangle.',
      'The programme was generously supported by Advaith Hyundai and Advaith Kia as official sponsors.'
    ],
    images: [
      { src: '/events/musical-night-2026/musical-night-1.jpg', alt: 'Enthusiastic audience of parents, staff, and students applauding at Musical Night' },
      { src: '/events/musical-night-2026/musical-night-2.jpg', alt: 'Aerial view of the packed college quadrangle during the Musical Night concert' },
      { src: '/events/musical-night-2026/musical-night-3.jpg', alt: 'Shreenidhi G. Shastry and team with college management in the Principal\'s office' },
      { src: '/events/musical-night-2026/musical-night-4.jpg', alt: 'Shreenidhi G. Shastry posing with college dignitaries before the performance' },
      { src: '/events/musical-night-2026/musical-night-5.jpg', alt: 'Live performance at Musical Night with singer engaging the large audience at the quadrangle' },
    ],
  },
  {
    slug: 'college-day-2026',
    title: 'College Day, Parents Day & Farewell 2026',
    pageTitle: 'College Day 2026',
    badge: 'College Day · Parents Day · Farewell 2026',
    subtitle: 'College Day, Parents Day & Farewell to Final Year Students',
    date: '19th May 2026',
    sortDate: '2026-05-19T10:00',
    monthYear: 'May 2026',
    time: '10:00 AM',
    venue: 'Gandhi Neharu Rangamandira',
    description: 'Celebrated College Day, Parents Day, and Farewell to Final Year Students presided by Dr. H. N. Subrahmanya with Sri Srinivasulu, IFS as Chief Guest. Included student awards, parent felicitations, and cultural showcase.',
    paragraphs: [
      'The National College, Autonomous, Basavanagudi, celebrated College Day, Parents Day, and Farewell to Final Year Students on 19th May 2026 at the college premises.',
      'The function was presided over by Dr. H. N. Subrahmanya, President, NES of Karnataka (R.), with Sri Srinivasulu, IFS, Principal Secretary to Government, Department of Forest, Ecology and Environment, GOK, as the Chief Guest. The event was graced by several guests of honour from the National Education Society of Karnataka, along with parent representatives of outgoing final-year students.',
      'The programme celebrated student achievements over the academic year and bid farewell to the final year batch, with parents felicitated as part of the Parents Day observance.',
      'A special attraction of the evening was a live performance by Shreenidhi G. Shastry, winner of Sa Re Ga Ma Pa (2020) and Top 10 Indian Idol Season 16 contestant, held at the college quadrangle, which was well received by staff, students, and parents alike.'
    ],
    images: [
      { src: '/events/college-day-2026/college-day-1.jpg', alt: 'Distinguished guests at College Day 2026' },
      { src: '/events/college-day-2026/college-day-2.jpg', alt: 'Award distribution ceremony by the President & Chief Guest' },
      { src: '/events/college-day-2026/college-day-3.jpg', alt: 'Final year students celebrating at the farewell function' },
      { src: '/events/college-day-2026/college-day-4.jpg', alt: 'Shreenidhi G. Shastry with college management' },
      { src: '/events/college-day-2026/college-day-5.jpg', alt: 'Faculty members gathered for the College Day celebration' },
      { src: '/events/college-day-2026/college-day-6.jpg', alt: 'Student choir and musical performance on stage' },
      { src: '/events/college-day-2026/college-day-7.jpg', alt: 'Vibrant cultural dance performance on College Day' },
      { src: '/events/college-day-2026/college-day-8.jpg', alt: 'Farewell ceremony for final year students on stage' },
      { src: '/events/college-day-2026/college-day-9.jpg', alt: 'Felicitation of meritorious student with medal and certificate' },
      { src: '/events/college-day-2026/college-day-10.jpg', alt: 'Inaugural address and dignitaries on dais at Gandhi Neharu Rangamandira' },
      { src: '/events/college-day-2026/college-day-11.jpg', alt: 'Felicitation of Chief Guest Sri Srinivasulu, IFS with shawl, garland and silver plaque memento' },
      { src: '/events/college-day-2026/college-day-12.jpg', alt: 'President Dr. H. N. Subrahmanya and management presenting honor to Chief Guest' },
      { src: '/events/college-day-2026/college-day-13.jpg', alt: 'Presentation of silver memento plaque during College Day ceremony' },
      { src: '/events/college-day-2026/college-day-14.jpg', alt: 'Dignitaries standing at the inaugural table at Gandhi Neharu Rangamandira' },
      { src: '/events/college-day-2026/college-day-15.jpg', alt: 'Dignitaries and office bearers on stage for College Day celebration' },
      { src: '/events/college-day-2026/college-day-16.jpg', alt: 'Chief Guest Sri Srinivasulu, IFS and President Dr. H. N. Subrahmanya seated in audience' },
      { src: '/events/college-day-2026/college-day-17.jpg', alt: 'NCC cadets escorting dignitaries in ceremonial procession on red carpet' },
      { src: '/events/college-day-2026/college-day-18.jpg', alt: 'Management, faculty, and NCC officers gathered at campus courtyard' },
      { src: '/events/college-day-2026/college-day-19.jpg', alt: 'Distinguished faculty members and guests assembled on red carpet' },
      { src: '/events/college-day-2026/college-day-20.jpg', alt: 'NCC cadet ceremonial guard of honor welcoming Chief Guest and dignitaries on red carpet' },
      { src: '/events/college-day-2026/college-day-21.jpg', alt: 'Dignitaries, faculty, and NCC guard of honor lined up in campus quadrangle' },
      { src: '/events/college-day-2026/college-day-22.jpg', alt: 'Ceremonial procession led by NCC cadets passing the Boys Hostel block' },
      { src: '/events/college-day-2026/college-day-23.jpg', alt: 'Chief Guest and college management dignitaries in discussion at the conference room' },
      { src: '/events/college-day-2026/college-day-24.jpg', alt: 'Dignitaries on dais during the official stage launch ceremony' },
      { src: '/events/college-day-2026/college-day-25.jpg', alt: 'Felicitation of meritorious parents and honorees on stage with traditional shawls and mementos' },
      { src: '/events/college-day-2026/college-day-26.jpg', alt: 'Principal delivering the welcome address with dignitaries on dais and LED backdrop' },
      { src: '/events/college-day-2026/college-day-27.jpg', alt: 'Merit certificate presentation to student achiever by Sri Srinivasulu, IFS and President Dr. H. N. Subrahmanya' },
      { src: '/events/college-day-2026/college-day-28.jpg', alt: 'Appreciation certificate presentation to NCC officer on stage by dignitaries' },
      { src: '/events/college-day-2026/college-day-29.jpg', alt: 'Group photo of meritorious student awardees and performers on stage with dignitaries' },
      { src: '/events/college-day-2026/college-day-30.jpg', alt: 'Dignitaries sharing insights during College Day address' },
      { src: '/events/college-day-2026/college-day-31.jpg', alt: 'Faculty and student group celebrating College Day' },
      { src: '/events/college-day-2026/college-day-32.jpg', alt: 'NCC cadet escort contingent with dignitaries' },
      { src: '/events/college-day-2026/college-day-33.jpg', alt: 'Honoring meritorious achievers on stage' },
      { src: '/events/college-day-2026/college-day-34.jpg', alt: 'Distinguished gathering at Gandhi Neharu Rangamandira' },
      { src: '/events/college-day-2026/college-day-35.jpg', alt: 'Chief Guest addressing the gathering' },
      { src: '/events/college-day-2026/college-day-36.jpg', alt: 'Management representatives and guests in discussion' },
      { src: '/events/college-day-2026/college-day-37.jpg', alt: 'Students and staff participating in farewell event' },
      { src: '/events/college-day-2026/college-day-38.jpg', alt: 'Memento presentation to college management' },
    ],
  },
  {
    slug: 'ambedkar-jayanthi-2026',
    title: 'Ambedkar Jayanthi',
    pageTitle: 'Ambedkar Jayanthi 2026',
    badge: 'Memorial Tribute · Social Justice 2026',
    subtitle: 'Commemorating the Legacy and Ideals of Bharat Ratna Dr. B. R. Ambedkar',
    date: '14th Apr 2026',
    sortDate: '2026-04-14T09:30',
    monthYear: 'April 2026',
    time: '9:30 AM',
    venue: 'DR. H N Multimedia Hall',
    description: 'Commemorating the legacy of Dr. B. R. Ambedkar with talks, tributes, and student-led discussions on social justice.',
    paragraphs: [
      'The National College, Basavanagudi, observed the birth anniversary of Bharat Ratna Dr. B. R. Ambedkar with reverent tributes and scholarly discourses on 14th April 2026 at DR. H N Multimedia Hall.',
      'The celebration featured floral tributes, keynote lectures by eminent academicians on constitutional morality, equality, and human rights, followed by student-led discussions on social justice and nation-building.',
      'Faculty members and students reflected on Babasaheb’s lifelong struggle for the emancipation of marginalized sections and his enduring contributions to modern democratic India.'
    ],
  },
  {
    slug: 'drama-competition-2026',
    title: 'Intersection Drama Competition',
    pageTitle: 'Drama Competition 2026',
    badge: 'Theatre Arts · Inter-Collegiate Drama 2026',
    subtitle: 'Inter-Collegiate Theatre Showcase at Gandhi Neharu Rangamandira',
    date: '08th Apr 2026',
    sortDate: '2026-04-08T14:00',
    monthYear: 'April 2026',
    time: '2:00 PM',
    venue: 'Gandhi Neharu Rangamandira',
    description: 'A vibrant theatre showcase bringing together student troupes from colleges across Bengaluru for a day of dramatic performances.',
    paragraphs: [
      'A vibrant inter-collegiate theatre competition bringing together talented student drama troupes from colleges across Bengaluru was hosted at Gandhi Neharu Rangamandira on 8th April 2026.',
      'Student artists performed an eclectic mix of plays addressing social themes, folklore, classical literature, and contemporary satire before an esteemed panel of theatre stalwarts.',
      'The competition fostered artistic expression, dramatic teamwork, and dialogue among young actors, culminating in an award ceremony honouring best play, best director, and outstanding performances.'
    ],
  },
  {
    slug: 'womens-day-2026',
    title: "Women's Day Celebration",
    pageTitle: "Women's Day 2026",
    badge: 'Special Celebration · Women Empowerment 2026',
    subtitle: 'International Women’s Day Celebration Honouring Women Achievers',
    date: '30th Mar 2026',
    sortDate: '2026-03-30T14:00',
    monthYear: 'March 2026',
    time: '2:00 PM',
    venue: 'Gandhi Neharu Rangamandira',
    description: 'Honouring women achievers through guest lectures, panel discussions, and cultural performances by students and faculty.',
    paragraphs: [
      'International Women’s Day was celebrated with great dignity and festivity at Gandhi Neharu Rangamandira on 30th March 2026, honouring women achievers in academia, public life, and social service.',
      'The programme featured inspiring guest lectures by distinguished women leaders, an interactive panel discussion on gender parity in education and employment, and soulful cultural performances by female students and faculty members.',
      'The celebration emphasized women empowerment, equal opportunity, and the indispensable role of women in shaping progressive society.'
    ],
  },
  {
    slug: 'srijanotsava-2025',
    title: 'Srijanotsava',
    pageTitle: 'Srijanotsava 2025',
    badge: 'Cultural Fest · Flagship Festival 2025',
    subtitle: 'Annual Cultural Festival Celebrating Youth Creativity and Arts',
    date: '30th Oct 2025',
    sortDate: '2025-10-30T09:00',
    monthYear: 'October 2025',
    time: '9:00 AM',
    venue: 'Gandhi Neharu Rangamandira',
    description: "The college's flagship cultural festival celebrating creativity through music, dance, art, and literary contests.",
    paragraphs: [
      'Srijanotsava, the flagship annual cultural festival of The National College, Basavanagudi, was celebrated on 30th October 2025 at Gandhi Neharu Rangamandira.',
      'The festival brought together hundreds of undergraduate and postgraduate students in a kaleidoscope of artistic and literary competitions, spanning music, dance, theatrical acts, quiz, creative writing, and fine arts.',
      'The event provided an inclusive platform for student talent, teamwork, and cultural pride, concluding with an exuberant valedictory ceremony and prize distribution.'
    ],
  },
  {
    slug: 'omnitrics-2025',
    title: 'Omnitrics Hackathon',
    pageTitle: 'Omnitrics Hackathon 2025',
    badge: 'Technical Hackathon · BCA Department 2025',
    subtitle: 'Inter-Collegiate Hackathon and Technical Innovation Challenge',
    date: '27th Oct 2025',
    sortDate: '2025-10-27T09:00',
    monthYear: 'October 2025',
    time: '9:00 AM',
    venue: 'BCA Block',
    description: 'Omnitrics Hackathon brings students together to innovate, collaborate, and solve real-world challenges through technology.',
    paragraphs: [
      'Omnitrics, the premier technical hackathon hosted by the Department of Computer Applications (BCA), was held on 27th October 2025 at the BCA Block.',
      'The hackathon challenged multidisciplinary student teams to prototype solutions for real-world problems in web technologies, mobile apps, artificial intelligence, and cloud computing under a rigorous time constraint.',
      'Industry mentors and senior tech leads guided the teams throughout the sprint, concluding with project demonstrations, technical evaluations, and cash prize awards for winning innovations.'
    ],
  },
];
