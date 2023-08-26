import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'default',
    title: 'FCC Sanity portfolio',
    projectId: 'bv171li7',
    dataset: 'production',
    basePath: "/studio",
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
    },
})
