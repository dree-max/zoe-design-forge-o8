const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

export const isSanityConfigured = Boolean(
  projectId &&
    dataset &&
    projectId !== 'your-project-id' &&
    dataset !== 'your-dataset',
)
