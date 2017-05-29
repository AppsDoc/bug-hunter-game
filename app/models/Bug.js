'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// https://developer.github.com/v3/activity/events/types/#issuesevent
const BugSchema = new Schema({
	githubRepositoryId: { type: Number, required: true },
	githubIssueId: { type: Number, required: true, unique: true },
	title: { type: String, required: true },
	url: { type: String, required: true, unique: true },
	body: String,
	created_at: Date,
	updated_at: Date,
	closed_at: Date,
	labels: [String],
});

mongoose.model('Bug', BugSchema);
