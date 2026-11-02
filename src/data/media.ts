export const flickrProfile = 'https://www.flickr.com/photos/159429942@N07/';

export const droneAlbums = [
  { name: 'Golden Beach', url: 'https://www.flickr.com/photos/159429942@N07/albums/72157695807029430' },
  { name: 'Marble Beach', url: 'https://www.flickr.com/photos/159429942@N07/albums/72157673729246278' },
  { name: 'Makryamos Beach', url: 'https://www.flickr.com/photos/159429942@N07/albums/72157695772165220' },
  { name: 'Paradise Beach', url: 'https://www.flickr.com/photos/159429942@N07/albums/72157671539528277' },
  { name: 'Giola Natural Pool', url: 'https://www.flickr.com/photos/159429942@N07/albums/72157710381174706' },
];

export const dronePhotos: { src: string; album: string; year: string; flickr: string }[] = [
  { src: '/drone/thasos-golden-1.jpg', album: 'Golden Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/30883728318/' },
  { src: '/drone/thasos-golden-2.jpg', album: 'Golden Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/30883727868/' },
  { src: '/drone/thasos-golden-3.jpg', album: 'Golden Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44705259202/' },
  { src: '/drone/thasos-golden-4.jpg', album: 'Golden Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44754168691/' },
  { src: '/drone/thasos-golden-5.jpg', album: 'Golden Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/29817630697/' },
  { src: '/drone/thasos-marble-1.jpg', album: 'Marble Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/43036042550/' },
  { src: '/drone/thasos-marble-2.jpg', album: 'Marble Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/43036040410/' },
  { src: '/drone/thasos-marble-3.jpg', album: 'Marble Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44797596292/' },
  { src: '/drone/thasos-marble-4.jpg', album: 'Marble Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/43036044680/' },
  { src: '/drone/thasos-marble-5.jpg', album: 'Marble Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44797600702/' },
  { src: '/drone/thasos-makryamos-1.jpg', album: 'Makryamos Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/29911116207/' },
  { src: '/drone/thasos-makryamos-2.jpg', album: 'Makryamos Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44126632694/' },
  { src: '/drone/thasos-makryamos-3.jpg', album: 'Makryamos Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44126630674/' },
  { src: '/drone/thasos-makryamos-4.jpg', album: 'Makryamos Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44847291151/' },
  { src: '/drone/thasos-makryamos-5.jpg', album: 'Makryamos Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44126629804/' },
  { src: '/drone/thasos-makryamos-6.jpg', album: 'Makryamos Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44126629304/' },
  { src: '/drone/thasos-paradise-1.jpg', album: 'Paradise Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/29910774977/' },
  { src: '/drone/thasos-paradise-2.jpg', album: 'Paradise Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/44797328442/' },
  { src: '/drone/thasos-paradise-3.jpg', album: 'Paradise Beach', year: '2018', flickr: 'https://www.flickr.com/photos/159429942@N07/43936340865/' },
  { src: '/drone/thasos-giola-1.jpg', album: 'Giola Natural Pool', year: '2019', flickr: 'https://www.flickr.com/photos/159429942@N07/48563330646/' },
  { src: '/drone/thasos-giola-2.jpg', album: 'Giola Natural Pool', year: '2019', flickr: 'https://www.flickr.com/photos/159429942@N07/48563471947/' },
  { src: '/drone/thasos-giola-3.jpg', album: 'Giola Natural Pool', year: '2019', flickr: 'https://www.flickr.com/photos/159429942@N07/48563473562/' },
  { src: '/drone/thasos-giola-4.jpg', album: 'Giola Natural Pool', year: '2019', flickr: 'https://www.flickr.com/photos/159429942@N07/48563475777/' },
];

export const droneGear = [
  { name: 'DJI Spark', note: 'Thasos 2018 - 2019' },
  { name: 'DJI Mini 2', note: '' },
  { name: 'ND filters', note: 'For smoother video and richer colour in bright light' },
];

export const droneVideos: { youtubeId: string; title: string }[] = [];

export const printSetup = {
  photo: '/prints/p1s-ams.jpg',
  alt: 'Bambu Lab P1S with a four-spool AMS on top',
  printer: 'Bambu Lab P1S',
  ams: 'AMS, 4 spools',
};

export const printHighlights = [
  { title: 'Enclosed and fast', text: 'The P1S is an enclosed CoreXY printer with a 256 x 256 x 256 mm build volume. The enclosure keeps temperatures steady, which helps with materials like PETG and ASA.' },
  { title: 'Multi-colour with the AMS', text: 'The AMS holds four spools and swaps filament automatically, so a single print can use several colours or materials, and a spool can be swapped for a matching one when it runs out.' },
  { title: 'Print, tweak, repeat', text: 'Quick prints make it easy to iterate on functional parts: brackets, holders, enclosures and drone accessories.' },
];

export const printTools = [
  { name: 'OpenSCAD', tag: 'Code to model', text: 'Describe a part as code: parameters, loops and boolean operations. Change one number and the whole model updates, which suits functional parts and anything that needs exact dimensions.', url: 'https://openscad.org/' },
  { name: 'Blender', tag: 'Sculpt and design', text: 'Free and powerful for organic shapes, remixing downloaded models, and repairing meshes. Its Python scripting also lets you generate geometry from code.', url: 'https://www.blender.org/' },
  { name: 'Bambu Studio', tag: 'Slice and print', text: 'The slicer for the P1S. Import an STL or 3MF, assign colours per part for the AMS, tune supports and speeds, then send the job to the printer over Wi-Fi.', url: 'https://bambulab.com/en/download/studio' },
  { name: 'CadQuery / build123d', tag: 'Python CAD', text: 'Code-driven CAD in Python for people who prefer Python over OpenSCAD syntax. Good for parametric, version-controlled designs.', url: 'https://build123d.readthedocs.io/' },
];

export const printWorkflow = [
  'Write or script the model in OpenSCAD (or Python), exposing the key dimensions as parameters.',
  'Export STL or 3MF. Use Blender when the shape needs sculpting, remixing or mesh cleanup.',
  'Open it in Bambu Studio, pick the filaments in the AMS, and slice.',
  'Print, measure, adjust a parameter, and print again.',
];
