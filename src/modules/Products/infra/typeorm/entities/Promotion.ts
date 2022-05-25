import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export type PromotionType =  "buyAndTake" | "buyAndPay"

@Entity("promotions")
export class Promotion {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  compre: number;

  @Column()
  pague: number;

  @Column()
  type: PromotionType;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
