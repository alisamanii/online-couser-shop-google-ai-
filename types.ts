
export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  imageUrl: string;
  description: string;
  tags: string[];
}

export interface CartItem extends Course {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}
