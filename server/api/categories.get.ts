import { query } from '../utils/db'

export default defineEventHandler(async () => {
  const { rows } = await query(`SELECT id, title, slug, image, description FROM categories WHERE is_active = true ORDER BY id ASC`)
  return rows
})