'use strict';

var audioconcat = require('audioconcat');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');


var mp3Files = [
	'SampleAudio_0.4mb.mp3',
	'SampleAudio_0.7mb.mp3',
];

audioconcat(mp3Files)
	.concat('final_output.mp3')
	.on('start', function (command) {
		console.log('ffmpeg process started:', command);
	})
	.on('error', function (err, stdout, stderr) {
		console.error('Error:', err)
		console.error('ffmpeg stderr:', stderr);
	})
	.on('end', function (output) {
		console.error('Audio created in:', output);
	});
