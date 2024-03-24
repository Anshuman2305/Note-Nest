import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recordclass',
  title: 'Recorded Class',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
  ],
 
})
