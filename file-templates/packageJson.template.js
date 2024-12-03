export const packageJsonTemplateGenerator = (projectName) => {
    return JSON.stringify(
        {
            name: projectName,
            version: '1.0.0',
            main: 'dist/index.js',
            scripts: {
                start: 'node dist/index.js',
                build: 'tsc',
            },
            dependencies: {
                graphql: '^16.0.0',
                'apollo-server': '^3.0.0',
            },
            devDependencies: {
                typescript: '^4.0.0',
                '@types/node': '^16.0.0',
            },
        },
        null,
        2
    )
}