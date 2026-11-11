// Edit this list: each object becomes a card on the home page.
// `url` is optional. Without it the card is plain text (useful for NDA-protected work).
export const projects = [
  {
    title: 'ELT pipeline with dbt + Snowflake',
    description: 'Layered modeling (staging, intermediate, marts), tests and auto-generated docs.',
    stack: ['dbt', 'Snowflake', 'SQL'],
    url: 'https://github.com/davilla41',
  },
  {
    title: 'Reporting automation',
    description: 'Python orchestration that builds and distributes reports with zero manual work.',
    stack: ['Python', 'PostgreSQL', 'Tableau'],
  },
  {
    title: 'Large-scale processing with PySpark',
    description: 'Databricks jobs that transform large volumes of data with controlled costs.',
    stack: ['PySpark', 'Databricks'],
  },
];
