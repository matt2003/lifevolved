export const profile = {
  name: 'Matt Moitra',
  title: 'Software Engineer',
  tagline: 'AI, Desktop, Mobile, Embedded, Web',
  summary:
    'Software engineer with 20+ years across AI tooling, Windows desktop, mobile banking, embedded systems and unmanned aerial vehicles. Based in Sofia, Bulgaria, and currently building AI-assisted tooling for Siemens Process Simulate.',
  location: 'Sofia, Bulgaria',
  email: 'mattmoitra@gmail.com',
  links: [] as { label: string; href: string }[],
};

export const experience = [
  {
    role: 'Software Engineer - Desktop & AI',
    company: 'Matrix - Siemens',
    location: 'Sofia, Bulgaria',
    period: 'Nov 2021 - Present',
    tags: ['C#', 'C++', 'Python', 'JS', 'HTML', 'CSS', 'WebView2', 'WPF', 'AI', 'RAG'],
    projects: [
      {
        name: 'Process Simulate Virtual Factory Desktop Application',
        points: [
          'AI IDE creation with a copilot and IDE panel for code and XML generation, using RAG, vector database embeddings, and tool creation and usage for the Process Simulate desktop suite.',
          'Significant UI enhancements in C# and C++, with changes to WPF, WinForms and MFC dialogs.',
          'Converted the app to support 4K resolution scaling and wrote automated tests to ensure quality coverage.',
          'Implemented cloud and value-based token licensing with avatar and event-driven mechanisms, allowing licenses to be checked out and in on the fly for premium tier add-ons.',
          'Agile environment using SAFe and git in a supportive team.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Mobile Applications',
    company: 'Neofacto',
    location: 'Luxembourg City, Luxembourg',
    period: 'Jan 2020 - Aug 2021',
    tags: ['Xamarin', 'C#', 'iOS', 'Android'],
    projects: [
      {
        name: 'S-Net Mobile Application',
        points: [
          'Evolved the S-Net mobile banking client for Spuerkeess bank, integrating the Payconiq - Digicash cashless payment system to send and receive money and pay bills with a QR code.',
          'Implemented screens, menus and search filters in code and with graphical tools, with common backend logic for iOS and Android.',
          'Added a discrete mode wherever account amounts are sensitive, plus numerous bug fixes.',
          'Git, scrum, Xamarin.iOS and Android in C#, interfacing with SOAP and REST services.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Full Stack',
    company: 'CoreLogic',
    location: 'Sofia, Bulgaria',
    period: 'Aug 2016 - Jan 2020',
    tags: ['Xamarin', 'Java', 'ASP.NET MVC', 'Oracle PL/SQL', 'TCL'],
    projects: [
      {
        name: 'Risk Manager Insurance Software',
        points: [
          'Built a greenfield iOS and Android app for DIY property inspections, letting owners take pictures, answer questions and send the result to the underwriting insurer. Used Xamarin and Java on Android.',
          'Created the web API portion of the Insured Portal in C# and ASP.NET MVC to serve the self-inspection Q&A to the mobile client.',
          'Research and development on Oracle PL/SQL, TCL and AOLserver with a JavaScript stack for the underwriting center software, working with the American team.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Mobile Applications',
    company: 'Questers - Processnet',
    location: 'Sofia, Bulgaria',
    period: 'Feb 2013 - Aug 2016',
    tags: ['Android', 'Xamarin.iOS', 'LINQ', 'OpenText'],
    projects: [
      {
        name: 'ProcessNet Document Console for Android',
        points: [
          'Designed a multithreaded Android app from scratch, backed by OpenText Content Server, to analyse, fetch, categorize and sort documents for the oil and gas sector.',
          'Custom clickable graphs open sorted tables and documents by various criteria. Supported Android up to KitKat, with fragments in multiple tabs.',
        ],
      },
      {
        name: 'ProcessNet Document Console Suite for iPad & iPhone',
        points: [
          'Designed a multithreaded, event-driven Xamarin.iOS app in C# showing document status with custom table views and clickable graphs. Targeted iOS 6 through 9.',
          'Used synchronous and asynchronous C# for networking and data processing, plus LINQ for filtering.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Web Cryptography',
    company: 'Questers - Certivox',
    location: 'Sofia, Bulgaria',
    period: 'Jun 2012 - Feb 2013',
    tags: ['C++', 'Java', 'JSP', 'Elliptic Curve Crypto'],
    projects: [
      {
        name: 'Skypin',
        points: [
          'Implemented and extended the Skypin client-server software in C++ and a web stack (HTML, JS, jQuery, Ajax, CSS).',
          'Skypin uses elliptic curve cryptography to replace username and password with a PIN, with distributed authentication instead of the traditional CA model.',
          'Built a C++ to JSON interface to Nimbusso single sign-on for OpenID Connect and LDAP with temporary sessions.',
        ],
      },
      {
        name: 'Parallels Servlet Application with Skypin',
        points: [
          'Created a Java servlet application and JSP / HTML5 / jQuery front end to add two-factor authentication to Parallels automation alongside traditional sign-on.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Mobile Applications',
    company: 'QRC',
    location: 'Gaithersburg, MD, USA',
    period: 'Jun 2010 - Oct 2011',
    tags: ['Android', 'Java', 'C#', 'Qualcomm', 'Windows Mobile'],
    projects: [
      {
        name: 'Android & Windows Mobile Cellular Survey Applications',
        points: [
          'Designed and implemented an Android 2.3 (Java) cellular survey tool that tracks and stores L1, L2 and L3 data and signal strengths for CDMA, GSM, WCDMA and LTE, with GPS timestamps. Read and wrote NV items and PRLs and accessed the diagnostic port using the QXDM and QPST suites.',
          'Built a custom dialer with auto-dialing using the AIDL telephony interface to the RIL.',
          'Extended the WM6.5 C# tool with GSM and WCDMA support and a 2D signal strength graph. All data logged for upload to mapping software.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Unmanned Air Vehicles',
    company: 'AAI-Textron',
    location: 'Hunt Valley, MD, USA',
    period: 'Apr 2009 - Jun 2010',
    tags: ['C#', 'WPF', 'C++', 'Lynx RTOS', 'UDP'],
    projects: [
      {
        name: 'UAV Rugged Serial to Fiber Converter Interface Software',
        points: [
          'Created a WPF GUI in C# to test the serial-to-LAN-to-fiber converter that links six serial devices to the universal ground control system. Used WMI and sockets to ping, run UDP-to-serial loop-back tests and set IP addresses.',
          'Built a latency test tool with configurable byte and baud settings and sub-millisecond timestamps, with output to Excel.',
          'Wrote environmental uptime tests in managed C++ and embedded C++ compiled for the Lynx RTOS, logging to file and display.',
          'Followed process methodology and design drawings through to a successful prototype and final product.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Unmanned Air Vehicles',
    company: 'AAI-Textron',
    location: 'Charleston, SC, USA',
    period: 'Mar 2008 - Apr 2009',
    tags: ['C++', 'MFC', 'Java', 'IceFaces', 'UDP'],
    projects: [
      {
        name: 'UAV Web Command Software',
        points: [
          'Agile scrum project creating a server-side dynamic web interface for UAV platforms using Java and the IceFaces component library, built with Eclipse and Ant to Apache Tomcat.',
        ],
      },
      {
        name: 'UAV GCS & AVSim Ethernet Interface',
        points: [
          'Designed a UDP Ethernet interface to replace an Air Vehicle Operator by automating sixty-nine commands, such as heading and altitude.',
          'Integrated data fed to the air vehicle onto a serial stream running at 16Hz, 8Hz, 4Hz and 2Hz. Written in C++ and MFC, and upgraded from VC++6 to VS 2008.',
        ],
      },
      {
        name: 'UAV Ground Control Station Test Software',
        points: [
          'Designed from scratch in MFC and VC++6 a GCS test station that exercises fourteen Ethernet connections to fourteen hosts, eight RS232 interfaces, and command and control of a video keyer over serial.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Aerospace & Simulation',
    company: 'MGSA',
    location: 'Warner Robins, GA, USA',
    period: 'Oct 2005 - Sep 2007',
    tags: ['C++', 'MFC', 'Win32', 'RTX', 'C-130'],
    projects: [
      {
        name: 'C-130 Talon / Gunship Airplane Simulator',
        points: [
          'Helped develop a C-130 IDE emulating embedded processors on a PC to simulate the many flavors of C-130 aircraft, using Windows synchronization events in multithreaded, multi-process software.',
          'Simulated "real time" synchronized with a flight model simulator, hardware simulator and Intel 1750 CPU simulator. Implemented a modified round robin scheduler with breakpoints and freeze modes.',
          'Numerous major re-hosting and reverse engineering projects for Lockheed Martin C-130 simulation on a PC, using RTX, MFC, .NET and Win32 in C, C++ and C#, with design documentation.',
        ],
      },
    ],
  },
  {
    role: 'Software Engineer - Banking & Automation',
    company: 'Gunnebo',
    location: 'Reims, France',
    period: 'Mar 2005 - Sep 2005',
    tags: ['C', 'PIC', 'i2c', 'RS232', 'Embedded'],
    projects: [
      {
        name: 'Automated Banking Deposit Machine',
        points: [
          'Banking machine software allowing deposits into a drop-in safe after a bank-programmed magnetic stripe card is inserted, using master and client cards or the PC interface software.',
          'State machine in C on a PIC chip with RS232 interfacing to a PC.',
        ],
      },
      {
        name: 'Automated Banking Deposit Machine with Bar Code Reader',
        points: [
          'Software and hardware prototype storing a serial bar code reading with date and time and envelope seen / not seen data in an external serial EEPROM over i2c, with time from an i2c real time clock.',
          'LCD client interface with intuitive prompts and photo-diode envelope detection.',
        ],
      },
    ],
  },
  {
    role: 'Computer Helpdesk Technician',
    company: 'Clemson Computing & Information Technology',
    location: 'Clemson, SC, USA',
    period: 'Apr 2002 - May 2004',
    tags: ['Support', 'Novell', 'Networking'],
    projects: [
      {
        name: '',
        points: [
          'Troubleshot software and hardware issues in person, by phone and email, and by remote control across a large network.',
          'Monitored network readiness and relayed emergencies to the right IT divisions.',
          'Used the Novell network and WAN to manage users and connect them to Wi-Fi.',
        ],
      },
    ],
  },
];

export const education = [
  { course: 'B.S. Electrical Engineering', school: 'Clemson University', place: 'Clemson, South Carolina, USA', period: 'May 2004' },
  { course: 'A.S. Electrical Engineering Technology', school: 'TCTC College', place: 'Pendleton, South Carolina, USA', period: 'May 2003' },
];

export const languages = [
  { name: 'English', level: 'Fluent', pct: 100 },
  { name: 'French', level: 'Fluent', pct: 100 },
  { name: 'Hungarian', level: 'Intermediate', pct: 55 },
  { name: 'Bulgarian', level: 'Beginner', pct: 25 },
];

export const platforms = [
  { platform: 'AI', icon: 'AI', languages: 'Python, C#, JS, HTML, CSS', tools: 'AWS Bedrock, LangChain, Langfuse' },
  { platform: 'Desktop', icon: 'PC', languages: 'C#, C++, C, MASM', tools: '.NET, WinForms, WPF, MFC, Win32' },
  { platform: 'Android', icon: 'AN', languages: 'Java, C#', tools: 'Native, Xamarin.Android, Gradle, ADB' },
  { platform: 'iOS', icon: 'iOS', languages: 'C#', tools: 'Xamarin.iOS, Charles Proxy, Fastlane' },
  { platform: 'Web', icon: 'WWW', languages: 'JS, HTML, Java, TCL, PL/SQL', tools: 'WebView2, jQuery, CSS, Ajax, JSP, JSF, IceFaces, Tomcat' },
  { platform: 'Embedded', icon: 'uC', languages: 'C, PIC Assembly', tools: 'PIC Framework' },
];

export const otherSkills = [
  { label: 'IDEs', items: ['Visual Studio', 'Android Studio', 'Eclipse', 'VS Code', 'NetBeans', 'MPLAB'] },
  { label: 'Databases', items: ['Oracle', 'SQLite', 'MSSQL'] },
  { label: 'Source control', items: ['Git', 'TFS', 'Subversion', 'ClearCase'] },
  { label: 'Project management / tools', items: ['Jira', 'TFS Agile Boards', 'Polarion', 'Ant', 'Proguard', 'Apache Tomcat'] },
  { label: 'Protocols', items: ['I2C', 'UDP', 'TCP', 'RS232', 'RS422', 'RS485', 'Reflective & Shared Memory (SCRAMNet)'] },
  { label: 'Concepts / OS', items: ['RTOS on Windows & Linux', 'Multithreading', 'Asynchronous', 'Object-Oriented Design'] },
];

export const hardware = [
  'Android, iOS, Windows Mobile 5 - 6.5',
  'Intel 8086 & PIC 16F876A chips',
  'Memory & discrete I/O board interfacing',
  'Magnetic stripe & bar code readers',
  'Serial EEPROM, LCD screens',
  'Raspberry Pi, Software Defined Radio',
];
