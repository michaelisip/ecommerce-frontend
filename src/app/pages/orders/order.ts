export interface Order {
  id: number,
  status: number,
  user_id: number,
  created_at: Date,
  updated_at: Date,
  products: any,
  user: any
}
