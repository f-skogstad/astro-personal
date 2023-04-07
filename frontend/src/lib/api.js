import {
  useSanityClient,
  groq,
  createImageBuilder,
  portableTextToHtml,
} from 'astro-sanity';

// Image Builder
export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source) {
  return imageBuilder.image(source);
}

// Portable Text
const customComponents = {
  /* Place custom components here */
  types: {
    image: ({ value }) =>
      `<img src="${urlForImage(value).url()}" style="max-width:100%;" />`,
    code: ({ value }) => `<pre><code>${value.code}</code></pre>`,
  },
};

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}

// Site settings
export async function getSiteSettings() {
  const query = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]`;
  const siteSettings = await useSanityClient().fetch(query);
  return siteSettings;
}

// Blog Posts
export async function getBlogPosts() {
  const query = groq`*[_type == "post"]`;
  const posts = await useSanityClient().fetch(query);
  return posts;
}

// Blog Post Categories
export async function getBlogPostCategories() {
  const query = groq`*[_type == "post"]{categories[] ->}`;
  const postCategories = await useSanityClient().fetch(query);
  return postCategories;
}

// Projects
export async function getProjects() {
  const query = groq`*[_type == "project"]`;
  const projects = await useSanityClient().fetch(query);
  return projects;
}

// Project Categories
export async function getProjectCategories() {
  const query = groq`*[_type == "project"]{categories[] ->}`;
  const projectCategories = await useSanityClient().fetch(query);
  return projectCategories;
}
