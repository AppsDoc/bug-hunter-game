'use strict';

const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const Schema = mongoose.Schema;

// https://developer.github.com/v3/activity/events/types/#issuesevent
const BugSchema = new Schema({
	githubRepositoryId: { type: Number, required: true },
	githubIssueId: { type: Number, required: true, unique: true },
	githubNumber: { type: Number },
	title: { type: String, required: true },
	url: { type: String, required: true, unique: true },
	body: String,
	created_at: Date,
	updated_at: Date,
	closed_at: Date,
	labels: [String],
});

BugSchema.plugin(findOrCreate);

mongoose.model('Bug', BugSchema);
