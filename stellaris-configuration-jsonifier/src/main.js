const stellarisParserJob = require('./jobs/stellaris_parser_job');

// Read config
const config = readAppConfiguration();

// Calls the jobs
stellarisParserJob(config);
















