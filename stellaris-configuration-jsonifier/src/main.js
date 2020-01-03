const stellarisParser = require('./jobs/stellaris_parser');

// Read config
const config = readAppConfiguration();

// Calls the jobs
stellarisParser(config);
















