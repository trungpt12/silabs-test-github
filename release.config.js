module.exports = {
	branches: "master",
	repositoryUrl: "https://github.com/trungpt12/silabs-test-github",
	plugins: [
		"@semantic-release/commit-analyzer", "@semantic-release/release-notes-generator", 
		["@semantic-release/github", {
			assets: [
				{ path: "build.zip", label: "Build" },
			]
		}]
		]
}