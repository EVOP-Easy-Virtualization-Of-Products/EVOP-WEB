import { buildProperties, buildCollection, buildSchema } from "firecms";

const blogPostsCollection = buildCollection({
  name: "Blog Posts",
  singularName: "Blog Post",
  path: "blog_posts",
  permissions: ({ authController }) => ({
    read: true,
    edit: true,
    create: true,
    delete: true,
  }),
  schema: buildSchema({
    name: "Blog Post",
    properties: {
      title: {
        title: "Title",
        validation: { required: true },
        dataType: "string"
      },
      content: {
        title: "Content",
        validation: { required: true },
        dataType: "string",
        config: {
          multiline: true
        }
      },
      author: {
        title: "Author",
        validation: { required: true },
        dataType: "string"
      },
      date: {
        title: "Date",
        validation: { required: true },
        dataType: "date"
      },
      image: {
        title: "Cover Image",
        dataType: "string",
        config: {
          storageMeta: {
            mediaType: "image",
            storagePath: "blog_images",
            acceptedFiles: ["image/*"]
          }
        }
      }
    }
  })
});

export const collections = [blogPostsCollection];

