import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Promotion } from "./Promotion";

@Entity("products")
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  value: number;

  @Column()
  promotion_id: string;

  @ManyToOne(() => Promotion )
  @JoinColumn({name: "promotion_id" })
  promotion: Promotion;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
