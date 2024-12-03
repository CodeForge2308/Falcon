#!/usr/bin/env node

import { Command } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import chalk from 'chalk'
import { indexTemplate } from './file-templates/index.template';
import { packageJsonTemplateGenerator } from './file-templates/packageJson.template';
import { tsConfigGenerator } from './file-templates/tsconfigJson.template';

const program = new Command();

program
    .name('Falcon')
    .description('CLI to generate a GraphQL Node.js TypeScript server boilerplate for API Gateway')
    .version('1.0.0');

program
    .command('init')
    .description('Generate boilerplate for a GraphQL server')
    .argument('<project-name>', 'Name of the project directory')
    .action((projectName) => {
        const projectPath = path.resolve(process.cwd(), projectName);

        console.log(chalk.blue(`\nCreating project at: ${projectPath}\n`));

        // Directory structure
        const dirs = [
            path.join(projectPath, 'src'),
            path.join(projectPath, 'src', 'resolvers'),
            path.join(projectPath, 'src', 'types'),
        ];

        // Create directories
        dirs.forEach((dir) => {
            fs.ensureDirSync(dir);
        });

        // Create files
        const files = {
            'package.json': packageJsonTemplateGenerator(projectName),
            'tsconfig.json': tsConfigGenerator(),
            'src/index.ts': IndexTemplate,
            'src/types/schema.ts': `import { gql } from 'apollo-server';

export const typeDefs = gql\`
  type Query {
    hello: String
  }
\`;`,
            'src/resolvers/index.ts': ``,
        };

        Object.entries(files).forEach(([filePath, content]) => {
            fs.outputFileSync(path.join(projectPath, filePath), content);
        });

        console.log(chalk.green('\nProject created successfully!\n'));
    });

program.parse(process.argv);
