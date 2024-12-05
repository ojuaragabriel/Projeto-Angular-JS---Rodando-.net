export interface OrderInterface {
  statusId: number;
  value: number;
  observation: string;
  productOrders: {
    productId: number;
    quantity: number;
  }[];
  userOrders: {
    userId: number;
  }[];
}