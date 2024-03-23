import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gate',
  title: 'GATE',
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
    defineField({
      name: 'uploadDate',
      title: 'Upload Date',
      type: 'datetime',
    }),
   
  ],
 
})
