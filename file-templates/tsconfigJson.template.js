export const tsConfigGenerator = () => {

    return JSON.stringify(
        {
            compilerOptions: {
                target: 'ES6',
                module: 'CommonJS',
                outDir: './dist',
                rootDir: './src',
                strict: true,
                esModuleInterop: true,
            },
        },
        null,
        2
    )
}